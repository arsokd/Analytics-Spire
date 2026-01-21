
import React, { useState } from 'react';
import { Play, Mic, MonitorPlay } from 'lucide-react';
import { useData } from '../context/DataContext';

export const MediaPage: React.FC = () => {
  const { data } = useData();
  const [filter, setFilter] = useState<'All' | 'Podcast' | 'Training'>('All');

  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const id = (match && match[2].length === 11) ? match[2] : null;
    return id ? `https://www.youtube.com/embed/${id}` : null;
  };

  const filteredVideos = data.videos.filter(video => 
    filter === 'All' || video.category === filter
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans pb-24">
      {/* Header */}
      <div className="relative pt-32 pb-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Knowledge Hub</h2>
           <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
             Watch & Listen
           </h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
             Expert insights on business transformation, financial literacy, and AI adoption.
           </p>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-center space-x-4 mb-12">
          {['All', 'Podcast', 'Training'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest transition border ${
                filter === cat 
                  ? 'bg-brand-600 text-white border-brand-600 shadow-[0_0_15px_rgba(2,132,199,0.5)]' 
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-brand-500 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video, idx) => {
            const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
            return (
              <div key={idx} className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-brand-900 transition duration-300 flex flex-col">
                {/* Video Player Container */}
                <div className="relative pb-[56.25%] bg-black">
                  {embedUrl ? (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-gray-500">
                      <Play size={48} />
                      <span className="ml-2">Video Unavailable</span>
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center mb-3">
                    {video.category === 'Podcast' ? (
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-purple-900 text-purple-200 border border-purple-800">
                         <Mic size={12} className="mr-1" /> Podcast
                       </span>
                    ) : (
                       <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-900 text-blue-200 border border-blue-800">
                         <MonitorPlay size={12} className="mr-1" /> Training
                       </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-white mb-3 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                    {video.description}
                  </p>
                  
                  <a 
                    href={video.youtubeUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-brand-400 text-sm font-bold uppercase tracking-wider hover:text-white transition flex items-center mt-auto"
                  >
                    Watch on YouTube <Play size={12} className="ml-2 fill-current" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredVideos.length === 0 && (
           <div className="text-center py-20 text-gray-500">
              <p className="text-xl">No videos found in this category yet.</p>
           </div>
        )}
      </div>
    </div>
  );
};
