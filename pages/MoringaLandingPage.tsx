import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, Clock, Calendar as CalendarIcon, ArrowRight, AlertCircle, 
  MapPin, ClipboardList, ShieldAlert, Sparkles, Sprout, FileSpreadsheet, 
  ChevronRight, Phone, Mail, HelpCircle, FileText, Check, Plus, Minus,
  Users, Layers, CloudLightning, Laptop, AlertTriangle, CheckCircle, 
  ArrowLeft, Share2, Info
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { api } from '../services/api';

export const MoringaLandingPage: React.FC = () => {
  // Navigation tabs for features
  const [activeTab, setActiveTab] = useState<'farm' | 'finance' | 'unique'>('farm');
  
  // Booking states
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingCompany, setBookingCompany] = useState<string>('');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [availableDates, setAvailableDates] = useState<Date[]>([]);

  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let currentDay = 1;
    
    while (currentDay <= 30) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + currentDay);
      
      const day = nextDate.getDay();
      // Tuesday (2), Thursday (4), Saturday (6)
      if (day === 2 || day === 4 || day === 6) {
        dates.push(nextDate);
      }
      currentDay++;
    }
    setAvailableDates(dates);
  }, []);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !bookingName || !bookingEmail || !bookingPhone) {
      setErrorMsg('Please select a date and fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    const formattedDate = selectedDate.toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const leadData = {
      source: 'Moringa ERP Landing Page',
      name: bookingName,
      email: bookingEmail,
      phone: bookingPhone,
      company: bookingCompany || 'Moringa Farm/Business',
      notes: `Requested Demo Registration for ${formattedDate} at 3:00 PM IST. Message: ${bookingNotes}`,
      timestamp: new Date().toISOString()
    };

    try {
      // Submit lead to Google Sheets via Apps Script
      const success = await api.submitLead(leadData);
      if (success) {
        setBookingSuccess(true);
      } else {
        setErrorMsg('There was a small network glitch. Please try registering again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Submission failed. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper to construct a Google Calendar "Add Event" link for the prospect
  const getGoogleCalendarLink = () => {
    if (!selectedDate) return '#';
    
    const dateStr = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
    
    // 3:00 PM to 4:00 PM IST
    // We format as local time format YYYYMMDDTHHMMSS
    const startFormatted = `${dateStr.replace(/-/g, '')}T150000`;
    const endFormatted = `${dateStr.replace(/-/g, '')}T160000`;

    const title = encodeURIComponent("Moringa ERP Personalized Demo — Analytics Spire");
    const details = encodeURIComponent(
      `Hello ${bookingName},\n\nThank you for booking a demo for Moringa ERP business software!\n\nDetails of the session:\n- Date: ${selectedDate.toLocaleDateString()}\n- Time Slot: 3:00 PM - 4:00 PM IST\n- Organizer: Anand Rengasamy (ars.okd@gmail.com)\n\nWe will showcase how to manage your crops, track QC, streamline invoicing, and view real-time profitability (IFRS P&L).\n\nSee you then!`
    );
    const location = encodeURIComponent("Google Meet (link will be sent to your email)");
    const addsh = encodeURIComponent("ars.okd@gmail.com");

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startFormatted}/${endFormatted}&details=${details}&location=${location}&add=${addsh}`;
  };

  return (
    <div className="bg-gray-950 min-h-screen text-gray-100 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      
      {/* Top Standalone Header */}
      <header className="border-b border-gray-900 bg-gray-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <Sprout className="text-white w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-bold text-xl text-white tracking-tight">Moringa ERP</span>
                <span className="bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-emerald-500/20">Made for India</span>
              </div>
              <p className="text-xs text-gray-400">By Analytics Spire</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/" className="text-gray-400 hover:text-white text-sm font-medium transition-colors hidden sm:inline-flex items-center gap-1">
              <ArrowLeft size={16} /> Main Website
            </Link>
            <a 
              href="#book-demo" 
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-lg transition-all shadow-md shadow-emerald-900/30"
            >
              Register for Demo
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-emerald-950/40 via-green-950/20 to-gray-950">
        {/* Abstract Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0">
          <div className="absolute top-[-100px] left-[20%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-[-50px] right-[25%] w-[350px] h-[350px] bg-green-500/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={14} className="animate-pulse" />
                <span>All-in-One Moringa Business Software</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white leading-tight tracking-tight">
                Run your <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-200 bg-clip-text text-transparent">Moringa</span> business <br className="hidden sm:block" />
                <span className="font-light italic text-emerald-100">smarter.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                From seed to sale — manage farm operations, processing batches, quality checks, GST invoicing, payroll, and instant P&L reporting in a single, simple-to-use cloud & offline-capable app. Built specifically for India’s Moringa growers.
              </p>

              {/* Grid of Key USP Badges */}
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl">
                {[
                  { text: "GPS Farm Mapping Included", desc: "Walk your boundaries to auto-record plots." },
                  { text: "100% Offline-Capable App", desc: "Field workers log tasks even with zero network." },
                  { text: "GST-Compliant Invoicing", desc: "Auto-splits CGST/SGST/IGST by state." },
                  { text: "Ready in Less than 7 Days", desc: "We set up your data & train your workers." }
                ].map((usp, idx) => (
                  <div key={idx} className="flex gap-3 items-start bg-gray-900/50 p-4 rounded-xl border border-gray-800/80">
                    <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-white text-sm">{usp.text}</h4>
                      <p className="text-xs text-gray-400 mt-0.5">{usp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="#book-demo" 
                  className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-center rounded-xl transition-all hover:translate-y-[-2px] active:translate-y-0 shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2"
                >
                  Register for Free 30-Min Demo <ArrowRight size={18} />
                </a>
                <a 
                  href="#modules" 
                  className="px-8 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-800 text-center text-gray-200 font-semibold rounded-xl transition-all"
                >
                  Explore 20+ Modules
                </a>
              </div>

              {/* Bottom taglines */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400 font-mono">
                <span>⚡ Multi-Tenant</span>
                <span>•</span>
                <span>📱 Progressive Web App (PWA)</span>
                <span>•</span>
                <span>💻 Desktop & Mobile Compatible</span>
              </div>
            </div>

            {/* Hero Right Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-2xl pointer-events-none"></div>
              
              <div className="relative bg-gray-900/95 border border-gray-800 p-8 rounded-3xl shadow-2xl space-y-6">
                
                {/* Visual Header */}
                <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-xs text-emerald-400 font-mono">moringa-erp.netlify.app</span>
                </div>

                {/* Simulated App Screen */}
                <div className="space-y-4">
                  <div className="bg-gray-950 p-4 rounded-xl border border-gray-800">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs text-gray-400 font-medium">FARM STATUS OVERVIEW</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono">ONLINE</span>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-gray-900 p-2.5 rounded border border-gray-800 text-center">
                        <div className="text-xs text-gray-400">Total Plots</div>
                        <div className="text-lg font-bold text-white mt-1">30 Plots</div>
                      </div>
                      <div className="bg-gray-900 p-2.5 rounded border border-gray-800 text-center">
                        <div className="text-xs text-gray-400">Actively Sown</div>
                        <div className="text-lg font-bold text-emerald-400 mt-1">82.5 Ac</div>
                      </div>
                      <div className="bg-gray-900 p-2.5 rounded border border-gray-800 text-center">
                        <div className="text-xs text-gray-400">Harvest Ready</div>
                        <div className="text-lg font-bold text-yellow-500 mt-1">5 Plots</div>
                      </div>
                    </div>
                  </div>

                  {/* Feature list in hero right */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs text-gray-400 px-1">
                      <span>KEY CAPABILITIES</span>
                      <span>STATUS</span>
                    </div>
                    <div className="bg-gray-950/50 rounded-xl divide-y divide-gray-900 border border-gray-800">
                      {[
                        { title: "GPS Perimeter Mapping", badge: "Live Tracking" },
                        { title: "Batch Processing & QC", badge: "ISO Compliant" },
                        { title: "One-Click Tally XML Export", badge: "GST Ready" },
                        { title: "Role-Based Worker App", badge: "Offline Enabled" }
                      ].map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center p-3 text-sm">
                          <span className="text-gray-200 font-medium">{item.title}</span>
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold px-2 py-0.5 rounded border border-emerald-500/10">{item.badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Value Statement Quote */}
                  <div className="bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl text-xs text-emerald-300 leading-relaxed italic">
                    "Most Moringa farmers lose money not in the field — but in the paperwork. We close every gap from crop to cash."
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Target Audience / "Built For" Section */}
      <section className="py-16 bg-gray-950 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">Engineered for the Industry</p>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-10">Moringa ERP is Purpose-Built For:</h2>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {[
              "Moringa Farmers",
              "Processing Units",
              "Powder & Capsule Manufacturers",
              "Exporters & Traders",
              "Organic & Certified Producers",
              "Contract Farming Groups"
            ].map((audience, idx) => (
              <span 
                key={idx} 
                className="px-5 py-3 bg-gray-900 border border-gray-800 text-gray-200 font-medium rounded-xl text-sm flex items-center gap-2 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                {audience}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Features Explorer (Tabs) */}
      <section id="modules" className="py-20 bg-gray-900/40 border-y border-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">Full-Suite Crop to Cash Control</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Moringa ERP covers 20+ specialized modules. We don't believe in generic paddy or sugarcane templates. Everything inside is fine-tuned to the unique metrics of Moringa.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 bg-gray-900 rounded-xl border border-gray-800 gap-1">
              <button 
                onClick={() => setActiveTab('farm')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'farm' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                🌾 Farm & Field Operations
              </button>
              <button 
                onClick={() => setActiveTab('finance')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'finance' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                💼 Sales, Finance & Compliance
              </button>
              <button 
                onClick={() => setActiveTab('unique')}
                className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${activeTab === 'unique' ? 'bg-emerald-600 text-white shadow-md' : 'text-gray-400 hover:text-white'}`}
              >
                ⭐ Why Moringa ERP?
              </button>
            </div>
          </div>

          {/* Tab Content 1: Farm Operations */}
          {activeTab === 'farm' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {[
                { title: "GPS Farm Mapping", desc: "Walk the perimeter once with your phone. No device to buy. Auto-records acreage and boundaries instantly.", icon: <MapPin className="text-emerald-400" /> },
                { title: "Crop Batch Tracking", desc: "Track every planting batch. Monitor variety, organic certification status, soil health, and expected harvest date.", icon: <Sprout className="text-emerald-400" /> },
                { title: "Field Operations Log", desc: "Keep perfect date-stamped records of fertilization, irrigation schedules, tree pruning, and organic pest control.", icon: <ClipboardList className="text-emerald-400" /> },
                { title: "Pest & Disease Logs", desc: "Log pest incidents directly from the field with severity level, photo evidence, and track applied organic treatments.", icon: <ShieldAlert className="text-emerald-400" /> },
                { title: "Harvest Log Linked to Batch", desc: "Record exact weights, grades (A/B/C), harvesting method, and picker ID. Automatically linked to the original crop batch.", icon: <Layers className="text-emerald-400" /> },
                { title: "Quality Control (QC)", desc: "Record moisture %, foreign matter %, and color grade at Harvest Intake, Processing Output, and Pre-Dispatch. Attach video proof.", icon: <CheckCircle2 className="text-emerald-400" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-emerald-500/20 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 2: Sales & Finance */}
          {activeTab === 'finance' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {[
                { title: "Full Sales Chain Flow", desc: "Seamless workflow from Quotation → Sales Order → GST Invoice → Delivery Challan. Every document flows from the previous. Zero re-typing.", icon: <FileSpreadsheet className="text-emerald-400" /> },
                { title: "GST-Compliant Invoices", desc: "Automatically splits CGST, SGST, and IGST based on customer location. HSN codes auto-fill instantly. Direct PDF & WhatsApp sharing.", icon: <FileText className="text-emerald-400" /> },
                { title: "One-Click Tally XML Export", desc: "Export invoices and expenses as Tally-ready files. Your accountant can import everything in seconds without manual ledger entry.", icon: <CloudLightning className="text-emerald-400" /> },
                { title: "IFRS P&L Reporting", desc: "Revenue → Gross Profit → EBITDA → EBIT → PBT → PAT are auto-calculated from expenses and sales records. Real-time margin visibility.", icon: <CheckCircle2 className="text-emerald-400" /> },
                { title: "3-Level Expense Taxonomy", desc: "Differentiate COGS from Operating Expenses easily with 7 international categories and 50+ sub-types structured for Agri-industry.", icon: <Layers className="text-emerald-400" /> },
                { title: "Role-Based Access Control", desc: "Different dashboards for Farm Managers, Plant Managers, Sales Staff, Accountants, and Field Workers. Ensures no data leakage.", icon: <Users className="text-emerald-400" /> }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl hover:border-emerald-500/20 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20 mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab Content 3: Unique USPs */}
          {activeTab === 'unique' && (
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeIn">
              {[
                { title: "Built Only for Moringa", desc: "Every field, terminology, and QC parameter is native to Moringa farming and processing. Not adapted from sugarcane or paddy templates." },
                { title: "Works Offline Without Internet", desc: "Field workers log harvests and tasks in remote plots. Everything syncs instantly once they are back in mobile signal range. No data loss." },
                { title: "Visual Proof on Every Record", desc: "Buyers, organic auditors, and certification bodies see photo & video evidence attached directly to pest logs and QC records." },
                { title: "Full Farm-to-Invoice Audit Trail", desc: "Every invoice traces directly back to the processing batch, harvest date, crop plot, and the field worker who picked it." }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-2xl flex gap-4 items-start">
                  <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Mid-page Demo CTA Banner */}
      <section className="py-16 bg-emerald-950/20 border-t border-emerald-900/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-extrabold text-white mb-4">
            Stop Guessing. Start Seeing.
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Every farm is different. We want to show you exactly how Moringa ERP can solve your specific challenges. No pressure, no obligations—just a clear demonstration of what's possible.
          </p>
          <a 
            href="#book-demo" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-900/30"
          >
            <CalendarIcon size={18} />
            Schedule Your Personalized Demo Now
          </a>
        </div>
      </section>

      {/* Booking Calendar Interactive Component */}
      <section id="book-demo" className="py-24 bg-gray-900/30 border-t border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Booking Left: Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest">Get Started Live</p>
                <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
                  Register for a Free Live Demo Session
                </h2>
                <p className="text-gray-400 leading-relaxed">
                  We set up a screen share, run the software on your realistic farm metrics, and demonstrate exactly how you can stop losing revenue to unorganized paperwork.
                </p>
              </div>

              {/* Direct owner details */}
              <div className="space-y-4 bg-gray-900 border border-gray-800 p-6 rounded-2xl">
                <h3 className="font-bold text-white text-sm">Demo Organizer Contact:</h3>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Mail size={16} className="text-emerald-500" />
                    <span>ars.okd@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <Laptop size={16} className="text-emerald-500" />
                    <span>moringa-erp.netlify.app</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <MapPin size={16} className="text-emerald-500" />
                    <span>Chennai, India (MSME Coaching Expert)</span>
                  </div>
                </div>

                <div className="border-t border-gray-800 pt-4 mt-4 flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-full bg-emerald-600/10 flex items-center justify-center flex-shrink-0 text-emerald-400">
                    <Info size={18} />
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Once registered, your schedule is securely written to our spreadsheet database, and we'll instantly generate an calendar invite link for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Right: Registration Component */}
            <div className="lg:col-span-7 bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl relative">
              
              {bookingSuccess ? (
                // Success State Screen
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-950">
                    <CheckCircle size={44} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-white">Registration Successful!</h3>
                    <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you, <strong className="text-white">{bookingName}</strong>. You have successfully registered for the open demo session on <strong className="text-emerald-400">{selectedDate?.toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</strong>. A calendar invite with the meeting link will be sent to your email shortly.
                    </p>
                  </div>

                  {/* Add to Google Calendar Action Button */}
                  <div className="bg-gray-950 p-6 rounded-2xl border border-gray-800/80 max-w-md mx-auto space-y-4">
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Click the button below to instantly populate this event directly in your personal Google Calendar and send an invitation to <strong className="text-white">ars.okd@gmail.com</strong>.
                    </p>
                    
                    <a 
                      href={getGoogleCalendarLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-gray-100 text-black font-black text-sm rounded-xl transition-all shadow-md"
                    >
                      <CalendarIcon size={18} className="text-emerald-600" />
                      Add to Google Calendar
                    </a>
                  </div>

                  <button 
                    onClick={() => {
                      setBookingSuccess(false);
                      setSelectedDate(null);
                      setBookingName('');
                      setBookingEmail('');
                      setBookingPhone('');
                      setBookingCompany('');
                      setBookingNotes('');
                    }}
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                  >
                    ← Register another participant
                  </button>
                </div>
              ) : (
                // Interactive Booking Steps
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  {errorMsg && (
                    <div className="p-3 bg-red-950/20 border border-red-900/50 text-red-400 rounded-lg text-xs flex gap-2 items-start">
                      <AlertTriangle className="flex-shrink-0 mt-0.5" size={14} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Step 1: Select Date */}
                  <div className="space-y-3">
                    <label className="block text-xs text-gray-400 font-mono uppercase tracking-wider">Step 1: Select a Tuesday, Thursday, or Saturday</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableDates.map((date, idx) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => {
                              setSelectedDate(date);
                            }}
                            className={`p-3 rounded-xl border text-center transition-all ${isSelected ? 'bg-emerald-600 border-emerald-500 text-white font-bold shadow' : 'bg-gray-950 border-gray-800 text-gray-300 hover:border-gray-700'}`}
                          >
                            <div className="text-[10px] font-mono uppercase text-gray-400">
                              {date.toLocaleDateString('en-IN', { weekday: 'short' })}
                            </div>
                            <div className="text-lg font-extrabold mt-0.5">
                              {date.getDate()}
                            </div>
                            <div className="text-[9px] text-gray-400 mt-0.5">
                              {date.toLocaleDateString('en-IN', { month: 'short' })}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Step 2: Time Slot */}
                  <div className="space-y-3">
                    <label className="block text-xs text-gray-400 font-mono uppercase tracking-wider">
                      Step 2: Time Slot (IST)
                    </label>
                    <div className="p-4 bg-gray-950 border border-emerald-900/50 rounded-xl text-center text-sm text-emerald-400 font-bold flex justify-center items-center gap-2">
                      <Clock size={16} />
                      3:00 PM - 4:00 PM
                    </div>
                  </div>

                  {/* Step 3: Fill in details */}
                  <div className="space-y-4 pt-2">
                    <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">Step 3: Register for the Demo Session</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="block text-xs text-gray-400 font-medium">Your Name *</label>
                        <input 
                          type="text" 
                          required
                          value={bookingName}
                          onChange={(e) => setBookingName(e.target.value)}
                          placeholder="Anand Rengasamy"
                          className="w-full px-4 py-2.5 bg-gray-950 border border-gray-800 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Company */}
                      <div className="space-y-1">
                        <label className="block text-xs text-gray-400 font-medium">Farm / Business Name</label>
                        <input 
                          type="text" 
                          value={bookingCompany}
                          onChange={(e) => setBookingCompany(e.target.value)}
                          placeholder="Moringa Agri Farms"
                          className="w-full px-4 py-2.5 bg-gray-950 border border-gray-800 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="block text-xs text-gray-400 font-medium">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          placeholder="owner@myfarm.com"
                          className="w-full px-4 py-2.5 bg-gray-950 border border-gray-800 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="block text-xs text-gray-400 font-medium">Phone Number *</label>
                        <input 
                          type="tel" 
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-2.5 bg-gray-950 border border-gray-800 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Custom Notes */}
                    <div className="space-y-1">
                      <label className="block text-xs text-gray-400 font-medium">What specific challenges or crops do you want to show on the demo?</label>
                      <textarea 
                        rows={3}
                        value={bookingNotes}
                        onChange={(e) => setBookingNotes(e.target.value)}
                        placeholder="e.g. tracking moisture level at QC, exporter compliance, tally bookkeeping, etc..."
                        className="w-full px-4 py-2.5 bg-gray-950 border border-gray-800 rounded-lg text-sm text-gray-100 placeholder-gray-600 focus:border-emerald-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:bg-gray-800 text-white font-black rounded-xl transition-all flex items-center justify-center gap-2 border border-emerald-500/20"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Registering...</span>
                      </>
                    ) : (
                      <>
                        <span>Register for Open Demo</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] text-gray-500 text-center">
                    By submitting, your details will be recorded in the Google Sheets CRM securely.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Footer Quote banner */}
      <section className="bg-emerald-950/20 py-16 border-t border-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-lg sm:text-xl text-emerald-300 italic font-medium">
            "Your farm manager logs field expenses from the field. Your accountant sees the full P&L from the office. Your buyer gets a GST invoice with a QC report attached. Everyone gets exactly what they need — nothing more, nothing less."
          </p>
          <div className="w-12 h-0.5 bg-emerald-500 mx-auto"></div>
          <p className="text-xs text-gray-400 font-mono">Led by Anand Rengasamy • Analytics Spire Partner</p>
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 py-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© 2026 Analytics Spire. All Rights Reserved.</p>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-white transition-colors">Main Home</Link>
            <span>•</span>
            <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          </div>
        </div>
      </footer>

    </div>
  );
};
