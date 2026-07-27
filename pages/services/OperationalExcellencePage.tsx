import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Wrench, Shield, Activity, Layers } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const OperationalExcellencePage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does an operational efficiency consulting engagement typically take for a manufacturing unit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard shop-floor operational efficiency project spans 8 to 12 weeks, covering diagnostic value stream mapping, SOP drafting, worker training, pilot line testing, and full plant rollout."
        }
      },
      {
        "@type": "Question",
        "name": "Do shop-floor workers resist adopting standard operating procedures (SOPs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Resistance occurs when SOPs are overly bureaucratic. We design bilingual visual work instructions (Tamil/English with photo diagrams) and involve floor supervisors directly in drafting them, ensuring enthusiastic shop-floor adoption."
        }
      },
      {
        "@type": "Question",
        "name": "Can Lean manufacturing principles be applied to custom batch manufacturing MSMEs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Lean principles—such as single-minute exchange of die (SMED) setup reduction, 5S workplace organization, and cell layout design—are especially effective in job-work units with frequent product changeovers."
        }
      },
      {
        "@type": "Question",
        "name": "How do you measure shop-floor waste reduction in financial terms?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We translate physical operational metrics (reduced scrap kg, saved machine setup minutes, lower rework hours) directly into financial savings using material unit costs and hourly machine shop rates."
        }
      },
      {
        "@type": "Question",
        "name": "Will operational efficiency consulting require capital expenditure on new machinery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rarely. Our primary goal is optimizing existing machinery and manpower utilization. Up to 85% of operational gains come from workflow re-sequencing, setup time reduction, preventive maintenance, and visual management."
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
      { "@type": "ListItem", "position": 3, "name": "Operational Excellence", "item": "https://analyticsspire.com/services/operational-excellence" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Operational Efficiency Consultant Manufacturing India | Analytics Spire"
        description="Proven operational efficiency consultant for manufacturing MSMEs in India. Reduce waste, streamline shop floor processes, and scale output. Consult today."
        url="https://analyticsspire.com/services/operational-excellence"
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
            <span className="text-gray-300">Operational Excellence</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                Manufacturing & Supply Chain Process Optimization
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Operational efficiency consultant for manufacturing MSMEs in India to eliminate waste
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                Shop floor delays, unplanned machine downtime, high material scrap rates, and unorganized assembly lines directly erode net profits in Indian manufacturing units. Many plant heads try to solve these issues by working longer shifts or hiring extra manual labor, which only increases overheads. As an experienced operational efficiency consultant for manufacturing India, Analytics Spire applies Lean principles, standard operating procedures (SOPs), supply chain bottleneck audits, and digital tracking tools to streamline shop-floor execution, lower per-unit production costs, and boost overall plant throughput.
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
              <Settings className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Shop-Floor Value Stream Mapping & Audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Tamil / English Visual SOP Documentation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Scrap & Rejection Reduction Framework</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Machine Utilization & OEE Tracking</span>
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
              Our operational excellence consulting focuses on pragmatic shop-floor transformations that increase plant output without expensive capital expenditure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Value Stream Mapping & Bottleneck Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We physically audit your material flow from raw material receiving to finished goods dispatch, identifying cycle time imbalances, unnecessary material handling, and production bottlenecks.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Visual SOPs & Work Instructions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We draft clear, bilingual (Tamil/English) Standard Operating Procedures with photo-illustrated work instructions posted directly at machine stations for shop-floor operators.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Scrap & Rejection Reduction Framework</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We institute 5S workplace discipline, root cause defect logging (Pareto analysis), and Poka-Yoke mistake-proofing to systematically reduce raw material scrap rates and rework costs.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Preventive Maintenance & OEE Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We establish total productive maintenance (TPM) schedules and Overall Equipment Effectiveness (OEE) tracking logs to reduce breakdown downtime on critical CNC/PLC machinery.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Vendor Procurement & Quality Control</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We streamline raw material inbound inspection and establish vendor rating scorecards to eliminate bad-quality raw material batches before they reach assembly lines.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Daily Production Huddles & KPI Management</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We train shop-floor supervisors to conduct 10-minute daily shift huddles, reviewing hourly production targets vs actual output to address delays on the spot.
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
                Tailored for owners, plant heads, and general managers of manufacturing and assembly units across industrial hubs in India.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Worker Strength: 15 to 150 shop-floor staff
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Annual Turnover: ₹3 Crore to ₹60 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: Automotive components, precision engineering, plastics, fabrication, textiles, food processing
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Wrench className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Auto Component Suppliers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Tier-2 and Tier-3 suppliers facing strict OEM delivery schedules and rejection penalties from major auto manufacturers.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Activity className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">High-Rejection Plants</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Manufacturing units suffering from material rejection rates exceeding 3% and incurring heavy rework costs that destroy job margins.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Shield className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">ISO / IATF Preparing Units</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Factories preparing for quality audits and tier-1 vendor approvals needing formal SOPs and calibrated quality control systems.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Layers className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Capacity-Constrained Operations</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Plant heads who believe they need to purchase expensive new CNC machines when existing equipment is running at only 55% OEE.
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
              Our operational consulting engagement is executed directly on your shop floor in 4 structured phases.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. On-Site Process Diagnostic</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We conduct physical time-and-motion studies, measure machine cycle times, analyze scrap bins, and map current material movement lines.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-5</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Lean Blueprint & SOP Drafting</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We re-layout line balance workflows, eliminate wasted worker motion, and write bilingual visual SOPs with input from floor supervisors.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 6-8</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Shop-Floor Training & Pilot Rollout</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We train operators and supervisors, roll out new SOPs on a pilot production line, test setup time reduction (SMED), and measure initial gains.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Institutionalization & OEE Logs</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We expand the workflow across all plant lines, establish daily shift huddles, and track monthly shop-floor productivity gains.
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
              Honest, measurable shop-floor efficiency gains achieved without purchasing new machinery.
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
                  <span><strong>15-25% Throughput Increase:</strong> Produce more finished units per shift by eliminating setup delays and line imbalance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Scrap & Rejection Reduction:</strong> Systematic 5S and defect logging cut raw material waste and rework costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Reduced Unplanned Downtime:</strong> Total productive maintenance schedules keep critical machines operational.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Improved On-Time Delivery:</strong> Predictable shop-floor lead times allow you to meet OEM delivery deadlines consistently.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  An auto component machining unit in Tamil Nadu streamlined machine setup routines and implemented visual SOPs, boosting daily output by 20% while reducing scrap waste significantly.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of a manufacturing shop floor efficiency improvement]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Improving Operational Efficiency in Indian MSME Manufacturing Units</h4>
            </div>
            <Link 
              to="/blog/improve-operational-efficiency-msme-india" 
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
              Common questions plant owners ask about operational efficiency consulting.
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
            Ready to eliminate shop-floor waste and boost plant throughput?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Schedule a free consultation with Anand Rengasamy. We will assess your plant operations and share practical Lean strategies to lower per-unit manufacturing costs.
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
