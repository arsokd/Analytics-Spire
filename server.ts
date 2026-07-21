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
      
      const text = await response.text();
      try {
        const data = JSON.parse(text);
        res.json(data);
      } catch (parseError) {
        console.error('Failed to parse Google Apps Script response as JSON:', text.substring(0, 500));
        res.status(403).json({ 
          error: 'Access Denied / Misconfigured Web App', 
          message: 'The Google Apps Script returned HTML or invalid JSON instead of the expected data structure. Please ensure the Web App is deployed with Access set to "Anyone".'
        });
      }
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

      const text = await response.text();
      try {
        const data = JSON.parse(text);
        res.json(data);
      } catch (parseError) {
        console.error('Failed to parse login verification response as JSON:', text.substring(0, 500));
        res.status(403).json({ 
          error: 'Access Denied / Misconfigured Web App', 
          message: 'The Google Apps Script login verification returned HTML or invalid JSON instead of the expected data structure. Please ensure the Web App is deployed with Access set to "Anyone".'
        });
      }
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
      if (!response.ok) {
        throw new Error(`Google Script returned status ${response.status}`);
      }

      const text = await response.text();
      try {
        const data = JSON.parse(text);
        res.json(data);
      } catch (parseError) {
        // If the Apps Script returned plain text "Success" instead of JSON, package it as valid JSON
        if (text.trim().toLowerCase().includes('html') || text.trim().startsWith('<')) {
          res.status(403).json({ 
            error: 'Access Denied / Misconfigured Web App', 
            message: 'The Google Apps Script returned HTML instead of JSON. Please ensure Access is set to "Anyone".'
          });
        } else {
          res.json({ success: true, message: text.trim() });
        }
      }
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
      title: 'About Analytics Spire | MSME Consultant Anand Rengasamy',
      description: 'Meet Anand Rengasamy and Analytics Spire. 30 years of engineering and business experience helping Indian MSMEs grow through consulting, coaching and automation.',
      h1: 'Meet the consultant behind Analytics Spire',
      content: 'Anand Rengasamy Founder & Principal Consultant with BITS Pilani background. 30+ years of corporate engineering experience turned into actionable, low-cost growth strategies for Indian MSMEs.'
    },
    '/services': {
      title: 'MSME Consulting, Coaching & Automation Services | Analytics Spire',
      description: 'Explore Analytics Spire\'s consulting, coaching and no-code automation services for Indian MSMEs. Cut costs and scale faster. Book a free consultation today.',
      h1: 'Automation and consulting services for growing MSMEs',
      content: "Explore Analytics Spire's no-code automation services for MSMEs — CRM, telecalling, inventory, attendance, payroll, and finance systems. See what fits your business."
    },
    '/blog': {
      title: 'MSME Growth & Automation Blog | Analytics Spire',
      description: 'Practical tips on business automation, cost-cutting and scaling for Indian MSME owners. Insights from consultant Anand Rengasamy at Analytics Spire.',
      h1: 'Latest articles, guides, and insights on MSME growth',
      content: 'Read expert insights, real case studies, and guide articles on MSME business consulting, growth strategies, and no-code automation systems.'
    },
    '/blog/automate-small-manufacturing-business-india': {
      title: 'How to Automate a Small Manufacturing Business in India',
      description: 'A practical, jargon-free guide to automating a small manufacturing business in India affordably — attendance, stock, orders and reports — without hiring a developer.',
      h1: 'How to Automate Your Small Manufacturing Business in India (at an Affordable Price)',
      content: 'If you run a small manufacturing unit in India, your day probably involves an attendance register at the gate, stock counts scribbled in a notebook, order enquiries buried in WhatsApp, and someone re-typing everything into Tally at month-end. It works — but it eats hours, invites mistakes, and keeps you doing data-entry instead of growing the business. The good news: you can automate a small manufacturing business in India using simple, affordable tools — without hiring a developer or buying expensive custom software.'
    },
    '/contact': {
      title: 'Contact Analytics Spire | Free MSME Consultation',
      description: 'Get in touch with Analytics Spire for a free consultation. Business consulting, coaching and automation for MSMEs across India. Call or message us today.',
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
    },
    '/webinar': {
      title: 'MSME Business Growth Webinar Masterclass | Analytics Spire',
      description: 'Is your business running you or are you running your business? Register for our exclusive 1.5-hour masterclass for Indian MSMEs for just ₹99.',
      h1: 'Is Your Business Running You, or Are You Running Your Business?',
      content: 'Transform your MSME from daily chaos and cash flow stress into a predictable, scalable, and system-driven machine. Learn the exact framework to step out of daily operations.'
    },
    '/moringa': {
      title: 'Moringa ERP Business Management Software | Analytics Spire',
      description: 'Run your Moringa farming, quality control, invoicing, accounting, and export business smarter with our dedicated Moringa ERP custom solution.',
      h1: 'All-in-One Moringa Business Management Software',
      content: 'Run your Moringa business smarter. Custom business tools to track crops, maintain strict QC checklists, and view real-time IFRS profit & loss statements.'
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Analytics Spire",
    "alternateName": "Anand Rengasamy Business Consulting & Automation",
    "url": "https://analyticsspire.com",
    "logo": "https://ui-avatars.com/api/?name=Analytics+Spire&background=0284c7&color=fff&bold=true&size=512",
    "description": "Analytics Spire helps Indian MSMEs cut costs and scale with data-driven consulting and AI automation. Led by Anand Rengasamy.",
    "founder": {
      "@type": "Person",
      "name": "Anand Rengasamy",
      "jobTitle": "Founder & Principal Consultant",
      "alumniOf": "BITS Pilani"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9000000000",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "ta"]
    },
    "sameAs": [
      "https://www.linkedin.com/in/anandrengasamy",
      "https://twitter.com/analyticsspire"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "MSME Business Consulting and Automation",
    "provider": {
      "@type": "Organization",
      "name": "Analytics Spire",
      "url": "https://analyticsspire.com"
    },
    "areaServed": {
      "@type": "Country",
      "name": "IN"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "MSME Automation & Consulting Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Automation & CRM Setup",
            "description": "No-code/low-code customized CRM setups, automatic lead capture, and tele-calling cloud integration."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Analytics & Dashboards",
            "description": "Dynamic, interactive Google Looker Studio or Power BI dashboard development for operational and financial analytics."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Inventory & Supply Chain Optimization",
            "description": "Automated reorder triggers, scrap logs, and real-time stock levels tracking."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Finance & Payroll Management",
            "description": "Budgeting, planning, automated biometric/GPS attendance logs, and statutory PF/ESIC payroll systems."
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How can Analytics Spire help my MSME reduce costs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We audit your manual workflows, find process bottlenecks and operational scrap, and implement low-cost no-code automated pipelines that optimize your inventory, supply chain, and employee hours."
        }
      },
      {
        "@type": "Question",
        "name": "Can we integrate our existing Tele-CRM with our website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We build customized API bridges and cloud code triggers that connect landing pages and Meta Lead Ads directly to your Tele-CRM, distributing leads instantly."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Anand Rengasamy serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anand has extensive consulting and engineering leadership experience across automotive, agri-tech, manufacturing, retail trading, and digital service MSMEs across India."
        }
      }
    ]
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
        
        // Dynamic Meta replacement for SEO bots (highly robust regex patterns)
        html = html.replace(
          /<title>[^]*?<\/title>/i,
          `<title>${metadata.title}</title>`
        );
        html = html.replace(
          /<meta\s+name=["']description["']\s+content=["'][^]*?["']\s*\/?>/i,
          `<meta name="description" content="${metadata.description}" />`
        );
        
        // Dynamic Canonical Tag injection
        const canonicalUrl = `https://analyticsspire.com${requestPath === '/' ? '' : requestPath}`;
        const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
        
        // Dynamic JSON-LD Structured Data selection and injection
        let schemaToInject: any = organizationSchema;
        if (requestPath.includes('/services')) {
          schemaToInject = serviceSchema;
        } else if (requestPath === '/' || requestPath === '') {
          // Home page gets Organization & FAQ
          schemaToInject = [organizationSchema, faqSchema];
        } else {
          // Generate Breadcrumb List
          const pathParts = requestPath.split('/').filter(Boolean);
          const breadcrumbList = [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://analyticsspire.com"
            }
          ];
          pathParts.forEach((part, index) => {
            const pageName = part.charAt(0).toUpperCase() + part.slice(1);
            breadcrumbList.push({
              "@type": "ListItem",
              "position": index + 2,
              "name": pageName,
              "item": `https://analyticsspire.com/${pathParts.slice(0, index + 1).join('/')}`
            });
          });
          schemaToInject = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadcrumbList
          };
        }
        
        const schemaString = Array.isArray(schemaToInject)
          ? schemaToInject.map(s => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')
          : `<script type="application/ld+json">${JSON.stringify(schemaToInject)}</script>`;

        // Inject inside the head
        html = html.replace(
          '</head>',
          `  ${canonicalTag}\n  ${schemaString}\n</head>`
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
              <a href="/payment">Payment</a> |
              <a href="/webinar">Webinar Masterclass</a> |
              <a href="/moringa">Moringa ERP</a>
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

