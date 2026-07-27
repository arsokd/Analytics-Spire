import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, DollarSign, CreditCard, ShieldAlert, PieChart } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const FinanceManagementPage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does finance management consulting differ from traditional chartered accountancy (CA) services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Traditional CA services focus on statutory compliance, tax filing, and auditing past accounting records. Our finance management consulting focuses on forward-looking cash flow forecasting, working capital optimization, debtor collections, and strategic growth budgeting."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 13-week rolling cash flow forecast, and why is it vital for MSMEs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 13-week rolling cash flow model projects expected cash inflows and outflows week by week over a full quarter. It allows MSME owners to spot cash shortfalls 4 to 6 weeks in advance and take proactive action before payroll or vendor stress hits."
        }
      },
      {
        "@type": "Question",
        "name": "How can small businesses enforce strict payment terms with powerful enterprise clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement structured credit limit policies, milestone billing agreements, early payment discounts, automated WhatsApp/email invoice reminders, and formal escalation routines that shorten Days Sales Outstanding (DSO) without alienating key accounts."
        }
      },
      {
        "@type": "Question",
        "name": "Can financial management consulting help us prepare for bank loan approvals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build bankable financial models, projected balance sheets, debt service coverage ratio (DSCR) calculations, and CMA data formats required by public and private banks for working capital and term loan syndication."
        }
      },
      {
        "@type": "Question",
        "name": "How often should an MSME founder review financial management dashboards?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Founders should inspect weekly cash flow summaries every Monday morning and conduct a detailed monthly budget variance review with key department heads to keep overheads aligned with revenue."
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
      { "@type": "ListItem", "position": 3, "name": "Finance Management", "item": "https://analyticsspire.com/services/finance-management" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Finance Management Consultant Small Business India | Analytics Spire"
        description="Expert finance management consultant for small business in India. Master cash flow, budgeting, working capital, and GST compliance. Request a consultation."
        url="https://analyticsspire.com/services/finance-management"
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
            <span className="text-gray-300">Finance Management</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                Cash Flow, Working Capital & Financial Strategy
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Finance management consultant for small business in India to master cash flow
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                A profitable business on paper can easily go bankrupt in reality if cash flow is choked by delayed customer receivables, unorganized GST credit reconciliation, and sudden working capital shortfalls. Indian small business owners frequently confuse profit with cash in the bank. As a hands-on finance management consultant for small business India, Analytics Spire establishes rigorous 13-week cash flow forecasting models, working capital management strategies, credit risk policies, and automated financial dashboards that give founders total clarity over their financial runway and debt capacity.
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
              <TrendingUp className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>13-Week Rolling Cash Flow & Liquidity Model</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Debtor Aging & Working Capital Audit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Product-Wise Break-Even & Contribution Margins</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Bankable CMA Data & Loan Syndication Prep</span>
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
              Our financial management advisory delivers forward-looking financial tools and governance frameworks tailored to Indian credit cycles and tax structures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">13-Week Rolling Cash Flow Forecast Model</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build dynamic cash flow projection models in Excel/Google Sheets synced with Tally data, providing clear week-by-week visibility over cash receipts, vendor payables, payroll commitments, and statutory tax obligations.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Working Capital & Debtor Collections Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We analyze your accounts receivable aging schedules (30-60-90+ days), establish customer credit limit caps, and implement structured WhatsApp/email invoice collection reminder routines to reduce overdue debts.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Product-Wise Break-Even & Margin Analysis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We calculate true contribution margins across your product catalog after factoring in raw material costs, freight, wastage, credit period interest, and indirect overheads to determine real product break-even points.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Annual Budgeting & Variance Tracking</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We collaborate with department heads to establish realistic annual budgets, implementing monthly variance reviews to control administrative expenses, discretionary spend, and unbudgeted capital outlays.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Interactive Financial Dashboards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We connect Tally ERP or Zoho Books data to visual Google Looker Studio dashboards displaying gross profit margins, working capital turnover, cash runway, and net profit ratios on your smartphone.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Bank Loan Syndication & CMA Data Preparation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We prepare bankable financial projections, Credit Monitoring Arrangement (CMA) data formats, and Debt Service Coverage Ratio (DSCR) documentation to secure CC/OD limits and bank term loans on optimal terms.
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
                Designed for founders and managing directors of Indian MSMEs who want to transition from reactive cash crisis management to disciplined financial governance.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Annual Turnover: ₹1 Crore to ₹40 Crore
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Credit Cycle: 30 to 120 days
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: B2B manufacturing, trade distribution, construction supply, logistics, healthcare services
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <DollarSign className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Cash-Strained Enterprises</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Companies showing solid paper profits in annual P&L statements but struggling to meet month-end supplier payables and staff salary obligations.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <CreditCard className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">High Debtor Accumulation</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Traders and manufacturers with over 40% of their annual turnover trapped in overdue receivables beyond 90 days.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <ShieldAlert className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">High CC/OD Limit Interest</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Business owners paying exorbitant monthly bank interest on Cash Credit (CC) / Overdraft (OD) limits due to unorganized capital utilization.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <PieChart className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Bank Loan Seekers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Founders planning capacity expansion or new factory setups needing bankable CMA data and structured financial projections for loan syndication.
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
              Our financial management consulting engagement spans 6 to 8 weeks for core setup, followed by ongoing advisory support.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Financial Health Diagnostic</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We audit historical balance sheets, debtor aging schedules, bank CC/OD statements, vendor payment terms, and fixed cost structures.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-4</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Cash Flow Model Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build a customized 13-week rolling cash flow model in Excel/Google Sheets synced with Tally, mapping weekly receipts vs commitments.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 5-6</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Debtor & Budgeting Systems</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We deploy automated invoice collection reminders, set customer credit limit caps, and institute departmental operating budgets.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Monthly Financial Advisory</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We meet monthly with founder Anand Rengasamy to review budget vs actual variances, optimize bank limits, and guide capital investments.
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
              Honest, quantifiable financial predictability and cash flow control.
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
                  <span><strong>13-Week Cash Flow Visibility:</strong> Predict exact cash availability 90 days in advance, eliminating payroll anxiety.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>20-30% Reduction in Overdue Receivables:</strong> Structured credit control shortens debtor collection cycles significantly.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Lower Interest Overhead:</strong> Optimized working capital management reduces reliance on costly short-term debt and CC limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Disciplined Overhead Control:</strong> Monthly budget variance tracking prevents margin erosion from unbudgeted expenses.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  By implementing a 13-week cash flow model and automated debtor collection reminders, a Tamil Nadu wholesale distributor reduced overdue receivables beyond 60 days, unlocking vital liquidity.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of a cash flow turnaround for an Indian MSME]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Cash Flow Management Strategies for Small Businesses in India</h4>
            </div>
            <Link 
              to="/blog/cash-flow-management-small-business-india" 
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
              Common questions Indian business owners ask about financial management consulting.
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
            Ready to master cash flow and unlock working capital?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 strategic consultation with Anand Rengasamy. We will assess your financial structure and build a 13-week cash flow roadmap for your business.
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
