
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
    heroTitle: "Driving Excellence Through Expertise.",
    heroSubtitle: "Empowering MSMEs and enterprises through data-driven innovation, strategic planning, and intelligent automation. Led by industry veterans with over 60 years of combined corporate leadership.",
    missionText: "To empower MSMEs in India with innovative, data-driven, and affordable management and business consultancy services.",
    visionText: "To be the leading catalyst for MSME transformation in India, renowned for driving sustainable growth through process innovation and intelligent automation.",
    aboutText: "Analytics Spire is a management and business consultancy registered with Udayam, dedicated to addressing the unique challenges of service and manufacturing sectors. We bring three decades of cross-sector expertise to help businesses navigate the complexities of modern markets.",
    contactEmail: CONTACT_EMAIL,
    founderName: FOUNDER_NAME,
    founderBio: "Anand Rengasamy is a seasoned Management and Business Consultant with over 30 years of corporate experience across diverse domains. He holds an Engineering degree from BITS, Pilani, and a Business Analytics specialization from IIM-K. He is an IOD certified Independent Director and a Machine Learning Specialist, dedicated to delivering innovative, data-driven solutions.",
    partnerName: "Hemanth Kumar Guruswamy",
    partnerBio: "Hemanth Kumar Guruswamy is a seasoned business leader with over three decades of leadership experience in telecommunications, technology, digital services, and large-scale business operations across India. An alumnus of IIM Ahmedabad (MBA) and College of Engineering Guindy (Electronics), he has served in senior leadership and CEO-level roles across leading organizations including Reliance Jio and Bharti Airtel."
  },
  services: SERVICES_DATA,
  events: EVENTS_DATA,
  videos: VIDEOS_DATA,
};
