import React from 'react';
import { 
  CheckCircle2, Clock, Calendar, Video, ArrowRight, AlertCircle, 
  TrendingDown, Users, FileText, Zap, ShieldCheck, Target, 
  Activity, BarChart, Lock
} from 'lucide-react';

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
            <span>Exclusive 1.5-Hour Masterclass</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1] mb-8">
            Is Your Business Running You, or <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">Are You Running Your Business?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-10">
            Transform your MSME from daily chaos and cash flow stress into a predictable, scalable, and system-driven machine. <strong className="text-white font-medium">Learn the exact framework to step out of daily operations and scale profitably.</strong>
          </p>

          <div className="flex flex-col items-center">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-xl font-black rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Fix Your Business Now – Register for Just ₹99 <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
            <p className="mt-4 text-gray-400 text-sm font-medium">
              Designed strictly for Indian MSME Owners
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Agitation Section */}
      <section className="py-20 bg-gray-950 border-y border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Does This Sound Like Your Daily Reality?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              As an MSME owner, you work harder and harder every year, but the results don't reflect your effort. Do you face these critical pain points?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock size={28} className="text-red-400" />,
                title: "The 'Owner Trap'"
              },
              {
                icon: <TrendingDown size={28} className="text-red-400" />,
                title: "Unpredictable Sales"
              },
              {
                icon: <Activity size={28} className="text-red-400" />,
                title: "Cash Flow Stress"
              },
              {
                icon: <Target size={28} className="text-red-400" />,
                title: "Operating by 'Gut Feeling'"
              },
              {
                icon: <Users size={28} className="text-red-400" />,
                title: "Team Dependency"
              },
              {
                icon: <FileText size={28} className="text-red-400" />,
                title: "Compliance Fear"
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-red-900/50 transition-colors flex flex-col items-center text-center">
                <div className="mb-6 bg-gray-950 w-14 h-14 rounded-full flex items-center justify-center border border-gray-800">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The "Aha!" Moment */}
      <section className="py-20 relative overflow-hidden bg-brand-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Your Market Isn't the Problem.<br/>
            Your Team Isn't the Problem.<br/>
            <span className="text-brand-500">You don't have good systems.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Businesses don't fail just because of problems; they fail because the same problems repeat. Your struggles are not random. Low sales, cash stress, and daily chaos are just <strong className="text-white">symptoms of missing or broken business functions.</strong>
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
              <div className="text-red-400 font-bold mb-2 text-lg">Symptom: Low Sales?</div>
              <div className="text-gray-300 font-medium">Root Cause: ?</div>
            </div>
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
              <div className="text-red-400 font-bold mb-2 text-lg">Symptom: Cash Stress?</div>
              <div className="text-gray-300 font-medium">Root Cause: ?</div>
            </div>
            <div className="bg-gray-900/80 p-6 rounded-xl border border-gray-800">
              <div className="text-red-400 font-bold mb-2 text-lg">Symptom: Daily Chaos?</div>
              <div className="text-gray-300 font-medium">Root Cause: ?</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section (Teaser) */}
      <section className="py-24 bg-black border-t border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Introducing the <br className="hidden md:block" />
              <span className="text-amber-500">MSME Growth Engine</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              In this 1.5-hour intensive webinar, you will uncover the exact blueprint to fix your business. We will guide you through our proprietary 5-step process:
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              { step: "1", title: "Diagnose" },
              { step: "2", title: "Design" },
              { step: "3", title: "Systems" },
              { step: "4", title: "Automate" },
              { step: "5", title: "Control & Scale" }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-6 bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-500/20 text-brand-500 font-black text-xl rounded-full flex items-center justify-center border border-brand-500/30">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value / ROI Section */}
      <section className="py-20 bg-gray-950 border-y border-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">What Happens After You Fix Your Systems?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              This webinar provides Seven Structured Solutions for your Seven Biggest Pain Points. By implementing these strategies, you can expect to:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Stop 10-25% of Revenue Leakage", desc: "Plug the hidden holes in your sales funnel." },
              { title: "Free Up Working Capital", desc: "Unlock 2 to 4 months of blocked cash trapped in bad inventory and operations." },
              { title: "Gain 15-20% Productivity", desc: "Get absolute clarity on who is performing in your team and who isn't." },
              { title: "Finally Gain Control", desc: "Transition from a state of 'Chaos & Firefighting' to 'Predictability & Visibility'." }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="mt-1 bg-green-500/20 p-1 rounded-full flex-shrink-0">
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-900/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Coach should not Run on the Track While Your Athletes Watch, continuously.
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            It is time to step out of the daily grind and become a true business coach. See the light at the end of the tunnel.
          </p>

          <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10 text-left">
              <div>
                <div className="text-gray-500 text-sm mb-1">Duration</div>
                <div className="text-white font-bold flex items-center gap-2"><Clock size={16} className="text-brand-500"/> 1.5 Hours</div>
              </div>
              <div>
                <div className="text-gray-500 text-sm mb-1">Audience</div>
                <div className="text-white font-bold flex items-center gap-2"><Users size={16} className="text-brand-500"/> MSME Owners</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-gray-500 text-sm mb-1">Investment</div>
                <div className="text-amber-400 font-black text-2xl">₹99</div>
              </div>
            </div>

            <button className="w-full group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-xl font-black rounded-xl overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Claim Your Spot Now & Fix Your Business! <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            </button>
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ShieldCheck size={16} />
              <span>100% Secure Payment</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

