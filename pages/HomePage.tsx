import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Users, Globe, BarChart, Zap, Video, BookOpen, Quote } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useData } from '../context/DataContext';
import { trackEvent } from '../utils/analytics';

export const HomePage: React.FC = () => {
  const { data } = useData();
  
  // Helper to split title for styling if needed (e.g. Identify. Innovate. Impact.)
  const heroTitle = data.config.heroTitle || "Driving Excellence Through Expertise.";
  const titleParts = heroTitle.split('.');
  
  return (
    <div className="flex flex-col bg-black text-white font-sans">
      <SEO 
        title="MSME Business Consultant & Automation Expert | Analytics Spire"
        description="Analytics Spire helps Indian MSMEs cut costs and scale with data-driven consulting and AI automation. Led by Anand Rengasamy. Book a free consultation."
        keywords="MSME Business Consultant India, Business Coach Chennai, Automation for Small Business, Anand Rengasamy, Analytics Spire, Low Code CRM"
        url="https://www.analyticsspire.com"
        schemaType="Organization"
      />
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
                <span className="text-lg md:text-xl font-bold text-brand-500 uppercase tracking-widest block mb-2">Analytics Spire</span>
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-tight">
                  Business consulting and automation for MSMEs across India
                </h1>
                <p className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent font-extrabold text-2xl md:text-3xl mt-4 tracking-tight uppercase">
                  Turn your Business into Growth Machine
                </p>
              </div>
              
              <div className="relative mb-10">
                <h2 className="font-heading text-5xl md:text-7xl lg:text-[100px] font-bold leading-[0.9] tracking-tight text-brand-500 relative z-10">
                  {heroTitle}
                </h2>
                <span className="absolute top-1 left-1 font-heading text-5xl md:text-7xl lg:text-[100px] font-bold leading-[0.9] tracking-tight text-brand-900/30 select-none z-0" aria-hidden="true">
                  {heroTitle}
                </span>
              </div>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12">
                Empowering <span className="text-white font-medium">MSMEs</span> and enterprises through data-driven innovation, strategic planning, and intelligent automation. Led by industry veterans with <span className="text-white font-medium">decades of experience</span> in corporate leadership.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-6 mb-12">
                <a 
                  href="https://anandrengasamy.graphy.com/sessions"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent('webinar_registration_click', { position: 'hero_home' })}
                  className="group flex items-center gap-4 bg-brand-600 hover:bg-brand-500 text-white px-8 py-4 rounded-sm font-bold text-lg transition-all shadow-[0_0_20px_rgba(2,132,199,0.3)] hover:shadow-[0_0_30px_rgba(2,132,199,0.5)]"
                >
                  <Video size={24} />
                  Join Webinar
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>

                <a 
                  href="https://anandrengasamy.graphy.com/courses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-sm font-bold text-lg transition-all"
                >
                  <BookOpen size={24} className="text-brand-400" />
                  Our Courses
                  <div className="w-2 h-2 rounded-full bg-brand-500 group-hover:animate-ping"></div>
                </a>
              </div>

              <Link 
                to="/services" 
                className="group flex items-center text-lg md:text-xl font-bold text-gray-400 hover:text-white transition-all duration-300"
              >
                Explore our full expertise
                <div className="ml-4 w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-brand-600 transition-all duration-300 group-hover:translate-x-2">
                  <ArrowRight size={20} />
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
                  <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-brand-700 transition">Automate for Controls.</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Replace manual chaos with streamlined digital workflows. We build dashboards and apps that work for you.
                  </p>
                </div>
                
                <div className="group cursor-pointer">
                  <div className="mb-6 overflow-hidden">
                    <Globe size={48} className="text-brand-600 mb-4 transform group-hover:scale-110 transition duration-500" />
                  </div>
                  <h3 className="font-heading text-3xl font-bold mb-4 group-hover:text-brand-700 transition">Lead the Market.</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Leverage decades of corporate leadership to transform raw data into actionable insights, enabling you to make smarter decisions, outperform competitors, and secure a lasting legacy.
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

      {/* Recent Engagements Section */}
      {data.events.length > 0 && (
        <section className="py-24 bg-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Our Impact</h2>
                <h2 className="font-heading text-4xl font-bold text-white">Recent Engagements</h2>
              </div>
              <Link to="/events" className="text-white border-b border-brand-500 pb-1 hover:text-brand-400 transition">View all events</Link>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {data.events.slice(0, 2).map((event, idx) => (
                <div key={idx} className="group relative overflow-hidden">
                  <div className="aspect-video overflow-hidden rounded-sm mb-6">
                    <img 
                      src={event.imageUrl} 
                      alt={`${event.title} - MSME training event by Analytics Spire`}
                      width={800}
                      height={450}
                      loading="lazy"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 filter grayscale group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex items-center text-brand-500 text-sm font-bold uppercase tracking-widest mb-3">
                    <span className="mr-4">{event.date}</span>
                    <span>{event.category}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition">{event.title}</h3>
                  <p className="text-gray-400 line-clamp-2 mb-6">{event.description}</p>
                  <Link to="/events" className="inline-flex items-center text-white font-bold text-sm uppercase tracking-widest border-b border-white pb-1 group-hover:border-brand-500 group-hover:text-brand-500 transition">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats Section */}
      <section className="bg-[#030712] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-600 text-white border-l-[3px] border-brand-500 pl-8 md:pl-12 py-16 pr-8 md:pr-12 shadow-2xl">
            <div className="max-w-5xl">
               <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                  <div className="flex flex-col items-center">
                     <span className="font-heading text-4xl md:text-5xl font-bold mb-2">Decades</span>
                     <span className="text-sm uppercase tracking-widest font-semibold text-brand-100">Experience</span>
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

      {/* Testimonials / Client Results Section */}
      <section className="bg-gray-900 py-24 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center md:text-left">
            <span className="text-sm font-bold text-brand-500 uppercase tracking-widest block mb-3">Client Results</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white tracking-tight">
              Testimonials & Case Studies
            </h2>
            <p className="text-gray-400 text-lg mt-4 max-w-2xl font-light">
              See how we help small and medium enterprises optimize their operations, scale their revenue, and achieve sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-black border border-gray-800/80 p-8 rounded-sm hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-brand-950 border border-brand-800/50 px-4 py-2 rounded-sm">
                    <span className="text-brand-400 font-mono font-bold text-lg">Result: -20% Cost</span>
                  </div>
                  <Quote className="text-brand-500/40 w-8 h-8" />
                </div>
                <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                  "Analytics Spire helped us map our entire assembly line and identify critical bottlenecks. The automation was seamless."
                </p>
              </div>
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h4 className="font-heading font-bold text-white text-lg">Precision Components Pvt. Ltd.</h4>
                <p className="text-gray-500 text-sm">Manufacturing MSME, Chennai</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-black border border-gray-800/80 p-8 rounded-sm hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-brand-950 border border-brand-800/50 px-4 py-2 rounded-sm">
                    <span className="text-brand-400 font-mono font-bold text-lg">Result: 15h Saved/Wk</span>
                  </div>
                  <Quote className="text-brand-500/40 w-8 h-8" />
                </div>
                <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                  "With their customized CRM dashboard, our sales and inventory operations are now on autopilot. We have eliminated human errors."
                </p>
              </div>
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h4 className="font-heading font-bold text-white text-lg">Apex Global Traders</h4>
                <p className="text-gray-500 text-sm">Trading & Retail MSME, Bangalore</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-black border border-gray-800/80 p-8 rounded-sm hover:border-brand-500/50 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-brand-950 border border-brand-800/50 px-4 py-2 rounded-sm">
                    <span className="text-brand-400 font-mono font-bold text-lg">Result: +35% Revenue</span>
                  </div>
                  <Quote className="text-brand-500/40 w-8 h-8" />
                </div>
                <p className="text-gray-300 italic text-base leading-relaxed mb-6">
                  "Their business consulting and market strategy enabled us to secure multiple enterprise clients within six months."
                </p>
              </div>
              <div className="border-t border-gray-800 pt-6 mt-6">
                <h4 className="font-heading font-bold text-white text-lg">InnovateTech Services</h4>
                <p className="text-gray-500 text-sm">IT Services MSME, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};