import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { useData } from '../context/DataContext';

export const Footer: React.FC = () => {
  const { data } = useData();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="bg-white/95 px-8 py-6 rounded-2xl shadow-2xl border border-gray-200 inline-block mb-8">
                 <img 
                   src={data.config.logoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(COMPANY_NAME)}&background=0284c7&color=fff&bold=true`} 
                   alt={COMPANY_NAME} 
                   className="h-40 w-auto object-contain" 
                   referrerPolicy="no-referrer"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(COMPANY_NAME)}&background=0284c7&color=fff&bold=true`;
                     if (target.src !== fallback) {
                       target.src = fallback;
                     }
                   }}
                 />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Empowering MSMEs with innovative and affordable management consultancy services.
              Transforming businesses through data, automation, and strategy.
            </p>
          </div>
          
          {/* Links Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white font-heading">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#/" className="hover:text-brand-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Home</a></li>
              <li><a href="#/about" className="hover:text-brand-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>About Us</a></li>
              <li><a href="#/services" className="hover:text-brand-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Services</a></li>
              <li><a href="#/media" className="hover:text-brand-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Media & Podcast</a></li>
              <li><a href="#/contact" className="hover:text-brand-400 transition flex items-center"><span className="w-1.5 h-1.5 bg-brand-500 rounded-full mr-2"></span>Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white font-heading">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-brand-900/50 transition">
                   <Mail size={18} className="text-brand-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                  <a href={`mailto:${data.config.contactEmail}`} className="hover:text-white transition font-medium">{data.config.contactEmail}</a>
                </div>
              </div>
              <div className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-brand-900/50 transition">
                   <UserIcon size={18} className="text-brand-400" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Founder</p>
                   <span className="font-medium text-white">{data.config.founderName}</span>
                </div>
              </div>
               <div className="flex items-start group">
                <div className="bg-gray-800 p-2 rounded-lg mr-3 group-hover:bg-brand-900/50 transition">
                   <MapPin size={18} className="text-brand-400" />
                </div>
                <div>
                   <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Headquarters</p>
                   <span className="font-medium text-white">Chennai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-500">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
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