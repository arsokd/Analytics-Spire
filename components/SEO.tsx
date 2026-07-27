import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  schemaType?: 'Organization' | 'ProfessionalService' | 'Service' | 'FAQPage' | 'Breadcrumb' | 'Person';
  additionalSchemas?: any[];
}

// 1. Upgraded ProfessionalService Schema for Homepage & Contact
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://analyticsspire.com/#organization",
  "name": "Analytics Spire",
  "alternateName": "Analytics Spire Business Consulting",
  "url": "https://analyticsspire.com",
  "logo": "https://analyticsspire.com/logo.png",
  "image": "https://analyticsspire.com/logo.png",
  "description": "Business consulting, coaching and no-code automation for Indian MSMEs. Led by Anand Rengasamy.",
  "telephone": "+917200072302",
  "email": "info@analyticsspire.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "W-583, School Road, D-Sector, Anna Nagar West Extension",
    "addressLocality": "Chennai",
    "addressRegion": "Tamil Nadu",
    "postalCode": "600101",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Chennai" },
    { "@type": "State", "name": "Tamil Nadu" },
    { "@type": "Country", "name": "India" }
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://analyticsspire.com/about#anand-rengasamy",
    "name": "Anand Rengasamy"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:30",
    "closes": "18:30"
  },
  "sameAs": [
    "https://www.linkedin.com/in/anand-rengasamy-analytics-spire",
    "https://m.facebook.com/people/Analytics-Spire-Anand-Rengasamy/61574878644693/",
    "https://www.youtube.com/@anandrengasamy_AnalyticsSpire"
  ]
};

// 2. Person Schema for Anand Rengasamy
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://analyticsspire.com/about#anand-rengasamy",
  "name": "Anand Rengasamy",
  "jobTitle": "Founder and Principal Business Consultant",
  "description": "Mechanical engineer with 30 years of experience, business consultant and trainer specialising in MSME growth, process optimisation and no-code automation.",
  "worksFor": { "@id": "https://analyticsspire.com/#organization" },
  "knowsAbout": [
    "MSME business consulting",
    "Business process automation",
    "Business analytics",
    "Inventory management",
    "Financial modelling",
    "Operational excellence"
  ],
  "sameAs": [
    "https://www.linkedin.com/in/anand-rengasamy-analytics-spire",
    "https://www.youtube.com/@anandrengasamy_AnalyticsSpire"
  ]
};

// 3. Service Schema
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "MSME Business Consulting and Automation",
  "provider": {
    "@type": "ProfessionalService",
    "@id": "https://analyticsspire.com/#organization",
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

// 4. FAQPage Schema
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How can Analytics Spire help my MSME reduce costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We audit your manual workflows, find process bottle-necks and operational scrap, and implement low-cost no-code automated pipelines that optimize your inventory, supply chain, and employee hours."
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

export const SEO: React.FC<SEOProps> = ({
  title = "Analytics Spire - MSME Business Consulting & Coaching in India",
  description = "Analytics Spire provides Business Consultancy, Coaching, and Automation services for MSMEs. Led by Anand Rengasamy, we help businesses scale with data-driven strategies.",
  image = "https://analyticsspire.com/logo.png",
  url = "https://analyticsspire.com",
  type = "website",
  noindex = false,
  schemaType,
  additionalSchemas = []
}) => {
  const siteTitle = title.includes("Analytics Spire") ? title : `${title} | Analytics Spire`;
  const canonicalUrl = url.endsWith('/') ? url : `${url}/`;

  // Breadcrumb Generator
  const getBreadcrumbs = () => {
    let pathParts: string[] = [];
    try {
      pathParts = new URL(url).pathname.split('/').filter(Boolean);
    } catch {
      pathParts = [];
    }

    const breadcrumbList = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://analyticsspire.com"
      }
    ];

    pathParts.forEach((part, index) => {
      const pageName = part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' ');
      breadcrumbList.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": pageName,
        "item": `https://analyticsspire.com/${pathParts.slice(0, index + 1).join('/')}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    };
  };

  function pathPartsLength() {
    try {
      return new URL(url).pathname.split('/').filter(Boolean).length;
    } catch {
      return 0;
    }
  }

  // Deduplicated Schemas Collector
  const rawSchemas: any[] = [];

  if (schemaType === 'ProfessionalService' || schemaType === 'Organization') {
    rawSchemas.push(professionalServiceSchema);
  } else if (schemaType === 'Person') {
    rawSchemas.push(personSchema);
  } else if (schemaType === 'Service') {
    rawSchemas.push(serviceSchema);
  } else if (schemaType === 'FAQPage') {
    rawSchemas.push(faqSchema);
  }

  // Append any explicitly provided additional schemas
  additionalSchemas.forEach(s => {
    if (s) rawSchemas.push(s);
  });

  // If subpage, add BreadcrumbList if not already provided in additionalSchemas or schemaType
  const hasBreadcrumb = rawSchemas.some(s => s?.["@type"] === "BreadcrumbList");
  if (!hasBreadcrumb && (pathPartsLength() > 0 || schemaType === 'Breadcrumb')) {
    rawSchemas.push(getBreadcrumbs());
  }

  // Deduplicate schemas by @type to ensure each schema type is emitted EXACTLY ONCE per page
  const uniqueSchemasMap = new Map<string, any>();
  rawSchemas.forEach(schema => {
    const typeKey = schema?.["@type"] || JSON.stringify(schema);
    if (!uniqueSchemasMap.has(typeKey)) {
      uniqueSchemasMap.set(typeKey, schema);
    }
  });

  const finalSchemas = Array.from(uniqueSchemasMap.values());

  return (
    <Helmet>
      {/* Base Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local SEO / Geo Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai" />
      
      {/* Author Tag */}
      <meta name="author" content="Anand Rengasamy" />

      {/* JSON-LD Structured Data - Emitted cleanly and without duplication */}
      {finalSchemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
