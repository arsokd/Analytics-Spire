const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.analyticsspire.com';
const routes = [
  { path: '', changefreq: 'daily', priority: '1.0' },
  { path: 'about', changefreq: 'weekly', priority: '0.8' },
  { path: 'services', changefreq: 'weekly', priority: '0.8' },
  { path: 'blog', changefreq: 'daily', priority: '0.9' },
  { path: 'media', changefreq: 'weekly', priority: '0.7' },
  { path: 'events', changefreq: 'weekly', priority: '0.7' },
  { path: 'payment', changefreq: 'monthly', priority: '0.5' },
  { path: 'contact', changefreq: 'monthly', priority: '0.6' }
];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(r => `  <url>
    <loc>${DOMAIN}/${r.path ? r.path + '/' : ''}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
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
console.log('Generated public/sitemap.xml');

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsContent.trim());
console.log('Generated public/robots.txt');
