import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Analytics Spire - MSME Business Consulting & Coaching in India",
  description = "Analytics Spire provides Business Consultancy, Coaching, and Automation services for MSMEs. Lead by Anand Rengasamy, we help businesses scale with data-driven strategies.",
  keywords = "Business Consulting MSME India, MSME Growth Coach Chennai, Business Automation Services, Analytics Spire Anand Rengasamy",
  image = "/og-image.jpg",
  url = "https://www.analyticsspire.com",
  type = "website"
}) => {
  const siteTitle = title.includes("Analytics Spire") ? title : `${title} | Analytics Spire`;

  return (
    <Helmet>
      {/* Base Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

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
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Analytics Spire",
          "alternateName": "Anand Rengasamy Business Consulting",
          "url": url,
          "logo": "https://www.analyticsspire.com/logo.png",
          "description": description,
          "founder": {
            "@type": "Person",
            "name": "Anand Rengasamy"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "TN",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "consultation",
            "areaServed": "IN"
          },
          "sameAs": [
            "https://www.linkedin.com/in/anandrengasamy",
            "https://twitter.com/analyticsspire"
          ]
        })}
      </script>
    </Helmet>
  );
};
