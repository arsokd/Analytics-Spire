import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

export const EventsPage: React.FC = () => {
  const { data } = useData();

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      {/* Header */}
      <div className="relative bg-black border-b border-gray-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Insights & Engagements</h2>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
             Our Journey.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            We actively engage with the industry through workshops, summits, and strategic panels. Here is where we've been making an impact.
          </p>
        </div>
      </div>

      {/* Events List - Clean News Feed Style */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {data.events.map((event, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col md:flex-row gap-10 items-start border-b border-gray-900 pb-16 last:border-0"
            >
              {/* Date Column */}
              <div className="md:w-1/4 flex-shrink-0">
                 <div className="text-brand-500 font-bold text-lg mb-2 flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.date}
                 </div>
                 <div className="text-gray-500 flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                 </div>
              </div>

              {/* Content Column */}
              <div className="md:w-3/4">
                 <div className="overflow-hidden mb-6 rounded-sm">
                   <img 
                    src={event.imageUrl || event.image} 
                    alt={event.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition duration-700 ease-in-out filter grayscale group-hover:grayscale-0"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      const fallback = "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
                      if (target.src !== fallback) {
                        target.src = fallback;
                      }
                    }}
                   />
                 </div>
                 <h3 className="font-heading text-3xl font-bold text-white mb-4 group-hover:text-brand-400 transition">{event.title}</h3>
                 <p className="text-gray-400 text-lg leading-relaxed mb-6 max-w-3xl">
                   {event.description}
                 </p>
                 <button className="text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white pb-1 group-hover:border-brand-500 group-hover:text-brand-500 transition">
                   Read Recap
                 </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action Box */}
        <div className="mt-20 bg-gray-900 p-12 md:p-20 text-center border-t-4 border-brand-500">
             <h3 className="font-heading text-3xl font-bold text-white mb-6">Host an Analytics Spire Workshop</h3>
             <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
               Empower your team or industry cluster with specialized training in Business Analytics, Financial Literacy, and Process Automation.
             </p>
             <a 
               href="#/contact" 
               className="inline-flex items-center bg-white text-black px-10 py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition"
             >
               Enquire Now <ArrowRight className="ml-2" />
             </a>
        </div>
      </div>
    </div>
  );
};