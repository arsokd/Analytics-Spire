import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Globe, BarChart, Zap } from 'lucide-react';
import { useData } from '../context/DataContext';

export const HomePage: React.FC = () => {
  const { data } = useData();
  
  // Helper to split title for styling if needed (e.g. Identify. Innovate. Impact.)
  const heroTitle = data.config.heroTitle || "Driving Excellence Through Expertise.";
  const titleParts = heroTitle.split('.');
  
  return (
    <div className="flex flex-col bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#030712]">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-600/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col">
            {/* Vertical Line and Content Wrapper */}
            <div className="border-l-[3px] border-brand-500 pl-8 md:pl-12 py-4">
              <div className="mb-8">
                <h3 className="text-6xl md:text-[120px] font-black text-white tracking-tighter uppercase leading-none">
                  Analytics Spire
                </h3>
              </div>
              
              <div className="relative mb-10">
                <h1 className="font-heading text-5xl md:text-7xl lg:text-[100px] font-bold leading-[0.9] tracking-tight text-brand-500 relative z-10">
                  {heroTitle}
                </h1>
                <h1 className="absolute top-1 left-1 font-heading text-5xl md:text-7xl lg:text-[100px] font-bold leading-[0.9] tracking-tight text-brand-900/30 select-none z-0">
                  {heroTitle}
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12">
                Empowering <span className="text-white font-medium">MSMEs</span> and enterprises through data-driven innovation, strategic planning, and intelligent automation. Led by industry veterans with over <span className="text-white font-medium">60 years</span> of combined corporate leadership.
              </p>

              <Link 
                to="/services" 
                className="group flex items-center text-lg md:text-xl font-bold text-white hover:text-brand-400 transition-all duration-300"
              >
                Explore our expertise
                <div className="ml-4 w-12 h-12 rounded-full bg-brand-600 flex items-center justify-center group-hover:bg-brand-500 transition-all duration-300 shadow-[0_0_20px_rgba(2,132,199,0.3)] group-hover:shadow-[0_0_30px_rgba(2,132,199,0.5)] group-hover:translate-x-2">
                  <ArrowRight size={24} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* "So You Can" Section - The Why */}
      <section className="bg-[#030712] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white text-black border-l-[3px] border-brand-500 pl-8 md:pl-12 py-16 pr-8 md:pr-12 shadow-2xl">
            <div className="max-w-5xl">
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
                    Leverage over 30 years of corporate experience to convert data to make smarter decisions, outperform competitors, and secure your legacy.
                  </p>
                </div>
              </div>
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
      <section className="bg-[#030712] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 text-white border-l-[3px] border-brand-500 pl-8 md:pl-12 py-16 pr-8 md:pr-12 shadow-2xl">
            <div className="max-w-5xl">
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