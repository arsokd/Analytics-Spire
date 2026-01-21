
import { SiteData } from '../types';
import { SERVICES_DATA, EVENTS_DATA, VIDEOS_DATA, COMPANY_NAME, FOUNDER_NAME, CONTACT_EMAIL } from '../constants';

// YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxtCLQXoiVbmTc8ha2LXwE1HpzQXwIhgSIO4yYcwBsW99kuO2P5XPQdfp3gyRU7JK0IAg/exec';

export const api = {
  /**
   * Fetches all site content (Config, Services, Events, Videos) from Google Sheets
   */
  fetchSiteData: async (): Promise<SiteData | null> => {
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL.includes('INSERT_YOUR')) {
      console.warn("Google Sheet URL not configured. Using fallback data.");
      return null;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      return data as SiteData;
    } catch (error) {
      console.error("Failed to fetch site data:", error);
      return null;
    }
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

/**
 * Fallback data to use if Google Sheets is not connected or fails
 */
export const DEFAULT_SITE_DATA: SiteData = {
  config: {
    heroTitle: "Identify. Innovate. Impact.",
    heroSubtitle: "We help MSMEs and enterprises clarify their vision, automate their operations, and scale with financial precision.",
    missionText: "To empower MSMEs in India with innovative and affordable management and business consultancy services.",
    visionText: "To be the leading consultancy firm for MSMEs in India, renowned for transforming businesses through automation.",
    aboutText: "Founded by industry veteran Anand Rengasamy, Analytics Spire leverages 30+ years of corporate experience.",
    contactEmail: CONTACT_EMAIL,
    founderName: FOUNDER_NAME,
    founderBio: "Seasoned Management Consultant with 30+ years of corporate experience across Sales, Marketing, and Analytics."
  },
  services: SERVICES_DATA,
  events: EVENTS_DATA,
  videos: VIDEOS_DATA,
};
