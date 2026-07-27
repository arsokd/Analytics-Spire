import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Target, Share2, Compass, Layers } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const StrategicMarketingPage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do traditional MSMEs in India need strategic marketing consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Relying purely on referrals and word-of-mouth leaves revenue vulnerable to economic slumps and aggressive competitor pricing. Strategic marketing builds a predictable, inbound digital pipeline that generates qualified B2B leads consistently."
        }
      },
      {
        "@type": "Question",
        "name": "How is B2B marketing for MSMEs different from B2C digital marketing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "B2B marketing focuses on trust, technical capability, problem-solving, and ROI rather than impulse buying. We target decision-makers—such as purchase managers, factory heads, and business owners—using LinkedIn, Google Search, and industry landing pages."
        }
      },
      {
        "@type": "Question",
        "name": "What monthly ad budget is recommended for an Indian MSME starting digital lead gen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically recommend starting with a modest monthly ad spend of ₹25,000 to ₹50,000 focused strictly on high-intent Google Search or Meta Lead campaigns, scaling up only after cost-per-qualified-lead is proven."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure the ROI of strategic marketing consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We track full-funnel metrics: ad spend, Cost Per Lead (CPL), tele-calling connection rate, sales proposal value, and final Customer Acquisition Cost (CAC) vs Customer Lifetime Value (LTV)."
        }
      },
      {
        "@type": "Question",
        "name": "Can strategic marketing help us recruit better dealers and distributors across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We design targeted distributor recruitment campaigns that showcase your product margins, supply chain reliability, and brand support to attract high-performing regional dealers across South India."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://analyticsspire.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://analyticsspire.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Strategic Marketing", "item": "https://analyticsspire.com/services/strategic-marketing" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Marketing Consultant for MSME India | Analytics Spire"
        description="Trusted marketing consultant for MSME India. Drive targeted B2B lead generation, brand positioning, and digital sales growth. Book your consultation."
        url="https://analyticsspire.com/services/strategic-marketing"
        schemaType="Service"
        additionalSchemas={[pageFaqSchema, breadcrumbSchema]}
      />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-20 border-b border-gray-900 bg-gradient-to-b from-gray-950 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-400 font-bold mb-6">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <Link to="/services" className="hover:text-white transition">Services</Link>
            <ChevronRight size={12} className="text-gray-600" />
            <span className="text-gray-300">Strategic Marketing</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                B2B Growth & Lead Generation Advisory
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Strategic marketing consultant for MSME India to drive predictable lead flow
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                Most Indian MSMEs rely almost entirely on word-of-mouth referrals and traditional dealer networking for business growth. While effective initially, this leaves revenues vulnerable to seasonal slumps and aggressive competitor pricing. As a practical marketing consultant for MSME India, Analytics Spire helps small and medium enterprises build structured B2B and B2C marketing funnels, optimize digital lead generation campaigns across Meta, Google, and LinkedIn, craft compelling brand collateral, and execute data-driven customer acquisition strategies tailored to the Indian marketplace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-3.5 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href="#included"
                  className="bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold px-6 py-3.5 rounded-lg transition text-sm"
                >
                  Explore Deliverables
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-900/90 border border-gray-800 p-8 rounded-xl shadow-2xl">
              <Megaphone className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>High-Intent Google & LinkedIn B2B Campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Conversion-Optimized Landing Page Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Dealer Network Expansion Strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Full-Funnel CAC & ROI Tracking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: What's Included */}
      <section id="included" className="py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Capabilities</span>
            <h2 className="font-heading text-3xl font-bold text-white">What's included</h2>
            <p className="text-gray-400 mt-2">
              Our marketing consulting solutions deliver practical, ROI-driven marketing frameworks designed for Indian industrial and commercial contexts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Market Position & Value Proposition Blueprint</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We define your unique selling proposition (USP), competitor positioning matrix, and brand messaging to differentiate your enterprise from low-cost competitors.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Digital B2B Lead Generation Strategy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We architect targeted Google Search campaigns, Meta Lead Ads, and LinkedIn Outreach funnels that reach purchase managers, directors, and industrial buyers across target Indian states.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Landing Page & Website Conversion Optimization</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We overhaul your website landing pages with high-contrast call-to-actions, WhatsApp quick-chat hooks, product spec sheets, and trust badges to turn casual visitors into verified inquiries.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">WhatsApp & Email Lead Nurturing Funnels</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design automated follow-up drip sequences that deliver product videos, case studies, and customer testimonials over 30 days to nurture cold leads into active sales discussions.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Distributor & Channel Partner Recruitment</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build dedicated channel partner acquisition campaigns to recruit regional distributors, dealers, and stockists across Tier-2 and Tier-3 industrial hubs in India.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Marketing ROI & Ad Spend Dashboard</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Track ad spend, Cost Per Lead (CPL), tele-calling connection rates, and final Customer Acquisition Cost (CAC) on a clean, real-time analytics dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Who this is for */}
      <section className="py-20 border-b border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Target Profile</span>
              <h2 className="font-heading text-3xl font-bold text-white mb-6">Who this is for</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Designed for ambitious Indian MSME founders who want to establish a strong brand identity and build an independent sales channel.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Annual Turnover: ₹1 Crore to ₹30 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Target Market: Regional & All-India B2B / B2C
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: Industrial machinery, auto aftermarket, consumer goods, agri-products, specialized services
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Target className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">B2B Manufacturers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Factories producing components, machinery, or materials who want to connect directly with corporate procurement heads across India.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Share2 className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Expanding Distributors</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Traders and brand licensees wanting to build a strong dealer network in new states like Karnataka, Andhra Pradesh, or Maharashtra.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Compass className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">New Product Launches</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MSMEs introducing innovative product lines that require educational content and targeted digital campaigns to create demand.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Layers className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Traditional Enterprises</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Generational businesses looking to modernize their brand image, launch active digital ad campaigns, and engage younger B2B buyers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: How it works */}
      <section className="py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Methodology</span>
            <h2 className="font-heading text-3xl font-bold text-white">How it works</h2>
            <p className="text-gray-400 mt-2">
              Our marketing consulting framework follows a structured 4-phase execution timeline.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Buyer Profiling & Research</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze your ideal buyer personas, key purchasing criteria, competitor digital ad footprints, and sales channels across target markets.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-4</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Funnel Build & Collateral</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We write ad copy, design high-converting landing pages, prepare digital brochures, and configure tracking pixels and lead forms.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 5-8</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Campaign Launch & Testing</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We launch targeted Google Search and Meta Lead campaigns, run headline A/B split tests, and optimize keyword bidding for low Cost Per Lead.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Sales Alignment & Scaling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We integrate lead flows with your tele-calling sales team, review monthly lead-to-deal conversion rates, and scale winning ad channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: What results to expect */}
      <section className="py-20 border-b border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Outcomes</span>
            <h2 className="font-heading text-3xl font-bold text-white">What results to expect</h2>
            <p className="text-gray-400 mt-2">
              Honest outcomes focused on qualified inquiries, market authority, and predictable sales pipeline growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="text-brand-500" />
                Measurable Impact Areas
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Predictable Monthly Inquiries:</strong> Establish a steady stream of verified B2B leads instead of waiting for passive walk-ins.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Lower Cost Per Lead (CPL):</strong> Continuous ad creative testing reduces acquisition costs on search and social channels.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Enhanced Brand Value:</strong> Professional collateral and web positioning allow you to command premium prices.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Geographic Expansion:</strong> Generate sales leads from new industrial districts across South India without opening physical branch offices.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  By launching targeted B2B Google Search ads and high-converting landing pages, an Indian industrial valve manufacturer generated qualified procurement inquiries from major infrastructure projects across South India.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of an MSME digital marketing campaign result]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Digital Marketing Strategies for Indian MSMEs: B2B Growth Blueprint</h4>
            </div>
            <Link 
              to="/blog/digital-marketing-for-msme-india" 
              className="text-brand-400 hover:text-white font-bold text-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              Read Article <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 5: Frequently Asked Questions */}
      <section className="py-20 border-b border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">FAQ</span>
            <h2 className="font-heading text-3xl font-bold text-white">Frequently asked questions</h2>
            <p className="text-gray-400 mt-2">
              Common questions Indian business owners ask about strategic marketing consulting.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl">
            {pageFaqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <h3 className="text-lg font-bold text-white mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                  {item.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed pl-8">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-gray-950 via-black to-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to build a predictable marketing and sales engine?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 strategic consultation with Anand Rengasamy to evaluate your target market and build a customized lead generation strategy for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] text-sm uppercase tracking-wide flex items-center gap-2"
            >
              Schedule Consultation <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 font-semibold px-6 py-4 rounded-lg transition text-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
