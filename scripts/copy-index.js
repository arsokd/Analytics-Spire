import fs from 'fs';
import path from 'path';

const DOMAIN = 'https://www.analyticsspire.com';

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

// Explicitly ensure the 9 subpages are always present in addition to dynamically discovered routes
const coreSubPages = ['about', 'services', 'blog', 'media', 'events', 'contact', 'payment', 'webinar', 'moringa'];
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
  "url": "https://www.analyticsspire.com",
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
    "url": "https://www.analyticsspire.com"
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
    `  ${canonicalTag}\n  ${schemaString}\n</head>`
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
