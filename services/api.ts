
import { SiteData, BrandAssociation } from '../types';
import { SERVICES_DATA, EVENTS_DATA, VIDEOS_DATA, COMPANY_NAME, FOUNDER_NAME, CONTACT_EMAIL, PROFESSIONAL_BRANDS } from '../constants';

/**
 * Fallback data to use if Google Sheets is not connected or fails
 */
export const DEFAULT_SITE_DATA: SiteData = {
  config: {
    heroTitle: "Driving Excellence Through Expertise.",
    heroSubtitle: "Empowering MSMEs and enterprises through data-driven innovation, strategic planning, and intelligent automation. Led by industry expertise with decades of corporate leadership.",
    missionText: "To empower MSMEs with strategic, financial, operational, and technology-driven solutions that drive sustainable and scalable business growth, enhance productivity, efficiency, and profitability, bridge the technology and capability gap, strengthen market competitiveness and resilience, and enable data-driven decision-making and long-term value creation.",
    visionText: "To be the most affordable and trusted consulting partner for MSMEs, providing realistic, data-driven strategies that turn small businesses into sustainable, growth-oriented enterprises.",
    aboutText: "Analytics Spire is a management and business consultancy registered with Udayam, dedicated to addressing the unique challenges of service and manufacturing sectors. We bring decades of cross-sector expertise to help businesses navigate the complexities of modern markets.",
    contactEmail: CONTACT_EMAIL,
    founderName: FOUNDER_NAME,
    founderBio: "Anand Rengasamy is a seasoned Business consultant and Business coach with decades of corporate experience across diverse domains. He holds an Engineering degree from BITS, Pilani, and a Business Analytics specialization from IIM-K. He is an IOD certified Independent Director and a Machine Learning Specialist, dedicated to delivering innovative, data-driven solutions.",
    founderImageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    logoUrl: "https://ui-avatars.com/api/?name=Analytics+Spire&background=0284c7&color=fff&bold=true&size=512",
    brandNames: PROFESSIONAL_BRANDS.map(b => b.name).join(';'),
    brandLogos: PROFESSIONAL_BRANDS.map(b => b.logo).join(';')
  },
  services: SERVICES_DATA,
  events: EVENTS_DATA,
  videos: VIDEOS_DATA,
  brands: PROFESSIONAL_BRANDS,
  experts: [
    {
      id: "1",
      name: "Industry Veteran 1",
      function: "Supply Chain & Logistics",
      expertise: "Strategic Sourcing, Warehouse Management",
      experience: "35+ Years",
      imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Expert in optimizing global supply chains for automotive and manufacturing sectors."
    },
    {
      id: "2",
      name: "Industry Veteran 2",
      function: "Financial Strategy",
      expertise: "Corporate Finance, Risk Management",
      experience: "30+ Years",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      bio: "Seasoned CFO with experience in scaling MSMEs to mid-market enterprises."
    }
  ],
};

// YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
// This is the link you provided: https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwZ6VMQ9pE3xL27G3lfGekMtTi63I8rlUDr09l1LnzFq0yyhAuqP9qcQ1idh-s9pTUh/exec';

// YOUR PUBLISHED GOOGLE SHEET CSV URL (Fallback)
const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTZjboQWYPOi8yo_eQdgvYZRgcJvbzA_tRS4Um4yFuB1447qLFmHe6WX71CwBRtJj84ZEAfeX__T8gm/pub?output=csv';

/**
 * Helper to fetch CSV data from your Google Sheet (Fallback method)
 * Improved to handle quoted fields and commas within cells
 */
