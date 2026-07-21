import React from 'react';
import { BarChart, Cpu, Compass, Settings, TrendingUp, Megaphone, BookOpen, Search, Package } from 'lucide-react';
import { useData } from '../context/DataContext';
import { SEO } from '../components/SEO';

const icons: Record<string, any> = {
  BarChart, Cpu, Compass, Settings, TrendingUp, Megaphone, BookOpen, Search, Package
};

export const ServicesPage: React.FC = () => {
  const { data } = useData();

  // Helper to ensure we have valid arrays for details
  const getServiceDetails = (details?: string[]): string[] => {
    if (Array.isArray(details) && details.length > 0) return details;
    return ['Strategy & Planning', 'Implementation', 'Optimization']; // Default bullets
  };

  return (
    <div className="bg-black min-h-screen pb-24 font-sans text-white">
      <SEO 
        title="MSME Consulting, Coaching & Automation Services | Analytics Spire"
        description="Explore Analytics Spire's consulting, coaching and no-code automation services for Indian MSMEs. Cut costs and scale faster. Book a free consultation today."
        keywords="MSME Automation Services, CRM, telecalling, inventory, attendance, payroll, finance systems, Analytics Spire"
        url="https://www.analyticsspire.com/services"
        schemaType="Service"
      />
      {/* Services Hero */}
      <div className="relative pt-32 pb-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Capabilities</p>
           <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8">
             Automation and consulting services for growing MSMEs
           </h1>
           <p className="text-xl text-gray-400 max-w-3xl font-light leading-relaxed border-l-2 border-gray-800 pl-6">
             From raw data to strategic execution, we cover every aspect of your business transformation journey.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-1">
          {data.services.map((service, idx) => {
            const Icon = icons[service.iconName] || BarChart;
            return (
              <div key={idx} className="group bg-gray-900 p-12 hover:bg-gray-800 transition duration-300 min-h-[350px] flex flex-col justify-between border border-gray-800/50">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <Icon className="w-12 h-12 text-brand-500" />
                    <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">{service.category}</span>
                  </div>
                  {service.imageUrl && (
                    <div className="mb-6 overflow-hidden rounded-lg h-48">
                      <img 
                        src={service.imageUrl} 
                        alt={service.title} 
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <h3 className="font-heading text-3xl font-bold text-white mb-4 group-hover:text-brand-100 transition">{service.title}</h3>
                  <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">{service.description}</p>
                </div>
                
                <div className="border-t border-gray-700 pt-6 opacity-0 group-hover:opacity-100 transition duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <ul className="grid gap-2">
                    {getServiceDetails(service.details).map((item, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-300">
                        <span className="w-1 h-1 bg-brand-500 mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized Section - Full Width Split */}
        <div className="mt-24">
           <div className="mb-12 border-b border-gray-800 pb-4">
              <h2 className="font-heading text-3xl font-bold text-white">Specialized Programs</h2>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12">
              {/* Training */}
              <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900 transform -skew-x-12 translate-x-4"></div>
                  <div className="relative z-10 p-8">
                     <BookOpen className="w-10 h-10 text-brand-500 mb-6" />
                     <h3 className="font-heading text-2xl font-bold text-white mb-4">Training & Development</h3>
                     <p className="text-gray-400 mb-6">Trained more than 4000 professionals across Technical, Sales, Marketing, and Soft skills domains.</p>
                     <ul className="space-y-3 text-gray-300 border-l border-brand-900 pl-4">
                        <li>Leadership Development</li>
                        <li>Sales & Marketing Mastery</li>
                        <li>Technical & Soft Skills Training</li>
                     </ul>
                  </div>
              </div>

               {/* Research */}
              <div className="relative group overflow-hidden">
                  <div className="absolute inset-0 bg-gray-900 transform -skew-x-12 translate-x-4"></div>
                  <div className="relative z-10 p-8">
                     <Search className="w-10 h-10 text-brand-500 mb-6" />
                     <h3 className="font-heading text-2xl font-bold text-white mb-4">Market Estimation & Consumer Behaviour</h3>
                     <p className="text-gray-400 mb-6">Deep-dive intelligence for strategic positioning and understanding customer dynamics.</p>
                     <ul className="space-y-3 text-gray-300 border-l border-brand-900 pl-4">
                        <li>Market Size Estimation</li>
                        <li>Consumer Behaviour Analysis</li>
                        <li>Competitive Intelligence</li>
                     </ul>
                  </div>
              </div>
           </div>
        </div>

        {/* Shorter Testimonials / Client Impact Section */}
        <div className="mt-24 mb-12">
           <div className="mb-12 border-b border-gray-800 pb-4">
              <span className="text-sm font-bold text-brand-500 uppercase tracking-widest block mb-2">Proven Results</span>
              <h2 className="font-heading text-3xl font-bold text-white">Our Real-World Impact</h2>
              <p className="text-gray-400 text-sm mt-2">Demonstrated operational and financial performance improvements for Indian MSMEs.</p>
           </div>

           <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-gray-800/80 p-6 rounded-sm flex flex-col justify-between">
                 <div>
                    <span className="text-brand-400 font-mono text-sm font-bold block mb-2">20% Cost Reduction</span>
                    <p className="text-gray-300 text-sm italic mb-4">"Analytics Spire helped us map our entire assembly line and identify bottlenecks. The automation was seamless."</p>
                 </div>
                 <p className="text-xs text-gray-500 font-bold border-t border-gray-800 pt-3 mt-2">Precision Components (Manufacturing)</p>
              </div>
              
              <div className="bg-gray-900 border border-gray-800/80 p-6 rounded-sm flex flex-col justify-between">
                 <div>
                    <span className="text-brand-400 font-mono text-sm font-bold block mb-2">15 Hours Saved/Week</span>
                    <p className="text-gray-300 text-sm italic mb-4">"With their customized CRM dashboard, our sales and inventory operations are now on autopilot."</p>
                 </div>
                 <p className="text-xs text-gray-500 font-bold border-t border-gray-800 pt-3 mt-2">Apex Global Traders (Trading & Retail)</p>
              </div>

              <div className="bg-gray-900 border border-gray-800/80 p-6 rounded-sm flex flex-col justify-between">
                 <div>
                    <span className="text-brand-400 font-mono text-sm font-bold block mb-2">35% Revenue Growth</span>
                    <p className="text-gray-300 text-sm italic mb-4">"Their business consulting and market strategy enabled us to secure multiple enterprise clients."</p>
                 </div>
                 <p className="text-xs text-gray-500 font-bold border-t border-gray-800 pt-3 mt-2">InnovateTech Services (IT Services)</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};