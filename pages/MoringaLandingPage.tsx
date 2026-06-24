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
  
  // States for interactive pricing calculator
  const [farmSize, setFarmSize] = useState<number>(5);
  const [numPlots, setNumPlots] = useState<number>(10);
  const [numUsers, setNumUsers] = useState<number>(3);
  const [calculatedPlan, setCalculatedPlan] = useState<'basic' | 'advanced' | 'pro'>('advanced');

  // Booking states
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [bookingName, setBookingName] = useState<string>('');
  const [bookingEmail, setBookingEmail] = useState<string>('');
  const [bookingPhone, setBookingPhone] = useState<string>('');
  const [bookingCompany, setBookingCompany] = useState<string>('');
  const [bookingNotes, setBookingNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  // Calendar dates generation (Next 14 days, excluding Sundays)
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const timeSlots = [
    "10:00 AM - 10:30 AM",
    "11:00 AM - 11:30 AM",
    "02:00 PM - 02:30 PM",
    "03:00 PM - 03:30 PM",
    "04:00 PM - 04:30 PM",
    "05:00 PM - 05:30 PM"
  ];

  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    
    // Generate dates starting tomorrow for 14 days
    let daysAdded = 0;
    let currentDay = 1;
    
    while (daysAdded < 12 && currentDay < 25) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + currentDay);
      
      // 0 is Sunday
      if (nextDate.getDay() !== 0) {
        dates.push(nextDate);
        daysAdded++;
      }
      currentDay++;
    }
    setAvailableDates(dates);
  }, []);

  // Sync pricing recommendations based on farm size & plots
  useEffect(() => {
    if (farmSize <= 1 && numPlots <= 5 && numUsers <= 3) {
      setCalculatedPlan('basic');
    } else if (farmSize <= 5 && numPlots <= 30 && numUsers <= 10) {
      setCalculatedPlan('advanced');
    } else {
      setCalculatedPlan('pro');
    }
  }, [farmSize, numPlots, numUsers]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !bookingName || !bookingEmail || !bookingPhone) {
      setErrorMsg('Please fill in all required fields, including Date and Time slot.');
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
      notes: `Requested Demo for Moringa ERP on ${formattedDate} at ${selectedTime}. Farm details: Size - ${farmSize} acres, Plots - ${numPlots}, Message: ${bookingNotes}`,
      timestamp: new Date().toISOString()
    };

    try {
      // Submit lead to Google Sheets via Apps Script
      const success = await api.submitLead(leadData);
      if (success) {
        setBookingSuccess(true);
      } else {
        setErrorMsg('There was a small network glitch. Please try booking again.');
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
    
    // Parse start and end time
    const dateStr = selectedDate.toISOString().split('T')[0]; // YYYY-MM-DD
    let startHour = '10';
    let startMin = '00';
    let endHour = '10';
    let endMin = '30';

    if (selectedTime.includes('11:00')) {
      startHour = '11'; startMin = '00'; endHour = '11'; endMin = '30';
    } else if (selectedTime.includes('02:00')) {
      startHour = '14'; startMin = '00'; endHour = '14'; endMin = '30';
    } else if (selectedTime.includes('03:00')) {
      startHour = '15'; startMin = '00'; endHour = '15'; endMin = '30';
    } else if (selectedTime.includes('04:00')) {
      startHour = '16'; startMin = '00'; endHour = '16'; endMin = '30';
    } else if (selectedTime.includes('05:00')) {
      startHour = '17'; startMin = '00'; endHour = '17'; endMin = '30';
    }

    // Google Calendar template format: YYYYMMDDTHHMMSSZ
    // For simplicity, we convert to UTC-ish or leave standard. 
    // We'll format as local time format YYYYMMDDTHHMMSS
    const startFormatted = `${dateStr.replace(/-/g, '')}T${startHour}${startMin}00`;
    const endFormatted = `${dateStr.replace(/-/g, '')}T${endHour}${endMin}00`;

    const title = encodeURIComponent("Moringa ERP Personalized Demo — Analytics Spire");
    const details = encodeURIComponent(
      `Hello ${bookingName},\n\nThank you for booking a demo for Moringa ERP business software!\n\nDetails of the session:\n- Date: ${selectedDate.toLocaleDateString()}\n- Time Slot: ${selectedTime}\n- Organizer: Anand Rengasamy (ars.okd@gmail.com)\n\nWe will showcase how to manage your crops, track QC, streamline invoicing, and view real-time profitability (IFRS P&L).\n\nSee you then!`
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
              Book a Demo
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
                  Book a Free 30-Min Demo <ArrowRight size={18} />
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

      {/* Pricing Section with Interactive Calculator */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">Simple, Transparent Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">No Hidden Charges. Scale as You Grow.</h2>
            <p className="text-gray-400 mt-4 leading-relaxed">
              Find the perfect plan for your business. Use the sliding calculator below to see which plan matches your current farm and user scale.
            </p>
          </div>

          {/* Sliding Scale Interactive Calculator */}
          <div className="bg-gray-900/60 border border-gray-800 rounded-3xl p-6 sm:p-10 mb-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-heading font-bold text-white mb-8 text-center flex items-center justify-center gap-2">
              <Sprout className="text-emerald-400" size={20} />
              Calculate Your Plan Recommendation
            </h3>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {/* Sliders */}
              <div className="space-y-6 md:col-span-2">
                {/* Farm Size */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-medium">Number of Farms</span>
                    <span className="text-emerald-400 font-bold">{farmSize} {farmSize === 1 ? 'Farm' : 'Farms'}</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="15" 
                    value={farmSize} 
                    onChange={(e) => setFarmSize(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>1 Farm</span>
                    <span>5 Farms</span>
                    <span>10 Farms</span>
                    <span>15 Farms</span>
                  </div>
                </div>

                {/* Plot Size */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-medium">Number of Plots / Batches</span>
                    <span className="text-emerald-400 font-bold">{numPlots} Plots</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={numPlots} 
                    onChange={(e) => setNumPlots(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>1 Plot</span>
                    <span>30 Plots</span>
                    <span>60 Plots</span>
                    <span>100+ Plots</span>
                  </div>
                </div>

                {/* Users Count */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300 font-medium">App Users (Staff)</span>
                    <span className="text-emerald-400 font-bold">{numUsers} Users</span>
                  </div>
                  <input 
                    type="range" 
                    min="1" 
                    max="30" 
                    value={numUsers} 
                    onChange={(e) => setNumUsers(Number(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-emerald-500" 
                  />
                  <div className="flex justify-between text-[10px] text-gray-500 font-mono">
                    <span>1 User</span>
                    <span>10 Users</span>
                    <span>20 Users</span>
                    <span>30+ Users</span>
                  </div>
                </div>
              </div>

              {/* Recommendation Display */}
              <div className="bg-emerald-950/20 border border-emerald-500/20 p-6 rounded-2xl flex flex-col justify-between items-center text-center">
                <div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Recommended Plan</span>
                  <h4 className="text-3xl font-heading font-black text-white mt-2 capitalize">{calculatedPlan}</h4>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    Based on your input, this plan provides the most cost-effective and secure scaling bounds.
                  </p>
                </div>
                
                <div className="mt-6 w-full">
                  <div className="text-3xl font-mono font-bold text-emerald-400">
                    {calculatedPlan === 'basic' ? '₹499' : calculatedPlan === 'advanced' ? '₹1,499' : '₹3,999'}
                    <span className="text-xs text-gray-400 font-sans font-normal"> / month</span>
                  </div>
                  <a 
                    href="#book-demo"
                    className="block w-full text-center mt-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-all"
                  >
                    Select Plan & Book Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Three Pricing Plan Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Basic Plan */}
            <div className={`bg-gray-900 border rounded-2xl p-8 flex flex-col justify-between transition-all ${calculatedPlan === 'basic' ? 'border-emerald-500 ring-1 ring-emerald-500/20 scale-105' : 'border-gray-800 hover:border-gray-700'}`}>
              <div>
                <span className="text-gray-400 text-xs font-mono uppercase font-bold tracking-wider">For Growers starting out</span>
                <h3 className="text-2xl font-heading font-bold text-white mt-1">Basic</h3>
                <div className="text-3xl font-mono font-extrabold text-emerald-400 mt-4">
                  ₹499<span className="text-sm text-gray-400 font-sans font-normal">/month</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">Prices subject to change without notice</p>
                
                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>1 Farm • 5 plots • 3 users</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Basic Crop Mapping & Tracking</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Daily Attendance Logging</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Operations Logs & Workflows</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="#book-demo" 
                className="mt-8 block w-full py-3 bg-gray-800 hover:bg-gray-700 text-center text-white text-sm font-bold rounded-xl transition-colors"
              >
                Book Demo
              </a>
            </div>

            {/* Advanced Plan (Most Popular) */}
            <div className={`bg-gray-900 border rounded-2xl p-8 flex flex-col justify-between relative transition-all ${calculatedPlan === 'advanced' ? 'border-emerald-500 ring-2 ring-emerald-500/20 scale-105' : 'border-emerald-500/30'}`}>
              <div className="absolute top-0 right-1/2 translate-x-1/2 translate-y-[-50%] bg-emerald-600 text-white font-bold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow">
                Most Popular
              </div>

              <div>
                <span className="text-gray-400 text-xs font-mono uppercase font-bold tracking-wider">For Professional Farms</span>
                <h3 className="text-2xl font-heading font-bold text-white mt-1">Advanced</h3>
                <div className="text-3xl font-mono font-extrabold text-emerald-400 mt-4">
                  ₹1,499<span className="text-sm text-gray-400 font-sans font-normal">/month</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">Prices subject to change without notice</p>
                
                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span className="font-semibold text-white">5 Farms • 30 plots • 10 users</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>All Basic Features Included</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Pest & Disease Logs with Photos</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Batch Quality Control (QC)</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Processing & Inventory Manager</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="#book-demo" 
                className="mt-8 block w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-center text-white text-sm font-bold rounded-xl transition-all shadow shadow-emerald-900/30"
              >
                Book Demo
              </a>
            </div>

            {/* Pro Plan */}
            <div className={`bg-gray-900 border rounded-2xl p-8 flex flex-col justify-between transition-all ${calculatedPlan === 'pro' ? 'border-emerald-500 ring-1 ring-emerald-500/20 scale-105' : 'border-gray-800 hover:border-gray-700'}`}>
              <div>
                <span className="text-gray-400 text-xs font-mono uppercase font-bold tracking-wider">Enterprise-Ready Control</span>
                <h3 className="text-2xl font-heading font-bold text-white mt-1">Pro</h3>
                <div className="text-3xl font-mono font-extrabold text-emerald-400 mt-4">
                  ₹3,999<span className="text-sm text-gray-400 font-sans font-normal">/month</span>
                </div>
                <p className="text-xs text-gray-400 mt-2 italic">Prices subject to change without notice</p>
                
                <ul className="mt-8 space-y-4 text-sm text-gray-300">
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span className="font-semibold text-white">Unlimited Everything</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Full Sales Chain Integration</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>GST Invoices & One-Click Tally Export</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>IFRS Balance Sheet, Cash Flow, & P&L</span>
                  </li>
                  <li className="flex gap-2.5 items-center">
                    <CheckCircle className="text-emerald-500 flex-shrink-0" size={16} />
                    <span>Video QC Evidence Storage</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="#book-demo" 
                className="mt-8 block w-full py-3 bg-gray-800 hover:bg-gray-700 text-center text-white text-sm font-bold rounded-xl transition-colors"
              >
                Book Demo
              </a>
            </div>

          </div>
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
                  Book a Free 30-Minute Live Demo Session
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
                    Once booked, your schedule is securely written to our spreadsheet database, and we'll instantly generate an calendar invite link for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Right: Calendar Component */}
            <div className="lg:col-span-7 bg-gray-900 border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-xl relative">
              
              {bookingSuccess ? (
                // Success State Screen
                <div className="text-center py-10 space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-950">
                    <CheckCircle size={44} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-heading font-bold text-white">Demo Scheduled Successfully!</h3>
                    <p className="text-gray-400 max-w-md mx-auto text-sm leading-relaxed">
                      Thank you, <strong className="text-white">{bookingName}</strong>. Your requested slot on <strong className="text-emerald-400">{selectedDate?.toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at <strong className="text-emerald-400">{selectedTime}</strong> has been saved directly to our calendar system.
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
                      setSelectedTime('');
                      setBookingName('');
                      setBookingEmail('');
                      setBookingPhone('');
                      setBookingCompany('');
                      setBookingNotes('');
                    }}
                    className="text-sm text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
                  >
                    ← Book another slot or edit details
                  </button>
                </div>
              ) : (
                // Interactive Booking Steps
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  
                  <h3 className="text-lg font-heading font-bold text-white border-b border-gray-800 pb-3 flex items-center gap-2">
                    <CalendarIcon size={18} className="text-emerald-400" />
                    Select a Date & Available Slot:
                  </h3>

                  {errorMsg && (
                    <div className="p-3 bg-red-950/20 border border-red-900/50 text-red-400 rounded-lg text-xs flex gap-2 items-start">
                      <AlertTriangle className="flex-shrink-0 mt-0.5" size={14} />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Step 1: Select Date */}
                  <div className="space-y-3">
                    <label className="block text-xs text-gray-400 font-mono uppercase tracking-wider">Step 1: Choose Date</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {availableDates.map((date, idx) => {
                        const isSelected = selectedDate?.toDateString() === date.toDateString();
                        return (
                          <button
                            type="button"
                            key={idx}
                            onClick={() => {
                              setSelectedDate(date);
                              setSelectedTime('');
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

                  {/* Step 2: Select Time Slot (Enabled only if date is selected) */}
                  <div className="space-y-3">
                    <label className="block text-xs text-gray-400 font-mono uppercase tracking-wider">
                      Step 2: Choose 30-Min Time Slot (IST)
                    </label>
                    {!selectedDate ? (
                      <div className="p-4 bg-gray-950 border border-gray-800 rounded-xl text-center text-xs text-gray-500 font-medium italic">
                        Please select a date from above first to view times.
                      </div>
                    ) : (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {timeSlots.map((slot, idx) => {
                          const isSelected = selectedTime === slot;
                          return (
                            <button
                              type="button"
                              key={idx}
                              onClick={() => setSelectedTime(slot)}
                              className={`p-3 rounded-xl border text-center text-xs font-semibold transition-all ${isSelected ? 'bg-emerald-600 border-emerald-500 text-white font-bold shadow' : 'bg-gray-950 border-gray-800 text-gray-300 hover:border-gray-700'}`}
                            >
                              <Clock size={12} className="inline mr-1 text-emerald-400" />
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Step 3: Fill in details */}
                  <div className="space-y-4 border-t border-gray-800 pt-6">
                    <h3 className="text-sm font-heading font-bold text-white uppercase tracking-wider">Step 3: Tell Us About Your Business</h3>
                    
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
                        <span>Securing Slot...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm and Book Demo Session</span>
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
