const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.analyticsspire.com';

// 1. Dynamically read routes from App.tsx
let discoveredRoutes = [];
try {
  const appFile = path.join(__dirname, '..', 'App.tsx');
  if (fs.existsSync(appFile)) {
    const appContent = fs.readFileSync(appFile, 'utf-8');
    // Regex matches <Route ... path="/something" ...> or <Route path="/something" ...>
    const routeRegex = /<Route\s+[^>]*path=["']\/([^"']*)["']/gi;
    let match;
    const routesSet = new Set();
    while ((match = routeRegex.exec(appContent)) !== null) {
      const p = match[1].trim();
      if (p !== '*') {
        routesSet.add(p);
      }
    }
    discoveredRoutes = Array.from(routesSet);
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

