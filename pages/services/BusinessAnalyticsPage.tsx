import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, FileText, TrendingUp, Users, Target } from 'lucide-react';
import { SEO, serviceSchema, faqSchema } from '../../components/SEO';

export const BusinessAnalyticsPage: React.FC = () => {
  // Page specific FAQ schema
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do we need expensive software or database servers for business analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We leverage your existing data sources—such as Tally ERP, billing software, and Excel registers—and build cloud dashboards on Google Looker Studio or Power BI. There is no need for expensive server hardware or proprietary software licenses."
        }
      },
      {
        "@type": "Question",
        "name": "How does Analytics Spire connect to our existing Tally ERP setup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We configure automated data extractors and ODBC connectors that pull sales, voucher, ledger, and inventory data from Tally Prime or Tally.ERP 9 directly into cloud analytics pipelines without interfering with day-to-day accounting."
        }
      },
      {
        "@type": "Question",
        "name": "Will our confidential financial and sales data remain secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Analytics Spire operates under strict Non-Disclosure Agreements (NDAs). All data pipelines and dashboards are encrypted and hosted on your enterprise Google Cloud or Microsoft tenant, giving you full access control."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can our management team start using the analytics dashboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most MSMEs see their first live executive dashboard operational within 3 to 4 weeks from project kickoff, following our structured data audit and pipeline configuration."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between standard Tally reports and custom business analytics?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard Tally reports show accounting history line by line. Custom business analytics combines sales velocity, customer acquisition costs, branch profitability, and stock movement into visual, interactive charts for proactive decision making."
        }
      }
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://analyticsspire.com" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://analyticsspire.com/services" },
      { "@type": "ListItem", "position": 3, "name": "Business Analytics", "item": "https://analyticsspire.com/services/business-analytics" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Business Analytics Consultant for MSME India | Analytics Spire"
        description="Professional business analytics consultant for MSME India. Transform raw sales, stock, and Tally data into actionable growth dashboards. Book a consult."
        url="https://analyticsspire.com/services/business-analytics"
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
            <span className="text-gray-300">Business Analytics</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                MSME Business Intelligence & Reporting
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Business analytics consulting for Indian MSMEs to drive profitable growth
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                Indian MSME owners often run multi-crore businesses using fragmented spreadsheets, printed Tally vouchers, and gut instincts. Without clear visibility into customer lifetime value, product margin leakage, and regional sales velocity, critical expansion decisions become risky gambles. As a specialized business analytics consultant for MSME India, Analytics Spire transforms unorganized operational and financial data into clean, real-time visual dashboards that help you spot profit leaks, forecast demand accurately, and make confident business decisions.
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
              <BarChart2 className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Real-time Tally & ERP Cloud Integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Product & Branch Margin Profiling</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Interactive Google Looker Studio Dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Led by Anand Rengasamy (30+ yrs experience)</span>
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
              Our business analytics consulting engagement provides a complete end-to-end data transformation, tailored to the operational realities of Indian small and medium enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Comprehensive Data Audit & Pipeline Mapping</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We evaluate your existing accounting software (Tally, Zoho Books), billing registers, inventory spreadsheets, and sales logs to identify data errors, missing entries, and structural bottlenecks.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Interactive Executive Dashboards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build visually engaging, mobile-responsive Looker Studio or Power BI dashboards that display daily sales figures, cash flow status, pending orders, and top-performing SKUs at a single glance.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Customer & Product Profitability Matrix</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze your net contribution margin by product line and customer account. Discover which 20% of products generate 80% of profits and eliminate hidden discounts that drag down margins.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Sales Velocity & Regional Metrics</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Track branch-wise sales performance across districts in Tamil Nadu and South India. Monitor sales rep activity, tele-calling conversions, and order dispatch turnaround times in real time.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Monthly Business Intelligence Review Sessions</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Principal consultant Anand Rengasamy meets with your leadership team every month to review key dashboard trends, interpret variance metrics, and adjust operational strategies for the coming quarter.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition flex flex-col justify-between">
              <div>
                <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
                <h3 className="text-xl font-bold text-white mb-3">Data Hygiene & SOP Documentation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We establish standard operating procedures for your accounting and sales staff so data is entered cleanly every day, eliminating garbage-in-garbage-out reporting issues.
                </p>
              </div>
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
                Our business analytics consulting services are specifically tailored for founders and managing partners of Indian MSMEs who have built a strong operational foundation but now face data opacity as they scale across regions.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Annual Turnover: ₹2 Crore to ₹50 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Team Size: 10 to 100 employees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: Manufacturing, wholesale trade, retail networks, agri-processing, auto components
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Users className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Overwhelmed Founders</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Business owners spending hours every weekend manually piecing together sales figures and bank statements to figure out true cash position and profitability.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Target className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Multi-Branch Enterprises</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Distributors and retailers operating across multiple locations in Tamil Nadu or South India struggling to compare branch efficiency, stock velocity, and credit recovery.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <TrendingUp className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Scaling Manufacturers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Factory owners who want to understand machine-wise, batch-wise, and customer-wise production costs before taking on heavy debt for plant expansion.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <FileText className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Tally-Dependent Teams</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Companies with years of rich transaction records stored inside Tally ERP but lacking visual analytical tools to turn historical data into forward-looking forecasts.
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
              We follow a structured 4-phase analytics implementation model designed to minimize disruption to your daily operations while delivering fast time-to-value.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 relative">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Data Discovery & Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We map your existing data sources, inspect Tally voucher entries, Excel logs, and billing formats, and identify key performance indicators (KPIs) critical to your business model.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 relative">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-4</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Metric Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We engineer data connectors, establish automated ETL (Extract, Transform, Load) pipelines, and design custom Looker Studio dashboards matching your exact executive preferences.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 relative">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 5-6</span>
              <h3 className="text-xl font-bold text-white mb-3">3. User Training & Handover</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We train your management team and department leads to read, filter, and act on visual analytics reports without needing complex database skills.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 relative">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Quarterly Strategy Reviews</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We conduct structured quarterly performance reviews with founder Anand Rengasamy to refine metrics as your business enters new markets or launches product lines.
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
              We focus strictly on realistic operational and financial improvements that directly impact your bottom line.
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
                  <span><strong>80% Reduction in Reporting Time:</strong> Eliminate hours spent manually compiling weekly Excel reports from multiple departments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Immediate Margin Visibility:</strong> Spot negative-margin SKUs or accounts suffering from uncalculated logistics costs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Proactive Credit Control:</strong> Identify overdue accounts before credit limits are breached and receivables turn into bad debt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Demand Forecasting Accuracy:</strong> Plan inventory procurement based on historical regional sales trends rather than guesswork.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  By consolidating multi-branch billing registers into a central Looker Studio analytics dashboard, an Indian wholesale trading enterprise identified severe margin dilution caused by unmonitored transportation allowances across three districts.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of a manufacturing or trading client's analytics transformation outcome]
                </div>
              </div>
            </div>
          </div>

          {/* Related Blog Link */}
          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Business Analytics for MSMEs in India: A Practical Guide</h4>
            </div>
            <Link 
              to="/blog/business-analytics-for-msme-india" 
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
              Common questions Indian MSME owners ask about business analytics consulting.
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
            Ready to transform your business data into profitable decisions?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 strategic consultation with Anand Rengasamy. We will assess your current data setup and show you how business analytics can accelerate your MSME's growth.
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
