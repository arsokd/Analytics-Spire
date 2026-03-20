
import { SiteData, BrandAssociation } from '../types';
import { SERVICES_DATA, EVENTS_DATA, VIDEOS_DATA, COMPANY_NAME, FOUNDER_NAME, CONTACT_EMAIL, PROFESSIONAL_BRANDS } from '../constants';

/**
 * Fallback data to use if Google Sheets is not connected or fails
 */
export const DEFAULT_SITE_DATA: SiteData = {
  config: {
    heroTitle: "Driving Excellence Through Expertise.",
    heroSubtitle: "Empowering MSMEs and enterprises through data-driven innovation, strategic planning, and intelligent automation. Led by industry veterans with over 60 years of combined corporate leadership.",
    missionText: "To empower MSMEs with strategic, financial, operational, and technology-driven solutions that drive sustainable and scalable business growth, enhance productivity, efficiency, and profitability, bridge the technology and capability gap, strengthen market competitiveness and resilience, and enable data-driven decision-making and long-term value creation.",
    visionText: "To become India's most trusted growth partner for MSMEs, enabling sustainable, technology-driven, and globally competitive enterprises.",
    aboutText: "Analytics Spire is a management and business consultancy registered with Udayam, dedicated to addressing the unique challenges of service and manufacturing sectors. We bring three decades of cross-sector expertise to help businesses navigate the complexities of modern markets.",
    contactEmail: CONTACT_EMAIL,
    founderName: FOUNDER_NAME,
    founderBio: "Anand Rengasamy is a seasoned Management and Business Consultant with over 30 years of corporate experience across diverse domains. He holds an Engineering degree from BITS, Pilani, and a Business Analytics specialization from IIM-K. He is an IOD certified Independent Director and a Machine Learning Specialist, dedicated to delivering innovative, data-driven solutions.",
    partnerName: "Hemanth Kumar Guruswamy",
    partnerBio: "Hemanth Kumar Guruswamy is a seasoned business leader with over three decades of leadership experience in telecommunications, technology, digital services, and large-scale business operations across India. An alumnus of IIM Ahmedabad (MBA) and College of Engineering Guindy (Electronics), he has served in senior leadership and CEO-level roles across leading organizations including Reliance Jio and Bharti Airtel.",
    partnerImageUrl: "https://lh3.googleusercontent.com/d/1rocca0kuvjo5qZkti10p72Pn2N1PblMv",
    logoUrl: "https://ui-avatars.com/api/?name=Analytics+Spire&background=0284c7&color=fff&bold=true&size=512",
    brandNames: PROFESSIONAL_BRANDS.map(b => b.name).join(';'),
    brandLogos: PROFESSIONAL_BRANDS.map(b => b.logo).join(';')
  },
  services: SERVICES_DATA,
  events: EVENTS_DATA,
  videos: VIDEOS_DATA,
  brands: PROFESSIONAL_BRANDS,
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
    // 1. Try Apps Script first (Best method)
    if (GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        if (response.ok) {
          const data = await response.json();
          
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
              imageUrl: formatGoogleDriveUrl(event.imageUrl)
            }));
          }
          
          // Ensure config has all required fields and only overwrite if values are present
          if (data.config) {
            const mergedConfig = { ...DEFAULT_SITE_DATA.config };
            
            // Overwrite with fetched data if present
            Object.keys(data.config).forEach(key => {
              const val = data.config[key as keyof typeof data.config];
              if (val && val !== '') {
                (mergedConfig as any)[key] = val;
              }
            });

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
              services: data.services || SERVICES_DATA,
              events: data.events || EVENTS_DATA,
              videos: data.videos || VIDEOS_DATA,
              brands: mergedBrands,
            };
          }
        }
      } catch (error) {
        console.error("Apps Script fetch failed, falling back to CSV:", error);
      }
    }

    // 2. Fallback to CSV
    try {
      const configRows = await fetchCsv('0');
      const servicesRows = await fetchCsv(); 

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
          events: EVENTS_DATA,
          videos: VIDEOS_DATA,
          brands: mergedBrands,
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
    // 1. Try Apps Script first (Secure method)
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
      console.error("Failed to submit lead:", error);
      return false;
    }
  }
};
