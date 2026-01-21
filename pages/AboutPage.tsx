import React from 'react';
import { Award, BookOpen, Briefcase, GraduationCap, Target } from 'lucide-react';
import { VALUES } from '../constants';
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

        {/* Founder Profile */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">Meet The Founder</h2>
          <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-sm flex flex-col md:flex-row border border-gray-800">
            <div className="md:w-1/3 bg-gray-800 min-h-[300px] flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-40 h-40 bg-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-400 border-4 border-gray-600">
                  <span className="text-4xl font-bold">AR</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">{data.config.founderName}</h3>
                <p className="text-brand-400 font-medium">Founder & CEO</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <h3 className="font-heading text-2xl font-bold mb-6 text-white">Professional Background</h3>
              <p className="text-gray-300 mb-6">
                {data.config.founderBio}
              </p>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="flex items-center font-bold text-white mb-3">
                    <GraduationCap className="w-5 h-5 text-brand-400 mr-2" />
                    Education
                  </h4>
                  <ul className="space-y-2 text-gray-400 text-sm">
                    <li>• Engineering Degree from BITS, Pilani</li>
                    <li>• Business Analytics Specialization from IIM-K</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="flex items-center font-bold text-white mb-3">
                    <Briefcase className="w-5 h-5 text-brand-400 mr-2" />
                    Experience
                  </h4>
                  <p className="text-sm text-gray-400 mb-2">Leadership roles at prestigious organizations including:</p>
                  <div className="flex flex-wrap gap-2">
                    {['GMMCO', 'Rane TRW', 'TAFE Ltd', 'Claas Limited', 'ITL', 'Escorts Ltd', 'EM3 Agri Services'].map(company => (
                      <span key={company} className="bg-gray-800 border border-gray-700 px-2 py-1 rounded text-xs text-gray-300">{company}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-white mb-10 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-lg hover:border-brand-500 hover:shadow-lg hover:shadow-brand-900/10 transition">
                <h3 className="font-heading text-lg font-bold text-brand-400 mb-2">{val.title}</h3>
                <p className="text-gray-400 text-sm">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};