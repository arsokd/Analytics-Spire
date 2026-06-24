import fs from 'fs';
import path from 'path';

const routes = ['about', 'services', 'media', 'events', 'contact', 'payment', 'webinar', 'moringa'];
const distDir = path.resolve(process.cwd(), 'dist');
const indexFile = path.resolve(distDir, 'index.html');

if (fs.existsSync(indexFile)) {
  const content = fs.readFileSync(indexFile, 'utf-8');
  routes.forEach(route => {
    const routeDir = path.resolve(distDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(routeDir, 'index.html'), content);
    fs.writeFileSync(path.resolve(distDir, `${route}.html`), content);
  });
  console.log('Copied index.html to static routes');
} else {
  console.error('index.html not found in dist/');
}
