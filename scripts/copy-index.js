import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://analyticsspire.com';

// Dynamically read routes from App.tsx using multiple fallback locations
let routes = [];
try {
  const possiblePaths = [
    path.join(path.dirname(import.meta.dirname || ''), 'App.tsx'),
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
      if (p !== '' && p !== '*' && p !== '/*') {
        routesSet.add(p);
      }
    }
    routes = Array.from(routesSet);
  }
} catch (err) {
  console.error('Error parsing routes from App.tsx in copy-index.js:', err);
}

if (routes.length === 0) {
  routes = ['about', 'services', 'blog', 'media', 'events', 'contact', 'payment', 'webinar', 'moringa'];
}

// Explicitly ensure the subpages and blog posts are always pre-rendered in addition to dynamically discovered routes
const coreSubPages = [
  'about', 'services', 'blog', 'media', 'events', 'contact', 'payment', 'webinar', 'moringa',
  'services/business-analytics',
  'services/business-automation',
  'services/strategic-marketing',
  'services/operational-excellence',
  'services/finance-management',
  'services/inventory-management',
  'services/training-and-development',
  'services/market-estimation-consumer-behaviour',
  'blog/automate-small-manufacturing-business-india',
  'blog/business-analytics-for-msme-india',
  'blog/cash-flow-management-small-business-india',
  'blog/reduce-inventory-costs-small-business-india',
  'blog/digital-marketing-for-msme-india',
  'blog/improve-operational-efficiency-msme-india',
  'blog/employee-training-msme-india',
  'blog/market-size-estimation-consumer-behaviour-india'
];
coreSubPages.forEach(p => {
  if (!routes.includes(p)) {
    routes.push(p);
  }
});

const distDir = path.resolve(process.cwd(), 'dist');
const indexFile = path.resolve(distDir, 'index.html');