const fetchCsv = async (gid?: string) => {
  try {
    const url = gid 
      ? `${GOOGLE_SHEET_CSV_URL}&gid=${gid}` 
      : GOOGLE_SHEET_CSV_URL;
      
    const response = await fetch(url);
    if (!response.ok) return null;
    const text = await response.text();
    
    // Robust CSV parser that handles quotes and commas
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentField = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const nextChar = text[i + 1];

      if (inQuotes) {
        if (char === '"' && nextChar === '"') {
          currentField += '"';
          i++;
        } else if (char === '"') {
          inQuotes = false;
        } else {
          currentField += char;
        }
      } else {
        if (char === '"') {
          inQuotes = true;
        } else if (char === ',') {
          currentRow.push(currentField.trim());
          currentField = '';
        } else if (char === '\n' || char === '\r') {
          currentRow.push(currentField.trim());
          if (currentRow.length > 0 || currentField !== '') {
            rows.push(currentRow);
          }
          currentRow = [];
          currentField = '';
          if (char === '\r' && nextChar === '\n') i++;
        } else {
          currentField += char;
        }
      }
    }
    
    // Add last field/row if exists
    if (currentRow.length > 0 || currentField !== '') {
      currentRow.push(currentField.trim());
      rows.push(currentRow);
    }

    if (rows.length < 2) return null;
    
    const headers = rows[0].map(h => h.trim().replace(/^"|"$/g, ''));
    return rows.slice(1).map(row => {
      return headers.reduce((obj: any, header, i) => {
        if (header) obj[header] = (row[i] || '').trim().replace(/^"|"$/g, '');
        return obj;
      }, {});
    });
  } catch (error) {
    console.error("CSV fetch error:", error);
    return null;
  }
};

/**
 * Helper to convert Google Drive viewer links to direct links
 */
