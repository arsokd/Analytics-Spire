import React from 'react';
import { BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react';
import { VALUES, BRANDS, TOOLS } from '../constants';
import { useData } from '../context/DataContext';

export const AboutPage: React.FC = () => {
  const { data } = useData();

  return (
    <div className="bg-gray-950">
      {/* Header */}
      <div className="bg-gray-900 py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">About Us</h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            {data.config.aboutText}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="bg-blue-900/30 p-3 rounded-lg text-blue-400 mr-4">
                <Target size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {data.config.missionText}
            </p>
          </div>
          
          <div className="bg-gray-900 p-8 rounded-2xl shadow-md border border-gray-800">
            <div className="flex items-center mb-6">
              <div className="bg-green-900/30 p-3 rounded-lg text-green-400 mr-4">
                <BookOpen size={24} />
              </div>
              <h2 className="font-heading text-2xl font-bold text-white">Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {data.config.visionText}
            </p>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">Our Leadership</h2>
          
          <div className="space-y-12">
            {/* Partner Profile */}
            {data.config.partnerName && (
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-gray-800">
                <div className="md:w-1/3 bg-gray-800 min-h-[300px] flex items-center justify-center p-8">
                  <div className="text-center w-full">
                    <div className="relative w-48 h-48 mx-auto mb-6">
                      <img 
                        src="/partner.png" 
                        alt={data.config.partnerName} 
                        className="w-full h-full rounded-full object-cover object-top border-4 border-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                        onError={(e) => {
                           (e.target as HTMLImageElement).style.display = 'none';
                           (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden absolute inset-0 w-full h-full bg-gray-700 rounded-full flex items-center justify-center text-gray-400 border-4 border-gray-600">
                        <span className="text-4xl font-bold">HG</span>
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-2xl font-bold text-white">{data.config.partnerName}</h3>
                    <p className="text-emerald-400 font-medium text-lg mt-1">Partner</p>
                  </div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <h3 className="font-heading text-2xl font-bold mb-6 text-white">Partner's Expertise</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                    {data.config.partnerBio}
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="flex items-center font-bold text-white mb-3 text-lg">
                        <Target className="w-6 h-6 text-emerald-400 mr-2" />
                        Focus Areas
                      </h4>
                      <ul className="space-y-3 text-gray-400">
                        <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Strategic Business Transformation</li>
                        <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Operational Excellence & Efficiency</li>
                        <li className="flex items-start"><span className="mr-2 text-emerald-500">•</span> Growth Strategy & Scaling</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="flex items-center font-bold text-white mb-3 text-lg">
                        <Briefcase className="w-6 h-6 text-emerald-400 mr-2" />
                        Core Competencies
                      </h4>
                      <p className="text-sm text-gray-400 mb-3">Specialized in driving impact through:</p>
                      <div className="flex flex-wrap gap-2">
                        {['Process Optimization', 'Change Management', 'Financial Precision', 'Digital Strategy', 'Leadership Development'].map(skill => (
                          <span key={skill} className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 hover:border-emerald-500 hover:text-white transition cursor-default">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Founder Profile */}
            <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row-reverse border border-gray-800">
              <div className="md:w-1/3 bg-gray-800 min-h-[300px] flex items-center justify-center p-8">
                <div className="text-center w-full">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <img 
                      src="/founder.png" 
                      alt={data.config.founderName} 
                      className="w-full h-full rounded-full object-cover object-top border-4 border-brand-500 shadow-[0_0_20px_rgba(14,165,233,0.3)]"
                      onError={(e) => {
                         (e.target as HTMLImageElement).style.display = 'none';
                         (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden absolute inset-0 w-full h-full bg-gray-700 rounded-full flex items-center justify-center text-gray-400 border-4 border-gray-600">
                      <span className="text-4xl font-bold">AR</span>
                    </div>
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-white">{data.config.founderName}</h3>
                  <p className="text-brand-400 font-medium text-lg mt-1">Founder & CEO</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8 md:p-12">
                <h3 className="font-heading text-2xl font-bold mb-6 text-white">Founder's Vision</h3>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {data.config.founderBio}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="flex items-center font-bold text-white mb-3 text-lg">
                      <GraduationCap className="w-6 h-6 text-brand-400 mr-2" />
                      Education
                    </h4>
                    <ul className="space-y-3 text-gray-400">
                      <li className="flex items-start"><span className="mr-2 text-brand-500">•</span> Engineering Degree from BITS, Pilani</li>
                      <li className="flex items-start"><span className="mr-2 text-brand-500">•</span> Business Analytics Specialization from IIM-K</li>
                      <li className="flex items-start"><span className="mr-2 text-brand-500">•</span> Machine Learning Specialist</li>
                      <li className="flex items-start"><span className="mr-2 text-brand-500">•</span> IOD Certified Independent Director</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="flex items-center font-bold text-white mb-3 text-lg">
                      <Briefcase className="w-6 h-6 text-brand-400 mr-2" />
                      Experience
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">Leadership roles at prestigious organizations including:</p>
                    <div className="flex flex-wrap gap-2">
                      {['GMMCO', 'Rane TRW', 'TAFE Ltd', 'Claas Limited', 'ITL', 'Escorts Ltd', 'EM3 Agri Services'].map(company => (
                        <span key={company} className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-md text-sm text-gray-300 hover:border-brand-500 hover:text-white transition cursor-default">{company}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-brand-500 hover:shadow-lg hover:shadow-brand-900/10 transition group">
                <h3 className="font-heading text-lg font-bold text-brand-400 mb-2 group-hover:text-brand-300">{val.title}</h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300">{val.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Associations */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">Brand Associations</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {BRANDS.map((brand, idx) => (
              <span key={idx} className="bg-gray-900 border border-gray-800 px-6 py-3 rounded-xl text-gray-300 font-medium hover:border-brand-500 hover:text-white transition cursor-default">
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Specialized Tools */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">Specialized Tools</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {TOOLS.map((tool, idx) => (
              <span key={idx} className="bg-gray-800/50 border border-gray-700 px-5 py-2 rounded-lg text-brand-300 text-sm font-mono hover:bg-gray-800 hover:border-brand-400 transition cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};