import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Cpu, Megaphone, Settings, TrendingUp, Package, BookOpen, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const ServicesPage: React.FC = () => {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "MSME Consulting & Automation Services",
    "description": "Comprehensive consulting, coaching, and automation services tailored for Indian MSMEs.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Business Analytics",
        "url": "https://analyticsspire.com/services/business-analytics"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Business Automation",
        "url": "https://analyticsspire.com/services/business-automation"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Strategic Marketing",
        "url": "https://analyticsspire.com/services/strategic-marketing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Operational Excellence",
        "url": "https://analyticsspire.com/services/operational-excellence"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Finance Management",
        "url": "https://analyticsspire.com/services/finance-management"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Inventory Management",
        "url": "https://analyticsspire.com/services/inventory-management"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Training & Development",
        "url": "https://analyticsspire.com/services/training-and-development"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Market Estimation & Consumer Behaviour",
        "url": "https://analyticsspire.com/services/market-estimation-consumer-behaviour"
      }
    ]
  };

  const servicesHubList = [
    {
      title: "Business Analytics",
      slug: "/services/business-analytics",
      icon: BarChart3,
      category: "Data & BI",
      summary: "Transform fragmented Tally data, spreadsheets, and manual registers into real-time visual dashboards. Make data-backed decisions that boost profit margins and lower operating expenses.",
      deliverables: [
        "Interactive Tally & Excel Data Dashboards",
        "Sales, Debtor Aging & Profitability Analytics",
        "KPI Scorecards for Department Heads"
      ]
    },
    {
      title: "Business Automation",
      slug: "/services/business-automation",
      icon: Cpu,
      category: "Workflow Systems",
      summary: "Replace slow manual tasks with affordable no-code workflows. Automate lead distribution on WhatsApp, quote generation, order tracking, and invoice follow-ups without high IT costs.",
      deliverables: [
        "WhatsApp Business & Lead Auto-Routing",
        "Custom Mobile CRM & Order Tracking",
        "Automated Quotation & Payment Reminders"
      ]
    },
    {
      title: "Strategic Marketing",
      slug: "/services/strategic-marketing",
      icon: Megaphone,
      category: "B2B Growth",
      summary: "Build predictable lead generation pipelines across Google, Meta, and LinkedIn. Transition from passive word-of-mouth reliance to proactive, cost-effective digital customer acquisition.",
      deliverables: [
        "Targeted B2B Google & LinkedIn Campaigns",
        "High-Converting Landing Pages & Collateral",
        "Full-Funnel CPL & CAC ROI Tracking"
      ]
    },
    {
      title: "Operational Excellence",
      slug: "/services/operational-excellence",
      icon: Settings,
      category: "Manufacturing",
      summary: "Streamline shop-floor execution, eliminate material waste, and optimize machine utilization using Lean principles, visual SOPs, and structured shift review routines.",
      deliverables: [
        "Value Stream Mapping & Bottleneck Audits",
        "Tamil/English Visual Work SOPs",
        "5S & Scrap/Rejection Reduction Framework"
      ]
    },
    {
      title: "Finance Management",
      slug: "/services/finance-management",
      icon: TrendingUp,
      category: "Financial Strategy",
      summary: "Master cash flow, shorten debtor collections, and manage working capital with confidence. Build 13-week liquidity forecasts and bankable financial projections.",
      deliverables: [
        "13-Week Rolling Cash Flow Forecast Models",
        "Debtor Aging & Credit Control Systems",
        "Bank Loan Syndication & CMA Data Prep"
      ]
    },
    {
      title: "Inventory Management",
      slug: "/services/inventory-management",
      icon: Package,
      category: "Stock Control",
      summary: "Optimize warehouse stock levels, prevent fast-mover stockouts, and unlock capital trapped in dead inventory with ABC/XYZ matrixes and mobile barcode scanning.",
      deliverables: [
        "ABC/XYZ Inventory Matrix Classification",
        "Automated Reorder Point (ROP) WhatsApp Alerts",
        "Mobile Barcode/QR Scanning & Tally Sync"
      ]
    },
    {
      title: "Training & Development",
      slug: "/services/training-and-development",
      icon: BookOpen,
      category: "Workforce Upskilling",
      summary: "Upskill technical, sales, and middle-management teams with energetic bilingual workshops. Build accountable shift supervisors and high-performing sales representatives.",
      deliverables: [
        "B2B Sales & Tele-Calling Masterclasses",
        "Middle Management Supervisory Leadership",
        "Post-Training Application Scorecards"
      ]
    },
    {
      title: "Market Estimation & Consumer Behaviour",
      slug: "/services/market-estimation-consumer-behaviour",
      icon: Search,
      category: "Market Research",
      summary: "Validate expansion plans with empirical market size calculations (TAM/SAM/SOM), primary buyer surveys, competitor pricing benchmarks, and consumer behavior profiling.",
      deliverables: [
        "TAM, SAM & SOM Market Size Estimation",
        "Primary Buyer Field Surveys & Interviews",
        "Price Elasticity & GTM Feasibility Reports"
      ]
    }
  ];

  return (
    <div className="bg-black min-h-screen pb-24 font-sans text-white">
      <SEO 
        title="MSME Consulting, Coaching & Automation Services | Analytics Spire"
        description="Explore Analytics Spire's consulting, coaching and no-code automation services for Indian MSMEs. Cut costs and scale faster. Book a free consultation today."
        keywords="MSME Automation Services, CRM, telecalling, inventory, attendance, payroll, finance systems, Analytics Spire"
        url="https://analyticsspire.com/services"
        schemaType="Service"
        additionalSchemas={[itemListSchema]}
      />

      {/* Services Hub Hero */}
      <div className="relative pt-32 pb-20 border-b border-gray-900 bg-gradient-to-b from-gray-950 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Capabilities & Practice Areas</p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            MSME Consulting, Coaching & Automation Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl font-light leading-relaxed border-l-2 border-brand-500 pl-6">
            Analytics Spire delivers hands-on business consulting, coaching, and custom automation solutions tailored specifically for Indian small and medium enterprises. Led by Anand Rengasamy, a seasoned consultant with over 30 years of corporate and industrial leadership experience, we partner directly with MSME founders across Tamil Nadu and South India to eliminate operational chaos, optimize cash flow, streamline shop floor execution, and build scalable growth engines.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Main 8 Services Hub Grid */}
        <div className="mb-12 border-b border-gray-800 pb-4">
          <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Dedicated Practice Areas</span>
          <h2 className="font-heading text-3xl font-bold text-white">Explore Our Consulting Solutions</h2>
          <p className="text-gray-400 text-sm mt-2">Click on any service below to view detailed deliverables, methodology, case examples, and FAQs.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicesHubList.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={idx} 
                className="group bg-gray-900 p-8 sm:p-10 rounded-xl border border-gray-800 hover:border-brand-500/60 transition-all duration-300 flex flex-col justify-between hover:bg-gray-850 shadow-lg hover:shadow-brand-900/20"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-brand-950/80 border border-brand-800/60 rounded-lg text-brand-400 group-hover:scale-110 transition duration-300">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold text-brand-400/80 bg-gray-800/80 border border-gray-700/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-brand-300 transition">
                    <Link to={service.slug} className="hover:underline">
                      {service.title}
                    </Link>
                  </h3>

                  <p className="text-gray-300 text-sm font-light leading-relaxed mb-6">
                    {service.summary}
                  </p>

                  <div className="border-t border-gray-800 pt-6 mb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Key Deliverables:</p>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-gray-300">
                          <CheckCircle2 size={16} className="text-brand-400 mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Link
                    to={service.slug}
                    className="w-full bg-gray-800 hover:bg-brand-600 text-white font-bold py-3.5 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide group-hover:shadow-[0_0_15px_rgba(2,132,199,0.3)]"
                  >
                    Explore {service.title} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Existing Testimonials / Client Impact Section */}
        <div className="mt-24 mb-12">
          <div className="mb-12 border-b border-gray-800 pb-4">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block mb-2">Proven Results</span>
            <h2 className="font-heading text-3xl font-bold text-white">Our Real-World Impact</h2>
            <p className="text-gray-400 text-sm mt-2">Demonstrated operational and financial performance improvements for Indian MSMEs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 border border-gray-800/80 p-6 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-brand-400 font-mono text-sm font-bold block mb-2">20% Cost Reduction</span>
                <p className="text-gray-300 text-sm italic mb-4">"Analytics Spire helped us map our entire assembly line and identify bottlenecks. The automation was seamless."</p>
              </div>
              <p className="text-xs text-gray-500 font-bold border-t border-gray-800 pt-3 mt-2">Precision Components (Manufacturing)</p>
            </div>
            
            <div className="bg-gray-900 border border-gray-800/80 p-6 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-brand-400 font-mono text-sm font-bold block mb-2">15 Hours Saved/Week</span>
                <p className="text-gray-300 text-sm italic mb-4">"With their customized CRM dashboard, our sales and inventory operations are now on autopilot."</p>
              </div>
              <p className="text-xs text-gray-500 font-bold border-t border-gray-800 pt-3 mt-2">Apex Global Traders (Trading & Retail)</p>
            </div>

            <div className="bg-gray-900 border border-gray-800/80 p-6 rounded-lg flex flex-col justify-between">
              <div>
                <span className="text-brand-400 font-mono text-sm font-bold block mb-2">35% Revenue Growth</span>
                <p className="text-gray-300 text-sm italic mb-4">"Their business consulting and market strategy enabled us to secure multiple enterprise clients."</p>
              </div>
              <p className="text-xs text-gray-500 font-bold border-t border-gray-800 pt-3 mt-2">InnovateTech Services (IT Services)</p>
            </div>
          </div>
        </div>

        {/* Global CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-gray-900 to-black p-8 sm:p-12 rounded-2xl border border-gray-800 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Unsure which service is right for your business?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
            Book a complimentary 30-minute diagnostic call with principal consultant Anand Rengasamy to evaluate your business operational bottlenecks and identify high-ROI quick wins.
          </p>
          <Link
            to="/contact"
            className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] text-sm uppercase tracking-wide inline-flex items-center gap-2"
          >
            Book Your Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
