const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.analyticsspire.com';

// 1. Dynamically read routes from App.tsx using multiple fallback locations
let discoveredRoutes = [];
try {
  const possiblePaths = [
    path.join(__dirname, '..', 'App.tsx'),
    path.resolve(process.cwd(), 'App.tsx'),
    path.resolve(process.cwd(), 'src', 'App.tsx')
  ];

  let appFile = '';
  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      appFile = p;
      break;
    }
  }

  if (appFile) {
    console.log(`Scanning router file for dynamic sitemap generation: ${appFile}`);
    const appContent = fs.readFileSync(appFile, 'utf-8');
    // Highly resilient regex matching path="..." or path='...' with or without leading slashes
    const routeRegex = /path=["']\/?([^"']*)["']/gi;
    let match;
    const routesSet = new Set();
    while ((match = routeRegex.exec(appContent)) !== null) {
      let p = match[1].trim();
      if (p.endsWith('/')) {
        p = p.slice(0, -1);
      }
      if (p !== '*' && p !== '/*') {
        routesSet.add(p);
      }
    }
    discoveredRoutes = Array.from(routesSet);
  } else {
    console.warn('Could not locate App.tsx in any of the standard paths.');
  }
} catch (err) {
  console.error('Error reading/parsing App.tsx:', err);
}

// Fallback if parsing failed or is empty
if (discoveredRoutes.length === 0) {
  discoveredRoutes = ['', 'about', 'services', 'blog', 'media', 'events', 'contact', 'payment', 'webinar', 'moringa'];
}

// Ensure root is in there and normalize
if (!discoveredRoutes.includes('')) {
  discoveredRoutes.unshift('');
}

// Map to XML entries with specific prioritizations
const today = new Date().toISOString().split('T')[0];
const routes = discoveredRoutes.map(routePath => {
  let changefreq = 'weekly';
  let priority = '0.8';

  if (routePath === '') {
    changefreq = 'daily';
    priority = '1.0';
  } else if (routePath === 'blog') {
    changefreq = 'daily';
    priority = '0.9';
  } else if (routePath === 'services') {
    changefreq = 'weekly';
    priority = '0.8';
  } else if (routePath === 'payment') {
    changefreq = 'monthly';
    priority = '0.5';
  } else if (routePath === 'contact') {
    changefreq = 'monthly';
    priority = '0.6';
  }

  return {
    path: routePath,
    changefreq,
    priority
  };
});

// Build Sitemap
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r.path ? '/' + r.path : ''}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const robotsContent = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

const publicDir = path.join(__dirname, '..', 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapContent.trim());
console.log('Generated public/sitemap.xml with dynamic routes:', discoveredRoutes);

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent.trim());
console.log('Generated public/robots.txt');

