import React from 'react';
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import { BookOpen, CheckCircle2, ArrowRight, HelpCircle, ChevronRight, Award, Users, UserCheck, Briefcase } from 'lucide-react';
import { SEO } from '../../components/SEO';

export const TrainingDevelopmentPage: React.FC = () => {
  const pageFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should an Indian MSME invest in formal employee training programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structured training transforms passive employees into proactive, accountable team members. It reduces operational errors on the shop floor, increases sales lead conversion rates, improves customer retention, and reduces costly staff turnover."
        }
      },
      {
        "@type": "Question",
        "name": "Are training programs conducted in regional languages like Tamil?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Workshops for shop-floor operators, sales representatives, and field staff are delivered in fluent Tamil or English, ensuring complete comprehension, high engagement, and enthusiastic practical adoption."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure employees actually apply training concepts on the job after workshops finish?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We incorporate post-training action plans, weekly manager check-in templates, and practical skill verification drills. Department heads receive tracking scorecards to measure on-the-job application over 30 to 60 days."
        }
      },
      {
        "@type": "Question",
        "name": "Can training programs be customized for shop-floor workers vs corporate sales teams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We offer tailored modules ranging from technical 5S discipline and safety protocols for factory workers to consultative B2B selling and negotiation masterclasses for corporate account executives."
        }
      },
      {
        "@type": "Question",
        "name": "How many employees have been trained by Anand Rengasamy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over his 30-year career, principal consultant Anand Rengasamy has trained over 4,000 professionals across automotive, engineering, agricultural equipment, trade distribution, and corporate service sectors across India."
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
      { "@type": "ListItem", "position": 3, "name": "Training & Development", "item": "https://analyticsspire.com/services/training-and-development" }
    ]
  };

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title="MSME Employee Training Programmes India | Analytics Spire"
        description="Dynamic MSME employee training programmes in India. Upskill technical, sales, and leadership teams for operational excellence. Schedule a team workshop."
        url="https://analyticsspire.com/services/training-and-development"
        schemaType="Service"
        additionalSchemas={[pageFaqSchema, breadcrumbSchema]}
      />

      {/* Hero / Header Section */}
      <section className="relative pt-32 pb-20 border-b border-gray-900 bg-gradient-to-b from-gray-950 via-black to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-400 font-bold mb-6">
            <RouterLink to="/" className="hover:text-white transition">Home</RouterLink>
            <ChevronRight size={12} className="text-gray-600" />
            <RouterLink to="/services" className="hover:text-white transition">Services</RouterLink>
            <ChevronRight size={12} className="text-gray-600" />
            <span className="text-gray-300">Training & Development</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="bg-brand-950/80 border border-brand-800/60 text-brand-400 text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4">
                Workforce Capability & Leadership Masterclasses
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
                MSME employee training programmes in India to upskill teams for sustainable growth
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed border-l-2 border-brand-500 pl-6 mb-8">
                An ambitious business strategy is only as effective as the team executing it every morning. Many Indian MSME owners struggle with low employee productivity, high staff turnover, middle-management skill gaps, and reluctance to adopt modern digital tools. Over the past 30 years, Anand Rengasamy has trained over 4,000 professionals across India. Analytics Spire delivers practical, domain-specific MSME employee training programmes in India covering B2B sales techniques, supervisory leadership, technical shop-floor discipline, customer communication, and digital tool adoption designed specifically for small business work cultures.
              </p>
              <div className="flex flex-wrap gap-4">
                <RouterLink
                  to="/contact"
                  className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-3.5 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] flex items-center gap-2 text-sm uppercase tracking-wide"
                >
                  Book Free Consultation <ArrowRight size={16} />
                </RouterLink>
                <a
                  href="#included"
                  className="bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold px-6 py-3.5 rounded-lg transition text-sm"
                >
                  Explore Deliverables
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-gray-900/90 border border-gray-800 p-8 rounded-xl shadow-2xl">
              <BookOpen className="w-12 h-12 text-brand-500 mb-4" />
              <h2 className="text-xl font-bold text-white mb-2">Key Highlights</h2>
              <ul className="space-y-3 text-sm text-gray-300 border-t border-gray-800 pt-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>4,000+ Professionals Trained Across India</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Tamil & English Bilingual Delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>B2B Consultative Sales & Negotiation Workshops</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-brand-400 mt-0.5 flex-shrink-0" />
                  <span>Middle Management Leadership Modules</span>
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
              Our employee training programs combine energetic classroom sessions, practical role-playing drills, and post-workshop implementation scorecards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">01</div>
              <h3 className="text-xl font-bold text-white mb-3">Training Needs Assessment (TNA) & Skill Audit</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We evaluate your workforce's current skill baselines through management interviews, job observation, and performance gap analysis to design hyper-relevant workshop modules.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">02</div>
              <h3 className="text-xl font-bold text-white mb-3">Middle Management & Supervisory Leadership</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We train shift supervisors, floor managers, and team leads in delegation skills, conflict resolution, shift planning, daily performance review huddles, and team accountability.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">03</div>
              <h3 className="text-xl font-bold text-white mb-3">B2B Consultative Sales & Tele-Calling Masterclasses</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Upskill your sales team in consultative selling, cold call objection handling, value proposition presentation, follow-up discipline, and margin negotiation techniques.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">04</div>
              <h3 className="text-xl font-bold text-white mb-3">Technical & Quality Management Modules</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Train shop-floor operators in 5S workplace organization, safety protocols, preventive maintenance routines, defect identification, and visual SOP compliance.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">05</div>
              <h3 className="text-xl font-bold text-white mb-3">Soft Skills, Communication & Digital Literacy</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Enhance workplace communication, customer service etiquette, email responsiveness, and digital tool adoption (CRM logging, WhatsApp Business, cloud spreadsheets).
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800/80 hover:border-brand-500/50 transition">
              <div className="bg-brand-950/80 text-brand-400 font-mono text-sm font-bold w-8 h-8 rounded flex items-center justify-center mb-4">06</div>
              <h3 className="text-xl font-bold text-white mb-3">Post-Training Implementation Scorecards</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We equip managers with weekly evaluation templates and skill verification scorecards to monitor post-workshop application and sustain behavioral change over time.
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
                Designed for founders, plant managers, and HR heads of growing Indian small and medium enterprises who recognize that company growth is limited by workforce capability.
              </p>
              <div className="p-6 bg-gray-900 rounded-lg border border-gray-800">
                <h3 className="text-brand-400 font-bold mb-2">Typical Business Profile:</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Workforce Size: 10 to 200 employees
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Training Formats: On-site workshops, outbound sessions, interactive webinars
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                    Sectors: Automotive, engineering, agriculture, wholesale distribution, healthcare, IT & professional services
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Users className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">B2B Sales Teams</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Sales representatives who struggle with cold prospect calls, handling price objections, or closing deals without offering steep discounts.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Briefcase className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Plant Supervisors</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Shop-floor supervisors promoted from worker roles who need formal leadership training to manage shift discipline, worker attendance, and safety.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <UserCheck className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Customer Service & Support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Client support executives needing refined communication etiquette, professional conflict handling, and prompt ticket resolution protocols.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <Award className="w-8 h-8 text-brand-500 mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Rapidly Expanding Teams</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Enterprises onboarding 15+ new employees who need standardized orientation masterclasses on company values, processes, and tools.
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
              Our employee training delivery model is structured across 4 goal-oriented phases.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 1-2</span>
              <h3 className="text-xl font-bold text-white mb-3">1. Training Needs Diagnostic</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We interview business leaders and department heads to pinpoint performance bottlenecks caused by skill deficits or communication gaps.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 3-4</span>
              <h3 className="text-xl font-bold text-white mb-3">2. Custom Curriculum Design</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We build interactive workshop modules with case studies, role-playing scenarios, and practical exercises tailored to your industry.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Weeks 5-6</span>
              <h3 className="text-xl font-bold text-white mb-3">3. Workshop Delivery</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We conduct energetic, high-impact training workshops on-site or online in fluent Tamil or English with 100% participant involvement.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-1">Ongoing</span>
              <h3 className="text-xl font-bold text-white mb-3">4. Evaluation & Mentoring</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We deploy post-training implementation scorecards and conduct follow-up review sessions to verify long-term behavioral change.
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
              Honest, visible workplace productivity and team accountability improvements.
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
                  <span><strong>Higher Sales Conversion Rates:</strong> Trained B2B sales callers handle objections effectively and convert more leads into orders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Reduced Shop-Floor Errors:</strong> Technical and 5S training reduces raw material waste and machinery breakdown instances.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Empowered Middle Management:</strong> Shift supervisors take active ownership of daily shift targets instead of escalating every issue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2"></span>
                  <span><strong>Lower Employee Turnover:</strong> Investing in structured skill development boosts employee morale and retention rates.</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-brand-400 uppercase tracking-widest block mb-2">Real-World Case Example</span>
                <h3 className="text-xl font-bold text-white mb-4">Client Impact Highlight</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  By conducting B2B sales masterclasses and supervisory leadership workshops, a South Indian agricultural equipment brand upskilled 40+ sales executives, increasing quarterly dealer orders.
                </p>
                <div className="p-4 bg-black/60 rounded border border-gray-800 text-xs text-brand-300 font-mono">
                  [ANAND: add a real example here of an MSME workforce training program outcome]
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-950 p-6 rounded-lg border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest block">Recommended Reading</span>
              <h4 className="text-white font-bold text-base mt-1">Why Employee Training is the Key to Scaling Indian MSMEs</h4>
            </div>
            <RouterLink 
              to="/blog/employee-training-msme-india" 
              className="text-brand-400 hover:text-white font-bold text-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              Read Article <ArrowRight size={14} />
            </RouterLink>
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
              Common questions business owners ask about MSME employee training programs.
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
            Ready to upskill your workforce and build accountable team leaders?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-base">
            Book a free 1-on-1 strategic consultation with Anand Rengasamy. We will assess your team's training needs and design a customized workshop curriculum for your enterprise.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <RouterLink
              to="/contact"
              className="bg-brand-600 hover:bg-brand-500 text-white font-bold px-8 py-4 rounded-lg transition duration-300 shadow-[0_0_20px_rgba(2,132,199,0.4)] text-sm uppercase tracking-wide flex items-center gap-2"
            >
              Schedule Consultation <ArrowRight size={16} />
            </RouterLink>
            <RouterLink
              to="/services"
              className="bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 font-semibold px-6 py-4 rounded-lg transition text-sm"
            >
              View All Services
            </RouterLink>
          </div>
        </div>
      </section>
    </div>
  );
};
