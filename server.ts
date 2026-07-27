import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';

let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY environment variable is required');
    }
    aiClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiClient;
}

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

  // AI Chatbot Route (SpireAI)
  app.post('/api/chat', express.json(), async (req, res) => {
    try {
      const { message, history } = req.body || {};
      if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'A valid message string is required.' });
      }

      const systemInstruction = `You are SpireAI, the official AI Business Assistant for Analytics Spire (www.analyticsspire.com) — an elite management consulting, business automation, and executive coaching firm for Indian Micro, Small, and Medium Enterprises (MSMEs), led by Founder & Principal Consultant Anand Rengasamy (30+ years corporate/engineering experience, BITS Pilani alumnus).

Your primary goals:
1. Provide warm, practical, concise, and highly actionable advice to Indian small business owners, manufacturers, traders, and entrepreneurs on topics like cost reduction, process automation, inventory control, cash flow management, digital marketing, staff training, and market size estimation.
2. Answer questions about Analytics Spire's consulting services, training workshops, and no-code/low-code business automation.
3. Encourage users to schedule a free 1-on-1 consultation or connect via WhatsApp/Email.

Key Information about Analytics Spire:
- Founder & Principal Consultant: Anand Rengasamy (BITS Pilani alumnus, 30+ yrs engineering & management leadership).
- Core Services:
  • Management Consulting & Strategy
  • Business Analytics & Custom Dashboards
  • No-Code/Low-Code Process Automation (Google Sheets/Apps Script, Custom Web Apps)
  • Executive Coaching & Staff Skill Development
  • Cost Reduction & Cash Flow Optimization
  • Digital Marketing Strategy for MSMEs
  • Market Size Estimation & Consumer Insights
- Contact Details:
  • Email: connect@analyticspire.com
  • Phone/WhatsApp: +91 72000 72302
  • Location: Chennai, India (serving MSMEs across India)
- Important Pages:
  • Services: /services
  • About Anand Rengasamy: /about
  • Book Consultation / Contact: /contact
  • Blog & Growth Articles: /blog
  • Events & Workshops: /events

Tone & Formatting Guidelines:
- Concise, clear, professional, empathetic to Indian MSME constraints.
- Use clean formatting with bullet points where appropriate.
- Include relative Markdown links (e.g. [Services Page](/services) or [Contact Page](/contact)) when referencing pages.
- Keep responses focused (typically 2-4 short paragraphs or bullet lists).`;

      const ai = getGeminiClient();

      const formattedContents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

      if (Array.isArray(history)) {
        for (const item of history) {
          if (item && item.role && item.text) {
            formattedContents.push({
              role: item.role === 'user' ? 'user' : 'model',
              parts: [{ text: String(item.text) }]
            });
          }
        }
      }

      formattedContents.push({
        role: 'user',
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const replyText = response.text || "I apologize, but I am unable to generate a response right now. Please feel free to reach out directly to Anand Rengasamy at connect@analyticspire.com or via WhatsApp at +91 72000 72302.";

      return res.json({ reply: replyText });
    } catch (error: any) {
      console.error('Chatbot API Error:', error);
      if (error.message && error.message.includes('GEMINI_API_KEY')) {
        return res.status(200).json({
          reply: "Hello! SpireAI is currently running in offline mode. You can learn about our services on our [Services Page](/services) or book a free 1-on-1 consultation directly on our [Contact Page](/contact) or via WhatsApp at +91 72000 72302!"
        });
      }
      return res.status(500).json({
        error: 'Failed to process chat message',
        message: error.message || 'Server error'
      });
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
    '/blog/business-analytics-for-msme-india': {
      title: 'Business Analytics for Small Business in India',
      description: 'See how business analytics helps Indian MSMEs make smarter, faster decisions on sales, costs and customers — without a data team. Book a free consultation.',
      h1: 'How Data Analytics Helps Indian MSMEs Make Smarter Decisions',
      content: 'Most small business owners in India already sit on a goldmine of data — sales registers, Tally records, WhatsApp enquiries, stock sheets — but rarely use it to make decisions. Business analytics for a small business in India simply means turning that everyday data into clear answers: which products actually make you money, which customers are worth chasing, and where cash is quietly leaking. You don\'t need a data science team to start — you need the right questions and a simple way to see the numbers.'
    },
    '/blog/cash-flow-management-small-business-india': {
      title: 'Cash Flow Management for Small Business in India',
      description: 'A simple guide to cash flow management for Indian MSMEs — how to stop cash crunches, chase payments, and plan ahead. Book a free consultation with Analytics Spire.',
      h1: 'Cash Flow Management for Small Businesses in India: A Practical Guide',
      content: 'A profitable business can still run out of money. It happens to Indian MSMEs all the time: sales are strong on paper, but customers pay late, stock ties up cash, and suddenly you can\'t cover salaries or a supplier bill. Cash flow management for a small business in India is the skill of making sure money actually comes in faster than it goes out — so you\'re never caught short. This guide shows you how to take control, in plain terms.'
    },
    '/blog/reduce-inventory-costs-small-business-india': {
      title: 'Inventory Management for Small Business in India',
      description: 'Cut carrying costs and dead stock with smarter inventory management for Indian MSMEs. Practical steps any owner can use. Book a free consultation with Analytics Spire.',
      h1: 'How to Reduce Inventory Costs in Your Small Business (India Guide)',
      content: 'For most Indian MSMEs, inventory is the biggest pile of cash they can\'t spend. Buy too much and money sits frozen on the shelf, ageing into dead stock. Buy too little and you lose sales or halt production. Good inventory management for a small business in India is about hitting the balance — enough stock to serve customers, never so much that it chokes your cash. Here\'s how to get there without complex systems.'
    },
    '/blog/digital-marketing-for-msme-india': {
      title: 'Digital Marketing for Small Business in India',
      description: 'A practical digital marketing guide for Indian MSMEs — how to get customers consistently without wasting money on ads. Book a free consultation with Analytics Spire.',
      h1: 'Digital Marketing for Indian MSMEs: How to Get Customers Consistently',
      content: 'Many small business owners in India try digital marketing the same way: boost a few Facebook posts, get a handful of enquiries, then stop when results fade. Digital marketing for a small business in India works far better when it\'s a simple, steady system rather than random bursts. You don\'t need a big budget or an agency to start — you need clarity on who your customer is and a consistent way to reach them. Here\'s a practical framework.'
    },
    '/blog/improve-operational-efficiency-msme-india': {
      title: 'Improve Operational Efficiency in Small Business India',
      description: 'Practical ways Indian MSMEs can improve operational efficiency, cut waste and speed up delivery. Simple steps, real results. Book a free consultation with Analytics Spire.',
      h1: 'How Indian MSMEs Can Improve Operational Efficiency and Cut Waste',
      content: 'When margins are tight, you can either chase more sales or stop losing money on waste and delays — and the second is often faster. Improving operational efficiency in a small business in India means getting more output from the same people, machines, and hours by removing the friction that quietly slows you down. You don\'t need a big consulting budget; you need to see your process clearly and fix the obvious bottlenecks.'
    },
    '/blog/employee-training-msme-india': {
      title: 'Employee Training for Small Business in India',
      description: 'Why staff training is the smartest, cheapest growth lever for Indian MSMEs — and how to do it practically. Book a free consultation with Analytics Spire.',
      h1: 'Why Staff Training Is the Smartest Investment for Indian MSMEs',
      content: 'Ask most MSME owners in India about their biggest bottleneck and the answer often isn\'t money or machines — it\'s people. Work stalls because only one person knows how to do a task, quality varies by who\'s on shift, and the owner is pulled into every small decision. Employee training for a small business in India is the quiet, low-cost fix: when your team gets better, everything they touch gets better, and you finally get room to lead instead of firefight.'
    },
    '/blog/market-size-estimation-consumer-behaviour-india': {
      title: 'Market Size Estimation for Small Business in India',
      description: 'Learn how Indian MSMEs can estimate market size and understand customer behaviour before investing. Simple, practical methods. Book a free consultation with Analytics Spire.',
      h1: 'Know Your Market: How Indian MSMEs Estimate Market Size and Understand Customers',
      content: 'Before you launch a product, open a branch, or enter a new city, one question decides success: is there enough demand, and do you understand the people who\'ll buy? Too many Indian MSMEs invest on gut feel and discover the answer the hard way. Market size estimation in India — paired with a clear read of consumer behaviour — lets you check the opportunity before you spend, so you invest where the demand actually is.'
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

