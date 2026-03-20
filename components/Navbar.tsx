import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_NAME } from '../constants';
import { useData } from '../context/DataContext';

export const Navbar: React.FC = () => {
  const { data } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        scrolled 
          ? 'bg-gray-950/80 backdrop-blur-md border-b border-gray-800 py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-40">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {/* 
                  HOW TO CHANGE THE LOGO:
                  1. Upload your logo image to the "public" folder and name it "logo.png"
                  2. OR change the "src" below to a web link (e.g., "https://example.com/logo.png")
              */}
              <div className="bg-white/95 px-6 py-4 rounded-xl shadow-2xl border border-gray-200 group-hover:bg-white transition duration-300 flex items-center">
                 <img 
                   src={data.config.logoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(COMPANY_NAME)}&background=0284c7&color=fff&bold=true`} 
                   alt={COMPANY_NAME} 
                   className="h-32 w-auto object-contain" 
                   referrerPolicy="no-referrer"
                   onError={(e) => {
                     // Fallback if image is missing
                     const target = e.target as HTMLImageElement;
                     const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(COMPANY_NAME)}&background=0284c7&color=fff&bold=true`;
                     if (target.src !== fallback) {
                       target.src = fallback;
                     }
                   }}
                 />
                 <span className="ml-6 text-5xl font-black text-gray-900 tracking-tighter hidden sm:block">
                   {COMPANY_NAME}
                 </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="ml-6 px-8 py-3 rounded-full bg-gradient-to-r from-brand-600 to-brand-400 text-white text-sm font-bold hover:from-brand-500 hover:to-brand-300 transition-all duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] hover:shadow-[0_0_30px_rgba(2,132,199,0.6)] transform hover:-translate-y-0.5 active:scale-95"
            >
              Get Started
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-gray-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-950 border-b border-gray-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-gray-800 text-brand-400'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-lg bg-brand-600 text-white font-medium"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};