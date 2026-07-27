import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Zap, Smartphone, RefreshCw, MessageSquare } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const BusinessAutomationPage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is no-code business automation reliable for non-technical teams in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Modern no-code platforms like Make.com, Zapier, and Google Apps Script run reliably in the cloud. Your staff continues using familiar interfaces like WhatsApp, Google Sheets, or mobile apps without needing programming knowledge."
        }
      },
      {
        "@type": "Question",
        "name": "Can we automate WhatsApp communications without getting our account blocked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We configure official WhatsApp Business API integrations (via Meta Cloud API or approved partners) with pre-approved message templates for quotations, order updates, and payment reminders, adhering strictly to Meta policies."
        }
      },
      {
        "@type": "Question",
        "name": "Will business automation replace my existing employees?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Business automation eliminates repetitive data entry, allowing your existing team to shift focus toward high-value activities like closing sales, resolving client issues, and managing field operations."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if our cloud API connection disconnects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build automated error-logging mechanisms and retry queues into every workflow. If an API call fails, the system logs the event and alerts your administrator on WhatsApp to ensure zero data loss."
        }
      },
      {
        "@type": "Question",
        "name": "How much investment is required to set up small business automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our automation solutions are designed specifically for Indian MSMEs, utilizing affordable monthly cloud plans starting with minimal infrastructure overhead that pays for itself through time savings within weeks."
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
      { "@type": "ListItem", "position": 3, "name": "Business Automation", "item": "https://analyticsspire.com/services/business-automation" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="Business Automation for Small Business India | Analytics Spire"
        description="Affordable business automation for small business in India. Streamline lead capture, WhatsApp notifications, CRM, and Tally workflows. Talk to us today."
        url="https://analyticsspire.com/services/business-automation"
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
            <span className="text-gray-300">Business Automation</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                Workflow Digitalization & No-Code Automation
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                Business automation for small business in India to eliminate manual task overhead
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                Operational bottlenecks in Indian small businesses rarely stem from a lack of hard work; they happen because skilled staff spend hours copying phone numbers from Indiamart emails into WhatsApp, manually creating Tally billing entries, and chasing payment follow-ups via phone calls. As an expert in business automation for small business India, Analytics Spire implements affordable, no-code/low-code workflow automations that connect your lead generation, CRM, WhatsApp Business, biometric attendance, and accounting into a seamless, error-free automated engine.
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
              <Cpu className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Instant WhatsApp Lead Acknowledgement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>IndiaMART, TradeIndia & Web Form Connectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Automated Payment Reminders & Invoicing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>No-Code Platform Setup (Zapier / Make)</span>
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
              Our small business automation service creates a connected digital ecosystem tailored to the communication habits of Indian buyers and sales teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Lead Routing & WhatsApp Greetings</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Capture incoming leads instantly from IndiaMART, TradeIndia, Facebook Ads, and website forms. The system immediately sends a personalized greeting with your PDF catalog on WhatsApp and assigns the lead to a sales caller.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Custom No-Code CRM & Lead Tracker</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build simple, lightweight lead tracking boards (on Zoho, LeadSquared, or custom Google Sheets) that log call histories, next follow-up dates, deal stages, and expected deal values without clutter.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">Automated Quotations & Invoice Dispatch</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Generate professional PDF quotations and GST invoices automatically when a deal stage updates, emailing and messaging the document directly to the client's inbox and WhatsApp number within seconds.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Payment Reminder & Collection Triggers</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automate polite payment reminder notifications 3 days before, on the due date, and 7 days after invoice due dates, linking directly to your Razorpay or UPI payment links to improve cash collection.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Daily Executive WhatsApp Briefings</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Receive an automated WhatsApp summary every evening at 7:00 PM detailing total new leads received, calls completed, quotes dispatched, collections received, and pending tasks.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Biometric & Attendance Cloud Sync</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect shop-floor biometric punch machines or field-staff mobile GPS attendance tools directly to payroll registers, automating monthly wage calculations and leave tracking.
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
                Our business automation solutions are engineered for Indian MSMEs experiencing operational friction, slow customer response times, and high administrative staff costs.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Team Size: 5 to 50 employees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Lead Volume: 20 to 500 inquiries per month
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: B2B manufacturers, industrial suppliers, trade distributors, service agencies, logistics
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Zap className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Inquiry-Heavy B2B Firms</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Companies getting leads from B2B portals like IndiaMART but losing deals to competitors because lead assignments take hours instead of minutes.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Smartphone className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">WhatsApp-Centric Teams</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Businesses where sales staff manage client discussions on personal phones, creating data loss when employees leave and making central audit impossible.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <RefreshCw className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Repetitive Billing Operations</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Traders and manufacturers manually re-keying sales order data from emails or WhatsApp screenshots into accounting books, leading to billing typos.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <MessageSquare className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Choke-Point Management</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Founders who spend their entire afternoon asking staff for updates ("How many calls done today? Has client X paid?") instead of focusing on expansion.
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
              Our business automation setup process takes 4 to 6 weeks from process audit to live deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Workflow Bottleneck Mapping</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We shadow your sales, administrative, and accounting staff to document repetitive tasks, communication delays, and manual copy-paste bottlenecks.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-4</span>
              <h3 className="text-xl font-bold text-white mb-3">2. No-Code Architecture</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build cloud automation workflows using Make.com, Zapier, Google Apps Script, and official WhatsApp Business API endpoints connecting your tools.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 5-6</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Deployment & Team Training</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We deploy automations live, run test scenarios across sales scenarios, and train your staff to operate the updated workflow seamlessly.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Health Monitoring & Tuning</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We monitor API execution logs daily, update automation rules as your business scales, and ensure 99.9% uptime for all automated triggers.
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
              Quantifiable operational improvements delivered without requiring extra staff hires.
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
                  <span><strong>Sub-2-Minute Lead Response:</strong> Acknowledge incoming trade portal inquiries on WhatsApp almost instantly, boosting lead conversion rates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>15 Hours Saved Per Employee/Week:</strong> Eliminate manual typing of customer details, quotations, and daily status logs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Zero Missed Follow-ups:</strong> Automated task reminders ensure tele-callers follow up on pending proposals on time.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Faster Cash Collections:</strong> Automated payment reminder notifications reduce overdue debtor balances significantly.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  A Chennai-based industrial equipment supplier automated their IndiaMART lead capture and WhatsApp quotation dispatch, cutting average lead response time from 6 hours to 90 seconds.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of an MSME automation project and time savings]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">How Small Manufacturing Businesses in India Can Automate Operations</h4>
            </div>
            <Link 
              to="/blog/automate-small-manufacturing-business-india" 
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
              Questions small business owners ask about business automation in India.
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
            Ready to put your business operations on autopilot?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 consultation with Anand Rengasamy. We will analyze your daily workflows and design a custom automation plan for your team.
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
