import React from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Compass, LineChart, Globe2, BarChart3 } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const MarketEstimationPage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is formal market size estimation essential before an MSME expands in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Committing capital to new factory machinery, regional branch offices, or inventory without empirical demand validation leads to heavy financial losses. Market size estimation quantifies TAM, SAM, and SOM to ensure customer demand truly justifies capital expenditure."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between TAM, SAM, and SOM in Indian market research?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Total Addressable Market (TAM) is the overall market demand for a product category in India. Serviceable Addressable Market (SAM) is the segment within your reach geographically or operationally. Serviceable Obtainable Market (SOM) is the realistic market share you can capture over 1 to 3 years."
        }
      },
      {
        "@type": "Question",
        "name": "How do you collect authentic consumer behaviour insights from regional Indian markets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We combine quantitative online/telephonic surveys with primary ground-level field interviews, dealer visits, and mystery shopping across target regional centers in Tamil Nadu and South India, capturing authentic local buying preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Can market estimation studies assist in securing bank loans or equity investments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Banks, financial institutions, and equity investors require independent market feasibility reports detailing addressable market size, competitor dynamics, and projected market share before approving project funding."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a comprehensive market estimation and consumer research project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard market size estimation and buyer behavior research project spans 6 to 8 weeks from research design to final executive presentation."
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
      { "@type": "ListItem", "position": 3, "name": "Market Estimation & Consumer Behaviour", "item": "https://analyticsspire.com/services/market-estimation-consumer-behaviour" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Market Size Estimation India Consumer Research | Analytics Spire"
        description="Reliable market size estimation in India and consumer research for MSMEs. Validate expansion, evaluate demand, and mitigate market entry risks. Book a call."
        url="https://analyticsspire.com/services/market-estimation-consumer-behaviour"
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
            <span className="text-gray-300">Market Estimation & Consumer Behaviour</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                Market Intelligence & Demand Validation Research
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Market size estimation in India and consumer research for confident MSME expansion
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                Launching a new product line, expanding into a new geographic territory, or setting up a new factory unit without empirical market validation is one of the fastest ways for an MSME to burn capital. Many business owners rely on anecdotal feedback or surface-level competitor observation. Analytics Spire provides rigorous market size estimation in India and consumer research tailored specifically for growing small and medium enterprises. We combine top-down addressable market calculations (TAM/SAM/SOM) with ground-level field interviews, buyer surveys, and price elasticity studies to give you verified market clarity before you invest capital.
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
              <Search className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>TAM, SAM & SOM Quantitative Market Modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Primary Ground-Level Field Buyer Surveys</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Competitor Pricing & Channel Benchmarking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Econometric Analysis (IBM SPSS & Modeler)</span>
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
              Our market research deliverable provides empirical market intelligence that eliminates guesswork and de-risks expansion decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">TAM, SAM & SOM Market Size Estimation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We calculate your Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and realistic Serviceable Obtainable Market (SOM) in Indian Rupee (INR Crores) terms using statistical economic modeling.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Primary Buyer Survey & Field Research</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We design and execute structured buyer surveys across target consumer segments and B2B purchasing managers, gathering primary data on product preferences, brand awareness, and purchasing criteria.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Competitor Pricing & Channel Benchmarking</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We audit competitor product offerings, price elasticity, dealer margin structures, and distribution channel penetration across major trade hubs in Tamil Nadu and South India.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Consumer Buying Behaviour & Preference Profiling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze key drivers behind regional purchasing decisions, unmapped pain points with incumbent brands, and psychological price thresholds for B2C and B2B buyers.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Statistical Econometric Analysis (IBM SPSS)</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We process raw market survey data using IBM SPSS and predictive modeling tools to extract statistically significant consumer trends, market segment correlations, and demand forecast curves.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Go-To-Market (GTM) Feasibility & Risk Blueprint</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We synthesize findings into a clear executive briefing outlining market opportunity size, recommended pricing, distribution strategy, and specific risk mitigation steps before capital rollout.
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
                Designed for founders, investor-backed enterprises, agri-tech firms, and manufacturing business owners planning significant capital deployment in new markets across India.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Expansion Capital: ₹50 Lakh to ₹20 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Scope: Regional South India & All-India Market Feasibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: FMCG brands, agri-processing, industrial equipment, healthcare products, retail chains
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Compass className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">New Product Line Inventors</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enterprises developing innovative consumer or commercial products needing price elasticity and market demand validation before manufacturing setup.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Globe2 className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Geographic Expansion Seekers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Established regional brands in Tamil Nadu evaluating expansion feasibility in neighboring states like Karnataka, Kerala, or Telangana.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <LineChart className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Investor & Bank Pitching Firms</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  MSMEs preparing formal project reports for bank debt syndication or private equity investments requiring third-party market size reports.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <BarChart3 className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Distributor Network Builders</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Manufacturers needing deep competitor trade margin analysis before establishing dealer discount structures in Tier-2/Tier-3 cities.
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
              Our market size estimation and research project is executed in 4 thorough phases over 6 to 8 weeks.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Research Framing & Sampling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We define core research objectives, build target demographic survey instruments, and establish secondary data sources (industry census, export-import data).
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-5</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Primary Field Data Collection</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We conduct structured buyer surveys, dealer interviews, and field research across target regional markets to collect ground-level customer feedback.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 6-7</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Econometric Data Modeling</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze raw data using IBM SPSS to calculate TAM/SAM/SOM boundaries, price sensitivity curves, and market share capture probabilities.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Week 8</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Executive Briefing & GTM Plan</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We present a comprehensive market intelligence dossier with clear Go-To-Market recommendations and risk mitigation guidelines.
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
              Empirical market insights that protect your capital and guide successful market entry.
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
                  <span><strong>Empirical Market Validation:</strong> Know exact addressable market size in INR Crores before committing factory capital.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Optimized Product Pricing:</strong> Price elasticity models reveal sweet-spot price points that maximize gross margin and adoption.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Competitor Vulnerability Insights:</strong> Identify specific product quality and service gaps in incumbent market leaders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Bankable Feasibility Dossier:</strong> Accelerate bank loan approvals and investor funding with independent market reports.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  By conducting a ground-level market size estimation and dealer pricing survey across Tier-2 districts in South India, an agri-processing enterprise validated demand before committing capital to a new processing facility.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of a market research feasibility study outcome]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Market Size Estimation & Consumer Behaviour Analysis for Indian Businesses</h4>
            </div>
            <Link 
              to="/blog/market-size-estimation-consumer-behaviour-india" 
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
              Common questions Indian business owners ask about market size estimation and research.
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
            Ready to validate your expansion strategy with real market intelligence?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 strategic consultation with Anand Rengasamy. We will assess your market questions and design a custom research methodology for your expansion.
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
