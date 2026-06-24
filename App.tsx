
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import { DataProvider } from './context/DataContext';

const AppContent: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/webinar' || location.pathname === '/moringa';

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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isLandingPage && <Footer />}
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
