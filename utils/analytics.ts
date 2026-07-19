/**
 * Analytics Utility for Google Analytics 4 (GA4)
 * Replace 'G-XXXXXXXXXX' in index.html with your actual GA4 Measurement ID.
 */

export const GA_MEASUREMENT_ID = 'G-H2R4LRTCKP';

// Helper to check if gtag is loaded
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof (window as any).gtag === 'function';
};

/**
 * Tracks a page view event in GA4
 * @param path The relative URL path (e.g. /about)
 */
export const trackPageView = (path: string) => {
  if (isGtagAvailable()) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
    });
  }
};

/**
 * Tracks a custom event in GA4
 * @param eventName Name of the event (e.g. webinar_registration_click)
 * @param params Optional key-value pairs for event parameters
 */
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (isGtagAvailable()) {
    (window as any).gtag('event', eventName, params);
    console.log(`[GA4 Event] ${eventName}:`, params);
  } else {
    console.log(`[GA4 Event Pending] ${eventName} (gtag not loaded yet):`, params);
  }
};
