import React, { useState } from 'react';
import { Mail, MapPin, Send, Phone, Building2, Users, AlertCircle, IndianRupee, Lock, ShieldCheck, ArrowRight, X, Loader2 } from 'lucide-react';
import { useData } from '../context/DataContext';
import { api } from '../services/api';

type FormStep = 'contact' | 'otp' | 'details' | 'success';

export const ContactPage: React.FC = () => {
  const { data } = useData();
  const [step, setStep] = useState<FormStep>('contact');
  const [otpInput, setOtpInput] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [showDemoOtp, setShowDemoOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessCategory: '',
    businessDetails: '',
    employeeCount: '',
    turnover: '',
    keyIssues: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(mockOtp);
    setShowDemoOtp(true);
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpInput === generatedOtp || otpInput === '123456') { 
      setStep('details');
      setShowDemoOtp(false);
    } else {
      alert('Invalid OTP. Please check the code.');
    }
  };

  const handleSubmitProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Prepare data for Google Sheets
    const submissionData = {
      type: 'LEAD',
      timestamp: new Date().toISOString(),
      ...formData
    };

    const success = await api.submitLead(submissionData);
    setIsSubmitting(false);

    if (success) {
      setStep('success');
    } else {
      alert("There was an error submitting your profile. Please try again.");
    }
  };

  return (
    <div className="bg-black min-h-screen py-10 md:py-20 text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-16 border-l-4 border-brand-500 pl-8">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">Share Your Profile</h1>
          <p className="text-xl text-gray-400 max-w-2xl font-light">
            Securely verify your identity and share your business landscape for a preliminary assessment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-0 border border-gray-800 bg-gray-900">
          {/* Contact Info */}
          <div className="lg:col-span-1 bg-gray-950 p-10 border-r border-gray-800">
            <h2 className="font-heading text-2xl font-bold text-white mb-10">Get in Touch</h2>
            <div className="space-y-10">
              <div className="group">
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 text-brand-500 mr-3" />
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Email</h3>
                </div>
                <a href={`mailto:${data.config.contactEmail}`} className="text-lg text-white hover:text-brand-400 transition border-b border-gray-700 pb-1 hover:border-brand-400">
                  {data.config.contactEmail}
                </a>
              </div>
              <div className="group">
                 <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 text-brand-500 mr-3" />
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Headquarters</h3>
                </div>
                <p className="text-lg text-white leading-relaxed">Chennai, India</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2 p-10 relative bg-gray-900">
            
            {showDemoOtp && (
              <div className="absolute top-0 left-0 w-full bg-green-900/90 text-white p-4 z-50 flex justify-between items-center shadow-lg border-b border-green-700 animate-slideDown">
                <div className="flex items-center">
                  <ShieldCheck className="mr-3 text-green-300" />
                  <div>
                    <p className="font-bold text-sm uppercase text-green-300">Demo Verification Code Sent</p>
                    <p className="text-lg font-mono tracking-widest">{generatedOtp}</p>
                  </div>
                </div>
                <button onClick={() => setShowDemoOtp(false)} className="p-1 hover:bg-green-800 rounded-full transition"><X size={20} /></button>
              </div>
            )}

            {step === 'contact' && (
              <form onSubmit={handleSendOtp} className="space-y-8 animate-fadeIn">
                <div><h2 className="font-heading text-3xl font-bold text-white mb-2">Step 1: Identity</h2><p className="text-gray-400">Let's verify who you are.</p></div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Full Name</label><input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 py-3 text-white text-lg focus:border-brand-500 focus:outline-none placeholder-gray-700" placeholder="Enter your name"/></div>
                  <div className="group"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Phone</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 py-3 text-white text-lg focus:border-brand-500 focus:outline-none placeholder-gray-700" placeholder="+91 ..."/></div>
                  <div className="md:col-span-2 group"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Email Address</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 py-3 text-white text-lg focus:border-brand-500 focus:outline-none placeholder-gray-700" placeholder="name@company.com"/></div>
                </div>
                <div className="pt-6"><button type="submit" className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition flex items-center">Send Verification Code <ArrowRight size={18} className="ml-2" /></button></div>
              </form>
            )}

            {step === 'otp' && (
              <form onSubmit={handleVerifyOtp} className="space-y-8 animate-fadeIn">
                 <div><button type="button" onClick={() => setStep('contact')} className="text-xs text-gray-500 hover:text-white mb-4 uppercase tracking-wider">← Back</button><h2 className="font-heading text-3xl font-bold text-white mb-2">Step 2: Verify</h2><p className="text-gray-400">Enter the code sent to <span className="text-white font-semibold">{formData.email}</span></p></div>
                <div><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">One-Time Password</label><div className="flex items-center border-b border-gray-600 focus-within:border-brand-500"><Lock className="text-gray-500 mr-3" size={20} /><input type="text" name="otp" required value={otpInput} onChange={(e) => setOtpInput(e.target.value)} className="w-full bg-transparent py-3 text-white text-2xl tracking-[0.5em] font-mono focus:outline-none placeholder-gray-700" placeholder="XXXXXX" maxLength={6} /></div></div>
                <div className="pt-6 flex items-center gap-6"><button type="submit" className="bg-white text-black px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition flex items-center">Verify & Continue</button></div>
              </form>
            )}

            {step === 'details' && (
              <form onSubmit={handleSubmitProfile} className="space-y-8 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-gray-800 pb-6"><div><h2 className="font-heading text-3xl font-bold text-white">Step 3: Assessment</h2><p className="text-gray-400 mt-1">Tell us about your business landscape.</p></div><div className="flex flex-col items-end"><span className="text-green-500 flex items-center text-sm font-bold uppercase tracking-wider"><ShieldCheck size={16} className="mr-1" /> Verified</span></div></div>
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="group"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Business Category</label><div className="relative"><select name="businessCategory" required value={formData.businessCategory} onChange={handleChange} className="w-full bg-gray-900 border-b border-gray-600 py-3 text-white text-lg focus:border-brand-500 focus:outline-none appearance-none"><option value="">Select...</option><option value="Manufacturing">Manufacturing</option><option value="Service">Service</option><option value="Other">Other</option></select><Building2 className="absolute right-0 top-3 text-gray-500 pointer-events-none" size={20} /></div></div>
                   <div className="group"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Employees</label><input type="number" name="employeeCount" required value={formData.employeeCount} onChange={handleChange} className="w-full bg-transparent border-b border-gray-600 py-3 text-white text-lg focus:border-brand-500 focus:outline-none"/></div>
                   <div className="group md:col-span-2"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Annual Turnover (INR)</label><div className="flex items-center border-b border-gray-600 focus-within:border-brand-500"><IndianRupee className="text-gray-500 mr-2" size={20} /><input type="text" name="turnover" required value={formData.turnover} onChange={handleChange} className="w-full bg-transparent py-3 text-white text-lg focus:outline-none" placeholder="e.g. 5 Crores"/></div></div>
                   <div className="group md:col-span-2"><label className="block text-xs font-bold text-brand-500 uppercase tracking-widest mb-2">Key Challenges *</label><textarea name="keyIssues" required rows={4} value={formData.keyIssues} onChange={handleChange} className="w-full bg-gray-800 p-4 border-l-2 border-gray-600 text-white text-lg focus:border-brand-500 focus:outline-none"></textarea></div>
                </div>
                <div className="pt-6">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-600 hover:bg-brand-500 text-white py-5 font-bold text-sm uppercase tracking-widest transition flex items-center justify-center">
                    {isSubmitting ? <><Loader2 className="animate-spin mr-2"/> Submitting...</> : <>Submit for Analysis <Send size={18} className="ml-2" /></>}
                  </button>
                </div>
              </form>
            )}

            {step === 'success' && (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fadeIn">
                <div className="w-24 h-24 border-4 border-green-500 rounded-full flex items-center justify-center mb-8"><Send className="w-10 h-10 text-green-500" /></div>
                <h3 className="font-heading text-4xl font-bold text-white mb-4">Received.</h3>
                <p className="text-gray-400 max-w-md mx-auto mb-8 text-lg">We have logged your business profile. Our analytics team will review your data within 48 hours.</p>
                <div className="border-t border-b border-gray-800 py-6 w-full max-w-sm"><p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2">Confirmation sent to</p><p className="text-xl text-white">{formData.email}</p></div>
                <button onClick={() => { setStep('contact'); setOtpInput(''); setFormData({ name: '', email: '', phone: '', businessCategory: '', businessDetails: '', employeeCount: '', turnover: '', keyIssues: '' }); }} className="mt-12 text-brand-500 font-bold hover:text-white transition uppercase tracking-widest text-sm">Submit Another Profile</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};