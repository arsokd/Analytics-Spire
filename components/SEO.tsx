import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaType?: 'Organization' | 'Service' | 'FAQPage' | 'Breadcrumb' | 'ProfessionalService';
}

export const SEO: React.FC<SEOProps> = ({
  title = "Analytics Spire - MSME Business Consulting & Coaching in India",
  description = "Analytics Spire provides Business Consultancy, Coaching, and Automation services for MSMEs. Led by Anand Rengasamy, we help businesses scale with data-driven strategies.",
  keywords = "Business Consulting MSME India, MSME Growth Coach Chennai, Business Automation Services, Analytics Spire Anand Rengasamy, Low Code CRM",
  image = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  url = "https://analyticsspire.com",
  type = "website",
  schemaType
}) => {
  const siteTitle = title.includes("Analytics Spire") ? title : `${title} | Analytics Spire`;
  const canonicalUrl = url.endsWith('/') ? url : `${url}/`;

  // 1. Organization Schema
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

  // 2. Service Schema (Multiple services offered)
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

  // 3. FAQPage Schema
  const faqSchema = {
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

  // 4. BreadcrumbList Schema
  const getBreadcrumbs = () => {
    const pathParts = new URL(canonicalUrl).pathname.split('/').filter(Boolean);
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

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbList
    };
  };

  // Select the active schema based on prop or route
  let schemaToInject = organizationSchema;
  if (schemaType === 'Service' || canonicalUrl.includes('/services')) {
    schemaToInject = serviceSchema as any;
  } else if (schemaType === 'FAQPage') {
    schemaToInject = faqSchema as any;
  } else if (schemaType === 'Breadcrumb' || (pathPartsLength() > 0)) {
    schemaToInject = getBreadcrumbs() as any;
  }

  function pathPartsLength() {
    try {
      return new URL(canonicalUrl).pathname.split('/').filter(Boolean).length;
    } catch {
      return 0;
    }
  }

  return (
    <Helmet>
      {/* Base Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
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
      
      {/* MSME Focus Tags */}
      <meta name="author" content="Anand Rengasamy" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaToInject)}
      </script>

      {/* Also inject secondary Breadcrumbs if not homepage */}
      {pathPartsLength() > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumbs())}
        </script>
      )}
    </Helmet>
  );
};
