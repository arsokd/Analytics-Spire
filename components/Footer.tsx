
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { useData } from '../context/DataContext';

export const Footer: React.FC = () => {
  const { data } = useData();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-brand-400">{COMPANY_NAME}</h3>
            <p className="text-gray-400 mb-4">
              Empowering MSMEs with innovative and affordable management consultancy services.
              Transforming businesses through data, automation, and strategy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#/" className="hover:text-brand-400 transition">Home</a></li>
              <li><a href="#/about" className="hover:text-brand-400 transition">About Us</a></li>
              <li><a href="#/services" className="hover:text-brand-400 transition">Services</a></li>
              <li><a href="#/media" className="hover:text-brand-400 transition">Media & Podcast</a></li>
              <li><a href="#/contact" className="hover:text-brand-400 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-brand-400" />
                <a href={`mailto:${data.config.contactEmail}`} className="hover:text-white transition">{data.config.contactEmail}</a>
              </div>
              <div className="flex items-start">
                <UserIcon size={18} className="mr-3 mt-1 text-brand-400" />
                <span>{data.config.founderName}</span>
              </div>
               <div className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-brand-400" />
                <span>Chennai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Helper icon component locally
const UserIcon = ({ size, className }: { size: number, className?: string }) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
);
