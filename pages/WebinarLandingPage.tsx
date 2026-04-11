import React from 'react';
import { CheckCircle2, Clock, Calendar, Video, ArrowRight, AlertCircle, TrendingUp, Zap, ShieldCheck } from 'lucide-react';

export const WebinarLandingPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans text-white selection:bg-amber-500 selection:text-black">
      {/* Top Banner */}
      <div className="bg-amber-500 text-black text-center py-2 px-4 text-sm font-bold tracking-wide uppercase">
        Special Masterclass for MSME Owners • Limited Seats Available
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-900/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 border border-gray-800 text-brand-400 text-sm font-bold mb-8">
            <AlertCircle size={16} />
            <span>Exclusive 90-Minute Live Webinar</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Turn your MSME Business into <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">Growth Machine</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Stop working <span className="text-white font-semibold italic">in</span> your business and start working <span className="text-white font-semibold italic">on</span> it. Learn the exact systems to automate operations, increase margins, and scale without the daily chaos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-3 text-gray-300 bg-gray-900/50 px-6 py-3 rounded-xl border border-gray-800">
              <Calendar className="text-brand-500" />
              <span className="font-medium">[Date to be announced]</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gray-900/50 px-6 py-3 rounded-xl border border-gray-800">
              <Clock className="text-brand-500" />
              <span className="font-medium">[Time to be announced]</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 bg-gray-900/50 px-6 py-3 rounded-xl border border-gray-800">
              <Video className="text-brand-500" />
              <span className="font-medium">Live on Zoom</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-xl font-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Register Now for Just Rs. 99 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
            <p className="mt-4 text-gray-500 text-sm">
              <span className="line-through mr-2">Regular Price: Rs. 1,999</span> 
              <span className="text-green-400 font-medium">Save 95% Today</span>
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-gray-950 border-y border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Does this sound like you?</h2>
            <div className="w-24 h-1 bg-brand-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock size={32} className="text-red-400" />,
                title: "The 14-Hour Grind",
                desc: "You are the hardest working person in your company, but growth has stagnated. If you step away, operations halt."
              },
              {
                icon: <TrendingUp size={32} className="text-red-400" />,
                title: "Shrinking Margins",
                desc: "Revenue might be coming in, but profits are leaking due to inefficiencies, poor tracking, and manual errors."
              },
              {
                icon: <Zap size={32} className="text-red-400" />,
                title: "Constant Firefighting",
                desc: "Instead of planning for the next quarter, you spend your days solving daily operational crises and managing people."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="mb-6 bg-gray-950 w-16 h-16 rounded-full flex items-center justify-center border border-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution / What You'll Learn */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                What you will learn in this <span className="text-brand-500">90-minute</span> masterclass:
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                No fluff. No generic advice. Just battle-tested frameworks used by industry veterans to scale businesses efficiently.
              </p>
              
              <div className="space-y-6">
                {[
                  "The 3-Step Framework to automate repetitive daily tasks.",
                  "How to build a 'Self-Managing' team that doesn't rely on your constant supervision.",
                  "Financial Clarity: Identifying the hidden profit leaks in your MSME.",
                  "The exact blueprint to transition from an 'Operator' to a 'Business Owner'."
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 bg-brand-500/20 p-1 rounded-full">
                      <CheckCircle2 className="text-brand-500" size={20} />
                    </div>
                    <p className="text-gray-300 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600 to-amber-500 rounded-3xl blur-2xl opacity-20"></div>
              <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Reserve Your Seat</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="text-gray-400">Webinar Value</span>
                    <span className="text-white font-medium line-through">Rs. 1,999</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-800">
                    <span className="text-gray-400">Early Action Bonus</span>
                    <span className="text-brand-400 font-medium">Included</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-white font-bold text-xl">Today's Price</span>
                    <span className="text-amber-400 font-black text-3xl">Rs. 99</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-black text-lg font-bold rounded-xl transition-colors shadow-lg">
                  Click Here to Pay Rs. 99
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <ShieldCheck size={16} />
                  <span>100% Secure Payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
