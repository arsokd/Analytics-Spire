const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://analyticsspire.com';

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
      // EXCLUDE parameterized route templates like 'blog/:slug' and wildcards
      if (p !== '*' && p !== '/*' && !p.includes(':')) {
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

// Ensure non-parameterized core pages are present
const corePages = ['', 'about', 'services', 'blog', 'media', 'events', 'contact', 'payment', 'webinar', 'moringa'];
corePages.forEach(p => {
  if (!discoveredRoutes.includes(p) && !p.includes(':')) {
    discoveredRoutes.push(p);
  }
});

// Explicitly add resolved real blog post URLs with genuine publish/edit dates
const realBlogPosts = [
  { path: 'blog/automate-small-manufacturing-business-india', lastmod: '2026-07-20' },
  { path: 'blog/business-analytics-for-msme-india', lastmod: '2026-07-20' },
  { path: 'blog/cash-flow-management-small-business-india', lastmod: '2026-07-20' },
  { path: 'blog/reduce-inventory-costs-small-business-india', lastmod: '2026-07-20' },
  { path: 'blog/digital-marketing-for-msme-india', lastmod: '2026-07-20' },
  { path: 'blog/improve-operational-efficiency-msme-india', lastmod: '2026-07-20' },
  { path: 'blog/employee-training-msme-india', lastmod: '2026-07-20' },
  { path: 'blog/market-size-estimation-consumer-behaviour-india', lastmod: '2026-07-20' }
];

// Clean out any parameterized routes from discoveredRoutes
discoveredRoutes = discoveredRoutes.filter(r => !r.includes(':'));

// Ensure root is at beginning
if (!discoveredRoutes.includes('')) {
  discoveredRoutes.unshift('');
}

// Map to XML entries with specific priorities and genuine lastmod dates (no changefreq)
const routes = discoveredRoutes.map(routePath => {
  let priority = '0.8';

  if (routePath === '') {
    priority = '1.0';
  } else if (routePath === 'blog') {
    priority = '0.9';
  } else if (routePath === 'services') {
    priority = '0.8';
  } else if (routePath === 'payment') {
    priority = '0.5';
  } else if (routePath === 'contact') {
    priority = '0.6';
  }

  // Check if it's a blog post with a genuine lastmod date
  const blogMatch = realBlogPosts.find(b => b.path === routePath);
  const lastmod = blogMatch ? blogMatch.lastmod : null;

  return {
    path: routePath,
    lastmod,
    priority
  };
});

// Also append blog posts if not already included
realBlogPosts.forEach(bp => {
  if (!routes.some(r => r.path === bp.path)) {
    routes.push({
      path: bp.path,
      lastmod: bp.lastmod,
      priority: '0.8'
    });
  }
});

// Build Sitemap without changefreq, and with lastmod only when genuine edit dates exist
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}${r.path ? '/' + r.path : ''}</loc>${r.lastmod ? `\n    <lastmod>${r.lastmod}</lastmod>` : ''}
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

