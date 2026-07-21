
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactPage } from './pages/ContactPage';
import { EventsPage } from './pages/EventsPage';
import { MediaPage } from './pages/MediaPage';
import { PaymentPage } from './pages/PaymentPage';
import { WebinarLandingPage } from './pages/WebinarLandingPage';
import { MoringaLandingPage } from './pages/MoringaLandingPage';
import { BlogPage } from './pages/BlogPage';
import { DataProvider } from './context/DataContext';
import { trackPageView, trackEvent } from './utils/analytics';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/webinar' || location.pathname === '/moringa';

  // Google Analytics Page & Event Tracking
  React.useEffect(() => {
    trackPageView(location.pathname + location.search);
    
    // Explicit event for payment page visits
    if (location.pathname === '/payment') {
      trackEvent('payment_page_view', {
        referrer: document.referrer || 'direct'
      });
    }

    // Explicit event for webinar page visits
    if (location.pathname === '/webinar') {
      trackEvent('webinar_click', {
        trigger: 'page_view',
        referrer: document.referrer || 'direct'
      });
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-brand-500 selection:text-white">
      {!isLandingPage && <Navbar />}
      <main className={`flex-grow ${!isLandingPage ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/webinar" element={<WebinarLandingPage />} />
          <Route path="/moringa" element={<MoringaLandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/automate-small-manufacturing-business-india" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/917200072302"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent('whatsapp_click', { destination: '917200072302' })}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        aria-label="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} className="fill-white text-[#25D366] group-hover:rotate-12 transition-transform duration-300" />
        {/* Hover Tooltip */}
        <span className="absolute right-16 bg-gray-900 border border-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 mr-2">
          Chat with us on WhatsApp
        </span>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DataProvider>
  );
};

export default App;
