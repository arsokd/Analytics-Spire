import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Clock, BookOpen, ChevronRight } from 'lucide-react';
import { SEO } from '../components/SEO';

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  summary: string;
  content: React.ReactNode;
  seoTitle: string;
  seoDesc: string;
  additionalSchemas?: any[];
}

export const BlogPage: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSlug = slug || searchParams.get('post');

  const blogPosts: BlogPost[] = [
    {
      title: "No-Code Automation for Small Manufacturing Businesses in India: A Practical Starter Guide",
      slug: "no-code-automation-manufacturing-msme-india",
      date: "July 20, 2026",
      readTime: "7 min read",
      category: "Automation",
      summary: "A practical, no-jargon guide to no-code automation for small manufacturing businesses in India. Automate attendance, stock, orders and reports — no coding needed.",
      seoTitle: "No-Code Automation for Small Manufacturing MSMEs in India",
      seoDesc: "A practical, no-jargon guide to no-code automation for small manufacturing businesses in India. Automate attendance, stock, orders and reports — no coding needed.",
      additionalSchemas: [
        {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "No-Code Automation for Small Manufacturing Businesses in India: A Practical Starter Guide",
          "author": {
            "@type": "Person",
            "name": "Anand Rengasamy"
          },
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
          "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
          "publisher": {
            "@type": "Organization",
            "name": "Analytics Spire",
            "logo": {
              "@type": "ImageObject",
              "url": "https://ui-avatars.com/api/?name=Analytics+Spire&background=0284c7&color=fff&bold=true&size=512"
            }
          }
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do I need any coding or technical skills to use no-code automation?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No. These tools are built for non-technical business owners. If you can use WhatsApp and a spreadsheet, you can start."
              }
            },
            {
              "@type": "Question",
              "name": "How much does it cost to automate a small manufacturing business?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "You can begin at zero cost using free tools like Google Sheets and WhatsApp Business, and only pay for advanced apps or automation as your needs grow. It scales with you."
              }
            },
            {
              "@type": "Question",
              "name": "Will automation replace my workers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "No — it removes repetitive data-entry and chasing, so your people spend time on higher-value work like production quality and customer service."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to see results?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Most owners see time savings within the first two to four weeks of automating a single process like attendance or stock tracking."
              }
            }
          ]
        }
      ],
      content: (
        <article className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80" 
            alt="Small manufacturing MSME owner in India using a no-code automation app on a smartphone." 
            className="w-full h-72 object-cover rounded-xl my-6 border border-gray-800" 
          />
          <p>
            If you run a small manufacturing unit in India, your day probably involves an attendance register at the gate, stock counts scribbled in a notebook, order enquiries buried in WhatsApp, and someone re-typing everything into Tally at month-end. It works — but it eats hours, invites mistakes, and keeps you doing data-entry instead of growing the business. This is exactly where no-code automation for a small business in India changes the game: you get software to do the repetitive work for you, without hiring a developer or writing a single line of code.
          </p>
          <p>
            This guide explains, in plain language, what no-code automation is, which parts of a manufacturing MSME you should automate first, the affordable tools that work well in the Indian context, and a simple step-by-step way to begin.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What "no-code automation" actually means</h2>
          <p>
            "No-code" tools let you build apps and automations by clicking, dragging, and filling in forms — the way you'd build a slide or a spreadsheet — instead of programming. "Automation" simply means the software does a task automatically once you set it up: for example, the moment a worker marks attendance on a phone, it updates the payroll sheet on its own.
          </p>
          <p>
            Put together, no-code automation lets a non-technical business owner replace manual registers, repeated data entry, and follow-up chasing with simple systems that run themselves. You stay in control; the software just removes the drudgery.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Why it matters especially for Indian manufacturing MSMEs</h2>
          <p>
            Three reasons make this a strong fit for small manufacturers in India:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Cost.</strong> Most of these tools have free or low-cost plans, so you can start without a big investment — important when margins are tight.</li>
            <li><strong>Mobile-first.</strong> Your supervisors and workers already use smartphones and WhatsApp. No-code apps run on the same phones, so adoption is easy.</li>
            <li><strong>Less dependency on one person.</strong> When your stock, orders, and attendance live in a shared system instead of one manager's notebook, the business keeps running even when someone is on leave.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The 5 processes to automate first</h2>
          <p>
            You don't need to automate everything at once. Start with the tasks that waste the most time or cause the most errors.
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">1. Attendance and payroll</h3>
          <p>
            Replace the paper register with a simple mobile check-in. Even a free Google Form or a low-cost attendance app can record who came in, calculate hours and overtime, and feed a payroll sheet automatically — cutting hours of month-end calculation and reducing disputes.
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">2. Stock and inventory tracking</h3>
          <p>
            Move your stock notebook into a shared sheet or a simple inventory app. You can set it to flag when raw material drops below a reorder level, so you never halt production because something ran out unnoticed.
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">3. Order and lead management on WhatsApp</h3>
          <p>
            Most MSME enquiries come through WhatsApp. WhatsApp Business (free) lets you set up quick replies, catalogues, and labels so no enquiry slips through the cracks. Connected to a simple sheet, every lead gets logged and followed up.
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">4. Quotations and invoices</h3>
          <p>
            Instead of retyping the same quotation formats, use templates that auto-fill customer and product details, and connect the final figures into Tally so your accounts stay updated without double entry.
          </p>

          <h3 className="text-xl font-bold text-white mt-6 mb-3">5. Daily production and job tracking</h3>
          <p>
            Give supervisors a simple form or app to log daily production, machine downtime, or job status. That data rolls up into a live dashboard, so you can see your unit's performance from your phone instead of waiting for end-of-day reports.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Affordable no-code tools that work well in India</h2>
          <p>
            You can run most of the above with a small, practical toolkit:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Google Sheets + Google Forms</strong> — free, familiar, and powerful for tracking and simple automation.</li>
            <li><strong>WhatsApp Business</strong> — free; the front door for most MSME customer communication.</li>
            <li><strong>Zoho</strong> — an Indian software suite with affordable CRM, inventory, and forms, built with local businesses in mind.</li>
            <li><strong>No-code app builders (such as Glide or AppSheet)</strong> — turn a spreadsheet into a mobile app your team can use, with free or low-cost tiers.</li>
            <li><strong>Automation connectors (such as Make, Zapier, or n8n)</strong> — the "glue" that passes information between your tools automatically.</li>
            <li><strong>Tally</strong> — keep it as your accounts backbone, and connect your automations to it rather than replacing it.</li>
          </ul>
          <p>
            Start with what's free (Sheets and WhatsApp Business), and add paid tools only when a specific need justifies the cost.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to get started — a simple 5-step plan</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-400">
            <li><strong>Pick ONE painful process.</strong> Choose the task that wastes the most time this month — often attendance or stock.</li>
            <li><strong>Map how it works today.</strong> Write down each step and who does it. This shows you exactly what to automate.</li>
            <li><strong>Choose one simple tool.</strong> Match the tool to the task; don't over-buy. Free first.</li>
            <li><strong>Run a small pilot.</strong> Test it with one team or one product line for two weeks before rolling it out.</li>
            <li><strong>Train your team and expand.</strong> Once it's working and people are comfortable, automate the next process.</li>
          </ol>
          <p>
            Small steps beat a big-bang overhaul. Each win frees up time and builds your team's confidence for the next one.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Common mistakes to avoid</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Automating a broken process.</strong> Fix a messy workflow first, then automate it — otherwise you just speed up the mess.</li>
            <li><strong>Buying too many tools at once.</strong> Start lean; add tools only when a real need appears.</li>
            <li><strong>Skipping team training.</strong> The best system fails if your people aren't shown how to use it. Keep it simple and support them.</li>
            <li><strong>No single owner.</strong> Assign one person to own each automation so it's maintained and improved.</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Frequently asked questions</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-white">Do I need any coding or technical skills to use no-code automation?</p>
              <p className="text-gray-400">No. These tools are built for non-technical business owners. If you can use WhatsApp and a spreadsheet, you can start.</p>
            </div>
            <div>
              <p className="font-semibold text-white">How much does it cost to automate a small manufacturing business?</p>
              <p className="text-gray-400">You can begin at zero cost using free tools like Google Sheets and WhatsApp Business, and only pay for advanced apps or automation as your needs grow. It scales with you.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Will automation replace my workers?</p>
              <p className="text-gray-400">No — it removes repetitive data-entry and chasing, so your people spend time on higher-value work like production quality and customer service.</p>
            </div>
            <div>
              <p className="font-semibold text-white">How long does it take to see results?</p>
              <p className="text-gray-400">Most owners see time savings within the first two to four weeks of automating a single process like attendance or stock tracking.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Ready to automate your manufacturing unit?</h2>
          <p>
            No-code automation lets a small manufacturer in India cut manual work, reduce errors, and free up hours — starting with tools you may already have. The key is to begin with one process and grow from there.
          </p>
          <p>
            At Analytics Spire, we help Indian MSMEs identify exactly where automation will save the most time and money, and set it up for you end to end. <Link to="/contact" className="text-brand-400 underline hover:text-white transition">Book a free consultation</Link> to map your first automation, or <Link to="/services" className="text-brand-400 underline hover:text-white transition">explore our services</Link> to see how we work.
          </p>
        </article>
      )
    },
    {
      title: "How Indian MSMEs Can Leverage Intelligent CRM Systems to Double Lead Conversions",
      slug: "crm-systems-lead-conversion",
      date: "July 12, 2026",
      readTime: "6 min read",
      category: "Automation",
      summary: "Stop losing leads in manual spreadsheets. Learn how low-code/no-code CRM systems can automate your tele-calling and sales pipeline.",
      seoTitle: "CRM Automation for Indian MSMEs: Double Your Leads | Analytics Spire",
      seoDesc: "Discover how CRM automation and cloud telecalling integration can turn raw website leads into closed clients for Indian MSMEs. Written by Anand Rengasamy.",
      content: (
        <article className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            For many Indian micro, small, and medium enterprises (MSMEs), lead generation isn't the biggest challenge—it's <strong>lead leakage</strong>. 
            Hundreds of business owners invest in Meta ads, Google campaigns, or local marketing, only to let those leads sit unaddressed in spreadsheets, WhatsApp chats, or notebook pages.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Cost of Manual Lead Management</h2>
          <p>
            When a prospective buyer fills out a contact form or requests a demo, the clock starts ticking. Research shows that contacting a lead within 
            <strong> 5 minutes</strong> increases the chances of conversion by up to 900%. Yet, the average MSME takes 24 to 48 hours to respond. Why? Because 
            someone has to manually export leads from the website, assign them to a telecaller, and follow up via phone or WhatsApp.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How an Intelligent CRM Transforms Your Pipeline</h2>
          <p>
            An automated Tele-CRM connects directly to your landing pages and advertising platforms (like Meta Lead Ads). The second a lead is generated:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Instant Allocation:</strong> The lead is instantly pushed to your sales team's mobile app or dashboard based on pre-defined round-robin rules.</li>
            <li><strong>Auto-Verification:</strong> Integrated OTP tools or validation services ensure the phone number is active and correct before your team wastes time dialing.</li>
            <li><strong>One-Click Calling:</strong> Telecallers dial directly from the CRM with custom scripts pre-loaded on their screen, logging call status automatically.</li>
            <li><strong>Drip Nurturing:</strong> If a lead doesn't answer, automated WhatsApp or email sequences keep your brand top-of-mind without manual effort.</li>
          </ul>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Analytics Spire Approach to Automation</h2>
          <p>
            At Analytics Spire, we specialize in building customized, affordable no-code business automation solutions. We construct tailored CRM architectures 
            that integrate directly with your website, allowing you to track cost-per-lead, caller productivity, and close rates on dynamic dashboards.
          </p>
          <div className="bg-gray-900 border border-brand-900 p-6 rounded-xl my-8">
            <h3 className="text-xl font-bold text-brand-400 mb-2">Want to eliminate lead leakage?</h3>
            <p className="text-sm text-gray-300 mb-4">
              Our automated solutions help businesses scale without hiring additional administrative staff. Book a free consultation with Anand Rengasamy today.
            </p>
            <Link to="/contact" className="inline-flex items-center text-white font-bold bg-brand-600 hover:bg-brand-500 px-4 py-2 rounded transition">
              Book a Free Consultation <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Integration: Connecting Meta Ads</h2>
          <p>
            By using webhooks and direct cloud code, your custom CRM can poll Meta’s Lead Ads API instantly. This bridges the gap between marketing spend and closed sales, providing real-time ROI tracking.
          </p>
          <p className="mt-6 font-semibold text-brand-400">
            Related Service: <Link to="/services" className="underline hover:text-white transition">Explore our Business Automation & CRM setups</Link>
          </p>
        </article>
      )
    },
    {
      title: "Demystifying Cost Reduction: AI and Automation Strategies for Manufacturing MSMEs",
      slug: "cost-reduction-ai-automation",
      date: "June 28, 2026",
      readTime: "5 min read",
      category: "Consulting",
      summary: "Discover actionable methods to cut operational waste and streamline supply chain processes using custom dashboards.",
      seoTitle: "AI & Automation for Manufacturing MSMEs | Cost Reduction",
      seoDesc: "Learn how manufacturing units and small industries in India can optimize stock levels and reduce waste using simple automation and dashboards.",
      content: (
        <article className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            With rising raw material costs and intense market competition, Indian manufacturing MSMEs must run highly efficient operations. However, 
            most units suffer from invisible costs—inventory overstocking, production bottlenecks, and manual reporting delays.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Identifying the Gaps in Your Process</h2>
          <p>
            Many manufacturing companies rely on manual floor logs. Production managers fill out daily activity reports on paper, which are typed 
            into Excel at the end of the week. By the time the business owner spots an efficiency dip or material shortage, the damage has already been done.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Actionable Automation Strategies</h2>
          <p>
            You don't need expensive ERP software to automate. Simple, customized cloud sheets connected to barcode scanners or mobile forms on the floor can:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Automate Reorder Points:</strong> Set triggers that alert suppliers automatically when steel, plastic, or chemical stocks drop below a threshold.</li>
            <li><strong>Real-time Scrap Tracking:</strong> Quantify material waste daily so operators can identify faulty machinery or training gaps instantly.</li>
            <li><strong>Machine Downtime Analysis:</strong> Log exact hours of machine inactivity to calculate Overall Equipment Effectiveness (OEE).</li>
          </ul>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Operational Excellence with Analytics Spire</h2>
          <p>
            Anand Rengasamy’s 30+ years of corporate engineering experience has been packaged into structured, affordable operational consulting for MSMEs. We build custom, interactive dashboards that extract data directly from your floor logs, giving you a real-time command center for your business.
          </p>
          <p className="mt-6 font-semibold text-brand-400">
            Related Service: <Link to="/services" className="underline hover:text-white transition">Explore our Operational & Inventory Management Services</Link>
          </p>
        </article>
      )
    },
    {
      title: "The MSME Guide to Automated Payroll & Attendance: Save 40+ Hours Every Month",
      slug: "automated-payroll-attendance",
      date: "May 15, 2026",
      readTime: "4 min read",
      category: "Finance",
      summary: "Manual attendance logging and payroll errors eat up founder time. Here is how to automate the entire flow safely.",
      seoTitle: "Automated Attendance & Payroll for Indian MSMEs | Save Time",
      seoDesc: "Ditch manual attendance books. Discover how small businesses can automate shift logs, leave management, and payroll compliance effortlessly.",
      content: (
        <article className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            As a business founder, your time should be spent on growth and client acquisition. Yet, the first week of every month is usually lost to 
            chasing attendance cards, calculating overtime, managing advances, and processing payroll.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Trap of Manual Administrative Overload</h2>
          <p>
            In a typical 30-person workshop, employees take leaves, work irregular shifts, and ask for salary advances. At the end of the month, 
            consolidating these records manually is a recipe for calculation errors, leading to team dissatisfaction or compliance risks.
          </p>
          <h2 className="text-2xl font-bold text-white mt-8 mb-4">How to Automate Attendance & Payroll</h2>
          <p>
            Modern, affordable cloud integration allows small businesses to link biometric machines or mobile GPS check-ins directly to a payroll sheet.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li><strong>Automatic Shift Matching:</strong> The system automatically calculates late-entries, early-outs, and overtime.</li>
            <li><strong>Employee Self-Service:</strong> Workers can view their payslips and request leave on WhatsApp or simple web portals.</li>
            <li><strong>Compliance Alerts:</strong> Automatic calculations for PF, ESIC, and Professional Tax, ensuring you never miss a government deadline.</li>
          </ul>
          <p>
            Our financial management and automation consulting at Analytics Spire makes it simple to move from chaos to systematic control. Let us build 
            the pipeline for you so you can focus strictly on scaling.
          </p>
          <p className="mt-6 font-semibold text-brand-400">
            Related Service: <Link to="/services" className="underline hover:text-white transition">See our Finance Management solutions</Link>
          </p>
        </article>
      )
    }
  ];

  const currentPost = blogPosts.find(p => p.slug === currentSlug);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSlug]);

  return (
    <div className="bg-black min-h-screen text-white font-sans">
      <SEO 
        title={currentPost ? currentPost.seoTitle : "MSME Growth & Automation Blog | Analytics Spire"}
        description={currentPost ? currentPost.seoDesc : "Practical tips on business automation, cost-cutting and scaling for Indian MSME owners. Insights from consultant Anand Rengasamy at Analytics Spire."}
        url={currentSlug ? `https://analyticsspire.com/blog/${currentSlug}` : "https://analyticsspire.com/blog"}
        additionalSchemas={currentPost?.additionalSchemas}
      />

      {/* Hero Banner */}
      <div className="relative bg-gray-950 pt-32 pb-20 border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentPost ? (
            <div>
              <button 
                onClick={() => navigate('/blog')} 
                className="inline-flex items-center text-brand-400 hover:text-white mb-6 font-bold uppercase tracking-wider text-xs transition"
              >
                <ArrowLeft size={16} className="mr-2" /> Back to Insights
              </button>
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400 font-medium">
                <span className="bg-brand-900/40 text-brand-400 border border-brand-800 px-3 py-1 rounded-full text-xs uppercase tracking-wider font-semibold">
                  {currentPost.category}
                </span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1.5" /> {currentPost.date}
                </span>
                <span className="flex items-center">
                  <Clock size={14} className="mr-1.5" /> {currentPost.readTime}
                </span>
              </div>
              <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl tracking-tight">
                {currentPost.title}
              </h1>
              <div className="flex items-center mt-6">
                <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center font-bold text-white text-sm">
                  AR
                </div>
                <div className="ml-3">
                  <p className="text-sm font-bold text-white">Anand Rengasamy</p>
                  <p className="text-xs text-gray-400">Founder, Analytics Spire</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-brand-500 font-bold tracking-widest uppercase text-sm mb-4">Analytics Spire Blog</h2>
              <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
                Insights on MSME growth and automation
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                Practical guides, case studies, and strategies on business scaling and low-code solutions for Indian business owners.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {currentPost ? (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Full Article Content */}
            <div className="lg:col-span-2 space-y-8 bg-gray-950 p-8 md:p-12 rounded-2xl border border-gray-900 shadow-xl">
              {currentPost.content}
            </div>

            {/* Sidebar with other articles */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-28">
                <h3 className="font-heading text-xl font-bold text-white mb-6 flex items-center border-b border-gray-800 pb-3">
                  <BookOpen size={20} className="text-brand-500 mr-2" /> Recent Articles
                </h3>
                <div className="space-y-6">
                  {blogPosts.filter(p => p.slug !== currentPost.slug).map((post, index) => (
                    <div key={index} className="group border-b border-gray-800 pb-4 last:border-0 last:pb-0">
                      <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">{post.category}</span>
                      <h4 className="font-heading font-bold text-white group-hover:text-brand-400 transition text-md mt-1 mb-2 line-clamp-2">
                        <Link to={`/blog/${post.slug}`} className="text-left w-full block">
                          {post.title}
                        </Link>
                      </h4>
                      <p className="text-xs text-gray-400">{post.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Featured Article */}
            <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row hover:border-brand-900 transition duration-300">
              <div className="lg:w-1/2 bg-gray-950 p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand-900/40 text-brand-400 border border-brand-850 uppercase tracking-widest mb-6">
                    Featured Article
                  </span>
                  <h3 className="font-heading text-3xl md:text-4xl font-extrabold text-white mb-4 leading-snug group-hover:text-brand-400 transition">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
                    {blogPosts[0].summary}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-brand-600 rounded-full flex items-center justify-center font-bold text-white text-xs">
                      AR
                    </div>
                    <span className="ml-2.5 text-sm text-gray-300 font-medium">{blogPosts[0].date}</span>
                  </div>
                  <Link 
                    to={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center text-brand-400 hover:text-white font-bold uppercase tracking-wider text-sm transition"
                  >
                    Read Article <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </div>
              </div>
              <div className="lg:w-1/2 relative bg-brand-950 flex items-center justify-center p-12 border-t lg:border-t-0 lg:border-l border-gray-800">
                <div className="absolute inset-0 opacity-10 bg-radial-gradient"></div>
                <div className="relative text-center max-w-sm space-y-6">
                  <BookOpen size={64} className="text-brand-500 mx-auto animate-pulse" />
                  <p className="text-gray-400 text-sm font-medium">Learn how direct API webhook triggers and dynamic dashboards turn raw traffic into closed sales instantly.</p>
                </div>
              </div>
            </div>

            {/* Grid Articles */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, idx) => (
                <div 
                  key={idx} 
                  className="bg-gray-900 rounded-2xl border border-gray-800 hover:border-brand-900 transition-all duration-300 p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-brand-950 text-brand-400 border border-brand-900 px-2.5 py-0.5 rounded text-xs uppercase tracking-wider font-semibold">
                        {post.category}
                      </span>
                      <span className="text-xs text-gray-500 flex items-center">
                        <Clock size={12} className="mr-1" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 hover:text-brand-400 transition">
                      <Link to={`/blog/${post.slug}`} className="text-left block">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                      {post.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-800 pt-4 mt-auto">
                    <span className="text-xs text-gray-500">{post.date}</span>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-brand-400 hover:text-white font-bold text-xs uppercase tracking-wider transition"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