const PAGE_METADATA = {
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
  '/services/business-analytics': {
    title: 'Business Analytics Services for MSMEs | Analytics Spire',
    description: 'Transform Tally and Excel data into real-time visual dashboards. Make data-backed decisions that boost profit margins and lower operating expenses for Indian MSMEs.',
    h1: 'Business Analytics Services for Indian MSMEs',
    content: 'Bridging the gaps through data-driven solutions and market insight validation. Analyzing Business & Market Insights, sales, debtor aging, and profit dashboards.'
  },
  '/services/business-automation': {
    title: 'Business Automation Services for MSMEs | Analytics Spire',
    description: 'Replace manual tasks with affordable no-code workflows. Automate WhatsApp leads, quote generation, order tracking, and invoice follow-ups for Indian MSMEs.',
    h1: 'Business Automation Services for Indian MSMEs',
    content: 'Digitalizing business operations and creating dynamic, interactive dashboards for quantifiable output. WhatsApp automation, mobile CRM, order tracking, and Tally sync.'
  },
  '/services/strategic-marketing': {
    title: 'Strategic Marketing Consulting for MSMEs | Analytics Spire',
    description: 'Build predictable lead generation pipelines across Google, Meta, and LinkedIn for Indian MSMEs. Transition from word-of-mouth reliance to digital customer acquisition.',
    h1: 'Strategic Marketing Consulting for Indian MSMEs',
    content: 'Comprehensive market estimation, consumer behaviour analysis, and strategic digital marketing advice. Target B2B campaigns, high-converting landing pages, and CAC tracking.'
  },
  '/services/operational-excellence': {
    title: 'Operational Excellence & Lean Consulting | Analytics Spire',
    description: 'Streamline shop-floor execution, eliminate material waste, and optimize machine utilization using Lean principles, visual SOPs, and shift review routines for Indian MSMEs.',
    h1: 'Operational Excellence & Lean Consulting for Indian MSMEs',
    content: 'Optimizing supply chains and processes through technology integration, value stream mapping, bottleneck audits, and scrap reduction frameworks.'
  },
  '/services/finance-management': {
    title: 'Finance & Cash Flow Management Consulting | Analytics Spire',
    description: 'Master cash flow, shorten debtor collections, and manage working capital with confidence. Build 13-week liquidity forecasts and bankable financial projections for Indian MSMEs.',
    h1: 'Finance & Cash Flow Management Consulting for Indian MSMEs',
    content: 'Advanced financial modelling, budgeting, cash flow forecasting, debtor aging credit control, and bank loan syndication CMA data prep.'
  },
  '/services/inventory-management': {
    title: 'Inventory Management & Stock Control Services | Analytics Spire',
    description: 'Optimize warehouse stock levels, prevent fast-mover stockouts, and unlock capital trapped in dead inventory with ABC/XYZ matrixes and mobile barcode scanning for Indian MSMEs.',
    h1: 'Inventory Management & Stock Control Services for Indian MSMEs',
    content: 'Optimizing stock levels, reducing carrying costs, reorder point alerts, mobile barcode scanning, and Tally inventory sync.'
  },
  '/services/training-and-development': {
    title: 'Employee & Supervisory Training Services | Analytics Spire',
    description: 'Upskill technical, sales, and middle-management teams with energetic bilingual workshops. Build accountable shift supervisors and high-performing sales reps for Indian MSMEs.',
    h1: 'Employee & Supervisory Training Services for Indian MSMEs',
    content: 'Trained over 4,000 professionals across technical, sales, leadership, and customer service domains. B2B consultative sales, supervisory leadership, and shop-floor 5S SOPs.'
  },
  '/services/market-estimation-consumer-behaviour': {
    title: 'Market Estimation & Consumer Behaviour Research | Analytics Spire',
    description: 'Validate expansion plans with empirical market size calculations (TAM/SAM/SOM), primary buyer surveys, competitor pricing benchmarks, and consumer behavior profiling for Indian MSMEs.',
    h1: 'Market Estimation & Consumer Behaviour Research for Indian MSMEs',
    content: 'Empirical market size modeling (TAM/SAM/SOM), primary buyer surveys, field research, price elasticity studies, and competitor channel benchmarking.'
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

function getPreRenderedContent(metadata) {
  return `
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
}

function processHtml(templateContent, requestPath) {
  const metadata = PAGE_METADATA[requestPath] || PAGE_METADATA['/'];
  let html = templateContent;

  // Replace Title
  html = html.replace(
    /<title>[^]*?<\/title>/i,
    `<title>${metadata.title}</title>`
  );

  // Replace Description Meta
  html = html.replace(
    /<meta\s+name=["']description["']\s+content=["'][^]*?["']\s*\/?>/i,
    `<meta name="description" content="${metadata.description}" />`
  );

  // Canonical tag
  const canonicalUrl = `${DOMAIN}${requestPath === '/' ? '' : requestPath}`;
  const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;

  // Open Graph & Twitter Tags
  const ogTags = `
  <meta property="og:type" content="${requestPath.startsWith('/blog/') ? 'article' : 'website'}" />
  <meta property="og:title" content="${metadata.title}" />
  <meta property="og:description" content="${metadata.description}" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:image" content="https://analyticsspire.com/logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${metadata.title}" />
  <meta name="twitter:description" content="${metadata.description}" />
  <meta name="twitter:image" content="https://analyticsspire.com/logo.png" />`;

  // Schema selection
  let schemaToInject = organizationSchema;
  if (requestPath.includes('/services')) {
    schemaToInject = serviceSchema;
  } else if (requestPath === '/' || requestPath === '') {
    schemaToInject = [organizationSchema, faqSchema];
  } else {
    // Generate Breadcrumb List
    const pathParts = requestPath.split('/').filter(Boolean);
    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": DOMAIN
      }
    ];
    pathParts.forEach((part, index) => {
      const pageName = part.charAt(0).toUpperCase() + part.slice(1);
      breadcrumbList.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": pageName,
        "item": `${DOMAIN}/${pathParts.slice(0, index + 1).join('/')}`
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

  // Inject in head
  html = html.replace(
    '</head>',
    `  ${canonicalTag}${ogTags}\n  ${schemaString}\n</head>`
  );

  // Inject hidden crawler-friendly text in root
  const preRenderedContent = getPreRenderedContent(metadata);
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${preRenderedContent}</div>`
  );

  return html;
}

if (fs.existsSync(indexFile)) {
  const originalTemplate = fs.readFileSync(indexFile, 'utf-8');

  // 1. Process home page (root index.html)
  const homeHtml = processHtml(originalTemplate, '/');
  fs.writeFileSync(indexFile, homeHtml);
  console.log('Pre-rendered SEO metadata for home page (root index.html)');

  // 2. Process all sub-routes
  routes.forEach(route => {
    const routePath = `/${route}`;
    const pageHtml = processHtml(originalTemplate, routePath);

    // Write to folder/index.html (perfect for Netlify pretty URLs)
    const routeDir = path.resolve(distDir, route);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(routeDir, 'index.html'), pageHtml);

    // Write to route.html (alternate clean fallback)
    fs.writeFileSync(path.resolve(distDir, `${route}.html`), pageHtml);

    console.log(`Pre-rendered SEO metadata for route: ${routePath}`);
  });

  console.log('Copied and fully pre-rendered SEO assets for Netlify static hosting!');
} else {
  console.error('index.html not found in dist/');
}
