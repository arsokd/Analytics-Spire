import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Health Check
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Google Apps Script Proxy for Site Data
  app.get('/api/site-data', async (req, res) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec');
      if (!response.ok) {
        throw new Error(`Google Script returned status ${response.status}`);
      }
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        return res.status(403).json({ 
          error: 'Access Denied / Misconfigured Web App', 
          message: 'The Google Apps Script returned HTML instead of JSON. This usually means "Who has access" is set to "Only myself" instead of "Anyone". Please redeploy your script in Google Sheets and choose "Anyone" for access.' 
        });
      }
      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error('Proxy site-data fetch failed gracefully:', error.message);
      res.status(500).json({ error: 'Proxy fetch failed', message: error.message });
    }
  });

  // Google Apps Script Proxy for Login Verification
  app.get('/api/verify-login', async (req, res) => {
    const { email, pass } = req.query;
    if (!email || !pass) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    try {
      const targetUrl = `https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec?action=login&email=${encodeURIComponent(String(email))}&pass=${encodeURIComponent(String(pass))}`;
      const response = await fetch(targetUrl);
      if (!response.ok) {
        throw new Error(`Google Script returned status ${response.status}`);
      }
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        return res.status(403).json({ 
          error: 'Access Denied / Misconfigured Web App', 
          message: 'The Google Apps Script returned HTML instead of JSON. This usually means "Who has access" is set to "Only myself" instead of "Anyone". Please redeploy your script in Google Sheets and choose "Anyone" for access.' 
        });
      }
      const data = await response.json();
      res.json(data);
    } catch (error: any) {
      console.error('Proxy verify-login failed gracefully:', error.message);
      res.status(500).json({ error: 'Proxy login verification failed', message: error.message });
    }
  });

  // Google Apps Script Proxy for Lead Submission
  app.post('/api/submit-lead', express.json(), async (req, res) => {
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
      });
      const contentType = response.headers.get('content-type') || '';
      if (contentType.includes('text/html')) {
        return res.status(403).json({ 
          error: 'Access Denied / Misconfigured Web App', 
          message: 'The Google Apps Script returned HTML instead of JSON. This usually means "Who has access" is set to "Only myself" instead of "Anyone". Please redeploy your script in Google Sheets and choose "Anyone" for access.' 
        });
      }
      const responseText = await response.text();
      res.send(responseText);
    } catch (error: any) {
      console.error('Proxy submit-lead failed gracefully:', error.message);
      res.status(500).json({ error: 'Proxy lead submission failed', message: error.message });
    }
  });

  const PAGE_METADATA: Record<string, { title: string; description: string; h1: string; content: string }> = {
    '/': {
      title: 'MSME Business Consultant & Automation Expert | Analytics Spire',
      description: 'Analytics Spire helps Indian MSMEs cut costs and scale with data-driven consulting and AI automation. Led by Anand Rengasamy. Book a free consultation.',
      h1: 'Business consulting and automation for MSMEs across India',
      content: 'Analytics Spire helps Indian MSMEs cut costs and scale with data-driven consulting and AI automation. Led by Anand Rengasamy. Turn your Business into Growth Machine.'
    },
    '/about': {
      title: 'About Anand Rengasamy | MSME Consultant, Analytics Spire',
      description: '30+ years of engineering experience turned into practical MSME consulting. Meet Anand Rengasamy, founder of Analytics Spire, and our approach to growth.',
      h1: 'Meet the consultant behind Analytics Spire',
      content: 'Anand Rengasamy Founder & Principal Consultant with BITS Pilani background. 30+ years of corporate engineering experience turned into actionable, low-cost growth strategies for Indian MSMEs.'
    },
    '/services': {
      title: 'MSME Automation Services: CRM, Inventory, Payroll | Analytics Spire',
      description: "Explore Analytics Spire's no-code automation services for MSMEs — CRM, telecalling, inventory, attendance, payroll, and finance systems. See what fits your business.",
      h1: 'Automation and consulting services for growing MSMEs',
      content: "Explore Analytics Spire's no-code automation services for MSMEs — CRM, telecalling, inventory, attendance, payroll, and finance systems. See what fits your business."
    },
    '/blog': {
      title: 'MSME Business Growth Blog | Analytics Spire',
      description: 'Read expert insights, real case studies, and guide articles on MSME business consulting, growth strategies, and no-code automation systems.',
      h1: 'Latest articles, guides, and insights on MSME growth',
      content: 'Read expert insights, real case studies, and guide articles on MSME business consulting, growth strategies, and no-code automation systems.'
    },
    '/contact': {
      title: 'Contact Analytics Spire | Book a Free MSME Consultation',
      description: 'Ready to automate and grow your MSME? Contact Analytics Spire for a free consultation with Anand Rengasamy. Serving businesses across India.',
      h1: 'Get in touch with Analytics Spire',
      content: 'Ready to automate and grow your MSME? Contact Analytics Spire for a free consultation with Anand Rengasamy. Serving businesses across India. Securely verify your identity and share your business landscape for a preliminary assessment.'
    },
    '/media': {
      title: 'MSME Training & Business Podcasts | Analytics Spire',
      description: 'Watch and listen to expert business training videos, financial literacy workshops, and small business growth podcasts by Anand Rengasamy.',
      h1: 'MSME training videos and business podcasts',
      content: 'Watch and listen to expert business training videos, financial literacy workshops, and small business growth podcasts by Anand Rengasamy.'
    },
    '/events': {
      title: 'MSME Digital Transformation Workshops & Seminars | Analytics Spire',
      description: 'Join our upcoming digital transformation workshops, financial literacy panels, and small business growth summits across India.',
      h1: 'Upcoming events and workshops for Indian MSMEs',
      content: 'Join our upcoming digital transformation workshops, financial literacy panels, and small business growth summits across India.'
    },
    '/payment': {
      title: 'Secure Consultation Payment | Analytics Spire',
      description: 'Make secure payments for your MSME business consulting, coaching sessions, or specialized training programs with Analytics Spire.',
      h1: 'Secure payment for consulting and training',
      content: 'Pay for your consulting services securely via Razorpay. Choose a service or enter a custom amount.'
    }
  };

  // Setup Vite development server or production static serving
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    app.get('*all', (req, res) => {
      const requestPath = req.path.replace(/\/$/, '') || '/';
      const metadata = PAGE_METADATA[requestPath] || PAGE_METADATA['/'];
      
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        let html = fs.readFileSync(indexPath, 'utf-8');
        
        // Dynamic Meta replacement for SEO bots
        html = html.replace(
          /<title>.*?<\/title>/,
          `<title>${metadata.title}</title>`
        );
        html = html.replace(
          /<meta name="description" content=".*?" \/>/,
          `<meta name="description" content="${metadata.description}" />`
        );
        
        // Inject pre-rendered semantic HTML fallback inside #root for crawlers to pick up immediately
        const preRenderedContent = `
          <div style="display:none" aria-hidden="true">
            <h1>${metadata.h1}</h1>
            <p>${metadata.content}</p>
            <nav>
              <a href="/">Home</a> | 
              <a href="/about">About</a> | 
              <a href="/services">Services</a> | 
              <a href="/blog">Blog</a> | 
              <a href="/media">Media</a> | 
              <a href="/events">Events</a> | 
              <a href="/contact">Contact</a> | 
              <a href="/payment">Payment</a>
            </nav>
          </div>
        `;
        
        html = html.replace(
          '<div id="root"></div>',
          `<div id="root">${preRenderedContent}</div>`
        );
        
        res.setHeader('Content-Type', 'text/html');
        res.status(200).send(html);
      } else {
        res.sendFile(indexPath);
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