const formatGoogleDriveUrl = (url: string) => {
  if (!url) return '';
  // Handle various Google Drive link formats (file/d/ID or id=ID)
  const driveRegex = /\/file\/d\/([^\/?#&]+)|id=([^\/&]+)/;
  const match = url.match(driveRegex);
  if (match) {
    const id = match[1] || match[2];
    return `https://lh3.googleusercontent.com/d/${id}`;
  }
  return url;
};

export const api = {
  /**
   * Fetches all site content (Config, Services, Events, Videos) from Google Sheets
   */
  fetchSiteData: async (): Promise<SiteData | null> => {
    // 1. Try Apps Script via Server Proxy or Direct fetch (Best method)
    let data: any = null;
    let dataFetched = false;

    try {
      const response = await fetch('/api/site-data');
      if (response.ok) {
        data = await response.json();
        dataFetched = true;
      }
    } catch (e) {
      console.warn("Server proxy fetch failed, trying direct Google Script fetch:", e);
    }

    if (!dataFetched && GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        if (response.ok) {
          data = await response.json();
          dataFetched = true;
        }
      } catch (error) {
        console.error("Direct Apps Script fetch failed:", error);
      }
    }

    if (dataFetched && data) {
      try {
        // Process details if they are strings (from Google Sheets)
        if (data.services && Array.isArray(data.services)) {
          data.services = data.services.map((service: any) => ({
            ...service,
            imageUrl: formatGoogleDriveUrl(service.imageUrl),
            details: typeof service.details === 'string' 
              ? service.details.split(';').map((s: string) => s.trim()) 
              : (Array.isArray(service.details) ? service.details : [])
          }));
        }

        if (data.events && Array.isArray(data.events)) {
          data.events = data.events.map((event: any) => ({
            ...event,
            imageUrl: formatGoogleDriveUrl(event.imageUrl || event.image)
          }));
        }

        if (data.videos && Array.isArray(data.videos)) {
          data.videos = data.videos.map((video: any) => ({
            ...video,
            id: video.id || Math.random().toString(36).substr(2, 9),
            youtubeUrl: video.youtubeUrl || video.url || video.YouTubeUrl || video.URL || '',
            category: video.category || 'Training'
          }));
        }

        if (data.experts && Array.isArray(data.experts)) {
          data.experts = data.experts.map((expert: any) => ({
            ...expert,
            imageUrl: formatGoogleDriveUrl(expert.imageUrl)
          }));
        }
        
        // Ensure config has all required fields and only overwrite if values are present
        if (data.config) {
          const mergedConfig = { ...DEFAULT_SITE_DATA.config };
          
          // Handle both object (Key/Value) and array (Horizontal row) formats
          const configSource = Array.isArray(data.config) ? data.config[0] : data.config;
          
          if (configSource) {
            Object.keys(configSource).forEach(key => {
              const val = configSource[key];
              if (val && val !== '') {
                (mergedConfig as any)[key] = val;
              }
            });
          }

          // Parse dynamic brands from all rows
          const configArray = Array.isArray(data.config) ? data.config : [data.config];
          const brands: BrandAssociation[] = [];

          configArray.forEach((row: any) => {
            const brandNameVal = row.brandName || row.brandNames || '';
            const brandLogoVal = row.brandLogo || row.brandLogos || '';
            
            const names = brandNameVal ? brandNameVal.split(';').map((s: string) => s.trim()).filter(Boolean) : [];
            const logos = brandLogoVal ? brandLogoVal.split(';').map((s: string) => s.trim()).filter(Boolean) : [];
            
            if (names.length > 0) {
              names.forEach((name: string, i: number) => {
                brands.push({
                  name,
                  logo: formatGoogleDriveUrl(logos[i] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=3b82f6&bold=true`)
                });
              });
            }
          });

          // Merge dynamic brands with defaults, avoiding duplicates by name
          // Also filter out Amtrex from the professional list as per user request
          const mergedBrands = [...brands].filter(b => b.name.toLowerCase() !== 'amtrex (dubai)');
          PROFESSIONAL_BRANDS.forEach(defaultBrand => {
            if (defaultBrand.name.toLowerCase() !== 'amtrex (dubai)' && 
                !mergedBrands.some(b => b.name.toLowerCase() === defaultBrand.name.toLowerCase())) {
              mergedBrands.push(defaultBrand);
            }
          });

          return {
            config: {
              ...mergedConfig,
              logoUrl: formatGoogleDriveUrl(mergedConfig.logoUrl || ''),
              founderImageUrl: formatGoogleDriveUrl(mergedConfig.founderImageUrl || ''),
              partnerImageUrl: formatGoogleDriveUrl(mergedConfig.partnerImageUrl || ''),
            },
            services: (data.services && data.services.length > 0) ? data.services : SERVICES_DATA,
            events: (data.events && data.events.length > 0) ? data.events : EVENTS_DATA,
            videos: (data.videos && data.videos.length > 0) ? data.videos : VIDEOS_DATA,
            brands: mergedBrands,
            experts: (data.experts && data.experts.length > 0) ? data.experts : DEFAULT_SITE_DATA.experts,
          };
        }
      } catch (error) {
        console.error("Error processing fetched site data:", error);
      }
    }

    // 2. Fallback to CSV
    try {
      const configRows = await fetchCsv('0');
      const servicesRows = await fetchCsv(); 
      const eventsRows = await fetchCsv('1594951475'); // Placeholder GID for Events tab
      const videosRows = await fetchCsv('123456789'); // Placeholder GID for Videos tab
      const expertsRows = await fetchCsv('987654321'); // Placeholder GID for Experts tab

      if (configRows && configRows.length > 0) {
        const config = configRows[0];
        const mergedConfig = { ...DEFAULT_SITE_DATA.config };

        // Only overwrite if value is present in CSV
        Object.keys(config).forEach(key => {
          if (config[key] && config[key] !== '') {
            (mergedConfig as any)[key] = config[key];
          }
        });

        // Parse dynamic brands from all rows
        const brands: BrandAssociation[] = [];

        configRows.forEach((row: any) => {
          const brandNameVal = row.brandName || row.brandNames || '';
          const brandLogoVal = row.brandLogo || row.brandLogos || '';
          
          const names = brandNameVal ? brandNameVal.split(';').map((s: string) => s.trim()).filter(Boolean) : [];
          const logos = brandLogoVal ? brandLogoVal.split(';').map((s: string) => s.trim()).filter(Boolean) : [];
          
          if (names.length > 0) {
            names.forEach((name: string, i: number) => {
              brands.push({
                name,
                logo: formatGoogleDriveUrl(logos[i] || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=111827&color=3b82f6&bold=true`)
              });
            });
          }
        });

        // Merge dynamic brands with defaults, avoiding duplicates by name
        // Also filter out Amtrex from the professional list as per user request
        const mergedBrands = [...brands].filter(b => b.name.toLowerCase() !== 'amtrex (dubai)');
        PROFESSIONAL_BRANDS.forEach(defaultBrand => {
          if (defaultBrand.name.toLowerCase() !== 'amtrex (dubai)' && 
              !mergedBrands.some(b => b.name.toLowerCase() === defaultBrand.name.toLowerCase())) {
            mergedBrands.push(defaultBrand);
          }
        });

        return {
          config: {
            ...mergedConfig,
            logoUrl: formatGoogleDriveUrl(mergedConfig.logoUrl || ''),
            founderImageUrl: formatGoogleDriveUrl(mergedConfig.founderImageUrl || ''),
            partnerImageUrl: formatGoogleDriveUrl(mergedConfig.partnerImageUrl || ''),
          },
          services: (servicesRows && servicesRows.length > 0) ? servicesRows.map((s: any) => ({
            ...s,
            details: typeof s.details === 'string' ? s.details.split(';').map((d: string) => d.trim()) : []
          })) : SERVICES_DATA,
          events: (eventsRows && eventsRows.length > 0) ? eventsRows.map((e: any) => ({
            ...e,
            imageUrl: formatGoogleDriveUrl(e.imageUrl || e.image)
          })) : EVENTS_DATA,
          videos: (videosRows && videosRows.length > 0) ? videosRows.map((v: any) => ({
            id: v.id,
            title: v.title,
            category: v.category,
            description: v.description,
            youtubeUrl: v.youtubeUrl || v.url
          })) : VIDEOS_DATA,
          brands: mergedBrands,
          experts: (expertsRows && expertsRows.length > 0) ? expertsRows.map((e: any) => ({
            ...e,
            imageUrl: formatGoogleDriveUrl(e.imageUrl)
          })) : DEFAULT_SITE_DATA.experts,
        };
      }
    } catch (error) {
      console.error("Fallback fetch failed:", error);
    }
    return null;
  },

  /**
   * Verifies user credentials against Google Sheets
   */
  verifyLogin: async (email: string, pass: string): Promise<any | null> => {
    // 1. Try our Server-side Proxy first to bypass CORS (Best method)
    try {
      const response = await fetch(`/api/verify-login?email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`);
      if (response.ok) {
        const result = await response.json();
        if (result.success) return result.user;
      }
    } catch (e) {
      console.warn("Server proxy login failed, trying direct Google Script login:", e);
    }

    // 2. Try Apps Script first directly (Fallback)
    if (GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(`${GOOGLE_SCRIPT_URL}?action=login&email=${encodeURIComponent(email)}&pass=${encodeURIComponent(pass)}`);
        if (response.ok) {
          const result = await response.json();
          if (result.success) return result.user;
        }
      } catch (error) {
        console.error("Apps Script login failed, falling back to CSV:", error);
      }
    }

    // 2. Fallback to CSV
    try {
      const users = await fetchCsv(); 
      if (users) {
        const user = users.find((u: any) => u.email === email && u.password === pass);
        if (user) {
          return { email: user.email, name: user.name, role: user.role };
        }
      }
    } catch (error) {
      console.error("CSV login failed:", error);
    }

    // Last fallback for demo
    if (email === 'admin@analyticsspire.com' && pass === 'admin123') {
      return { email, name: 'Anand Rengasamy', role: 'admin' };
    }
    return null;
  },

  /**
   * Submits the contact/lead form to Google Sheets
   */
  submitLead: async (formData: any): Promise<boolean> => {
    // 1. Try our Server-side Proxy first to bypass CORS (Best method)
    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        return true;
      }
    } catch (e) {
      console.warn("Server proxy lead submission failed, trying direct Google Script:", e);
    }

    // 2. Try Apps Script directly (Fallback)
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) {
      console.warn("Google Sheet URL not configured. Form data logged to console.", formData);
      return true; // Simulate success
    }

    try {
      // We use no-cors mode to send data to Google Scripts without CORS errors
      // Note: We won't get a readable JSON response in no-cors mode, but the data will save to the sheet.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      return true;
    } catch (error) {
      console.error("Failed to submit lead directly:", error);
      return false;
    }
  }
};
