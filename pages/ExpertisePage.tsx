import React from 'react';
import { useData } from '../context/DataContext';
import { Briefcase, User } from 'lucide-react';

export const ExpertisePage: React.FC = () => {
  const { data } = useData();

  const experts = data.experts || [];

  return (
    <div className="bg-black min-h-screen pb-24 font-sans text-white">
      {/* Header */}
      <div className="relative pt-32 pb-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Our Network</p>
           <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-8">
             Industry Veterans.
           </h1>
           <p className="text-xl text-gray-400 max-w-3xl font-light leading-relaxed border-l-2 border-gray-800 pl-6">
             Leveraging the collective wisdom of seasoned leaders to solve complex business challenges.
           </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 gap-8">
          {experts.map((expert, idx) => (
            <div key={idx} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col sm:flex-row group hover:border-brand-500 transition-all duration-300">
              <div className="sm:w-1/3 aspect-square sm:aspect-auto overflow-hidden">
                <img 
                  src={expert.imageUrl} 
                  alt={expert.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8 sm:w-2/3">
                <div className="flex items-center text-brand-500 text-xs font-bold uppercase tracking-widest mb-2">
                  <Briefcase size={14} className="mr-2" />
                  {expert.function}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{expert.name}</h3>
                <p className="text-brand-400 text-sm font-medium mb-4">{expert.experience} Experience</p>
                <div className="h-px bg-gray-800 w-full mb-4"></div>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  <span className="text-white font-bold block mb-1">Expertise:</span>
                  {expert.expertise}
                </p>
                <p className="text-gray-500 text-xs italic">
                  {expert.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
