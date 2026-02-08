import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_LINKS, COMPANY_NAME } from '../constants';

export const Navbar: React.FC = () => {
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
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              {/* Logo Container - Adjusted size for new logo with tagline */}
              <div className="bg-white/95 px-4 py-2 rounded-lg shadow-lg border border-gray-200 group-hover:bg-white transition duration-300">
                 <img 
                   src="/logo.png" 
                   alt={COMPANY_NAME} 
                   className="h-12 w-auto object-contain" 
                   onError={(e) => {
                     // Fallback if image is missing
                     (e.target as HTMLImageElement).style.display = 'none';
                     (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="font-bold text-gray-900 px-2">${COMPANY_NAME}</span>`;
                   }}
                 />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'text-white bg-gray-800 shadow-inner' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <Link
              to="/contact"
              className="ml-4 px-6 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-500 transition shadow-[0_0_15px_rgba(2,132,199,0.5)] hover:shadow-[0_0_25px_rgba(2,132,199,0.6)] transform hover:-translate-y-0.5"
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