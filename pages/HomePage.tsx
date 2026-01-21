import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Globe, BarChart, Zap } from 'lucide-react';
import { useData } from '../context/DataContext';

export const HomePage: React.FC = () => {
  const { data } = useData();
  
  // Helper to split title for styling if needed (e.g. Identify. Innovate. Impact.)
  const titleParts = data.config.heroTitle.split('.');
  
  return (
    <div className="flex flex-col bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-10"></div>
          <div className="absolute right-0 top-0 w-2/3 h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
          <div className="border-l-4 border-brand-500 pl-8 mb-8">
            <h2 className="text-brand-400 font-bold tracking-widest uppercase text-sm mb-2">Management Consulting 2025-2030</h2>
            <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-white">
              {titleParts[0] ? <>{titleParts[0]}.<br /></> : null}
              {titleParts[1] ? <>{titleParts[1]}.<br /></> : null}
              {titleParts[2] ? <span className="text-brand-500">{titleParts[2]}.</span> : null}
              {!titleParts[2] && !titleParts[1] && <span className="text-brand-500">{data.config.heroTitle}</span>}
            </h1>
          </div>
          <p className="text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12 pl-9 border-l-4 border-transparent">
            {data.config.heroSubtitle}
          </p>
          <div className="pl-9">
            <Link 
              to="/services" 
              className="group inline-flex items-center text-xl font-bold text-white hover:text-brand-400 transition"
            >
              Explore our expertise
              <span className="ml-3 bg-brand-600 group-hover:bg-brand-500 text-white p-2 rounded-full transition-transform group-hover:translate-x-2">
                <ArrowRight size={24} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* "So You Can" Section - The Why */}
      <section className="bg-white text-black py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="font-heading text-5xl font-bold mb-6 tracking-tight">So you can...</h2>
            <div className="w-full h-px bg-gray-300"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden">
                <TrendingUp size={48} className="text-brand-600 mb-4 transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-brand-700 transition">Scale Confidently.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Move from survival to sustainable growth with financial clarity and strategic roadmaps designed for the Indian market.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden">
                <Zap size={48} className="text-brand-600 mb-4 transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-brand-700 transition">Automate Everything.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Replace manual chaos with streamlined digital workflows. We build custom apps and dashboards that work for you.
              </p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="mb-6 overflow-hidden">
                <Globe size={48} className="text-brand-600 mb-4 transform group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-brand-700 transition">Lead the Market.</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Leverage 30+ years of corporate data to make decisions that outpace competitors and secure your legacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Industries / Services - Grid Layout */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-heading text-4xl font-bold text-white">Industry Expertise</h2>
            <Link to="/services" className="text-white border-b border-brand-500 pb-1 hover:text-brand-400 transition">View all services</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-gray-800 border border-gray-800">
             {/* Dynamic Cards from Services (First 3) */}
             {data.services.slice(0, 3).map((service, index) => (
               <div key={index} className="bg-gray-900 p-10 hover:bg-gray-800 transition duration-300 group min-h-[300px] flex flex-col justify-between">
                 <div>
                   <BarChart className="w-10 h-10 text-brand-500 mb-6" />
                   <h3 className="font-heading text-2xl font-bold text-white mb-2">{service.title}</h3>
                   <p className="text-gray-400 line-clamp-2">{service.description}</p>
                 </div>
                 <Link to="/services">
                   <ArrowRight className="text-brand-500 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition duration-300" />
                 </Link>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div className="flex flex-col items-center">
                 <span className="font-heading text-5xl md:text-6xl font-bold mb-2">30+</span>
                 <span className="text-sm uppercase tracking-widest font-semibold text-brand-100">Years Experience</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="font-heading text-5xl md:text-6xl font-bold mb-2">{data.services.length}+</span>
                 <span className="text-sm uppercase tracking-widest font-semibold text-brand-100">Service Areas</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="font-heading text-5xl md:text-6xl font-bold mb-2">100+</span>
                 <span className="text-sm uppercase tracking-widest font-semibold text-brand-100">Projects</span>
              </div>
              <div className="flex flex-col items-center">
                 <span className="font-heading text-5xl md:text-6xl font-bold mb-2">AI</span>
                 <span className="text-sm uppercase tracking-widest font-semibold text-brand-100">Driven Solutions</span>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-900 skew-x-12 translate-x-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
           <div className="md:w-1/2 mb-10 md:mb-0">
             <h2 className="font-heading text-4xl font-bold text-white mb-4">Ready to transform?</h2>
             <p className="text-gray-400 text-xl">Let's discuss how we can build your future, today.</p>
           </div>
           <div>
             <Link 
               to="/contact" 
               className="inline-block bg-white text-black px-12 py-5 text-lg font-bold hover:bg-gray-200 transition duration-300"
             >
               Contact Us
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
};