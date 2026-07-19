
import React, { useState, useEffect } from 'react';
import { RazorpayButton } from '../components/RazorpayButton';
import { CreditCard, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/SEO';

export const PaymentPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(99);
  const [selectedService, setSelectedService] = useState<string>('Webinar - Turn your MSME business into a Growth Machine');
  const [paymentStep, setPaymentStep] = useState<'selection' | 'success'>('selection');

  useEffect(() => {
    // Automatically scroll to payment methods when landing on this page
    const paymentElement = document.getElementById('payment-methods');
    if (paymentElement && paymentStep === 'selection') {
      paymentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [paymentStep]);

  const upiLink = `upi://pay?pa=priyaanand3009-1@oksbi&pn=${encodeURIComponent('Analytics Spire')}&am=${amount}&cu=INR`;

  const handlePaymentClick = () => {
    // We assume they are going to pay once they click
    setTimeout(() => {
      setPaymentStep('success');
    }, 1500); 
  };

  const services = [
    { name: 'Webinar - Turn your MSME business into a Growth Machine', price: 99, originalPrice: 999, description: 'Limited time offer price' },
    { name: 'Consultation', price: 1000, description: '1-hour strategy session' },
    { name: 'Inventory Audit', price: 5000, description: 'Full warehouse audit' },
    { name: 'Training Workshop', price: 15000, description: 'Full day team training' },
    { name: 'Custom Solution', price: 0, description: 'Enter custom amount' },
  ];

  return (
    <div className="bg-gray-950 min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <SEO 
        title="Secure Consultation Payment | Analytics Spire"
        description="Make secure payments for your MSME business consulting, coaching sessions, or specialized training programs with Analytics Spire."
        keywords="Secure Payment, Razorpay, MSME Consulting, Analytics Spire"
        url="https://www.analyticsspire.com/payment"
        schemaType="Breadcrumb"
      />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
            Secure payment for consulting and training
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Pay for your consulting services securely via Razorpay. Choose a service or enter a custom amount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-white font-bold mb-2">Secure Checkout</h3>
            <p className="text-gray-500 text-sm">100% secure payments powered by Razorpay</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-white font-bold mb-2">Instant Confirmation</h3>
            <p className="text-gray-500 text-sm">Get immediate payment receipt and confirmation</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-500/10 rounded-full flex items-center justify-center mb-4">
              <CreditCard className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-white font-bold mb-2">Multiple Options</h3>
            <h3 className="text-white font-bold mb-2">Multiple Options</h3>
            <p className="text-gray-500 text-sm">Pay via UPI, Cards, Netbanking, or Wallets</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-heading font-bold text-white mb-6">Select Service</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <button
                      key={service.name}
                      onClick={() => {
                        setSelectedService(service.name);
                        if (service.price > 0) setAmount(service.price);
                      }}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                        selectedService === service.name
                          ? 'bg-brand-500/10 border-brand-500 shadow-lg shadow-brand-500/5'
                          : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="text-white font-bold">{service.name}</h4>
                          <p className="text-gray-500 text-xs">{service.description}</p>
                        </div>
                        <div className="flex flex-col items-end">
                          {service.originalPrice && (
                            <span className="text-gray-500 line-through text-xs">₹{service.originalPrice.toLocaleString()}</span>
                          )}
                          {service.price > 0 && (
                            <span className="text-brand-400 font-bold">₹{service.price.toLocaleString()}</span>
                          )}
                        </div>
                        {selectedService === service.name && (
                          <CheckCircle2 className="w-5 h-5 text-brand-500 ml-2" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-6">Payment Details</h2>
                  <div className="mb-8">
                    <label className="block text-gray-400 text-sm mb-2">Amount (INR)</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">₹</span>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        disabled={selectedService !== 'Custom Solution'}
                        className="w-full bg-gray-900 border border-gray-700 rounded-xl py-4 pl-10 pr-4 text-white font-bold text-2xl focus:outline-none focus:border-brand-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="0.00"
                      />
                    </div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Service</span>
                      <span className="text-gray-300">{selectedService}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Processing Fee</span>
                      <span className="text-gray-300">₹0.00</span>
                    </div>
                    <div className="h-px bg-gray-700 my-2"></div>
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-white">Total Amount</span>
                      <span className="text-brand-500">₹{amount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Razorpay disabled temporarily */}
                <div id="payment-methods">
                  {/* 
                  <RazorpayButton 
                    amount={amount} 
                    description={`Payment for ${selectedService}`}
                    className="w-full py-5 text-lg mb-8"
                  />
                  */}
                </div>

                {/* QR Code Section - Primary Payment Method */}
                {paymentStep === 'selection' ? (
                  <div className="bg-gray-900/50 border border-brand-500/30 rounded-2xl p-8 text-center shadow-lg shadow-brand-500/5">
                    <h3 className="text-white font-bold mb-6 flex items-center justify-center text-xl">
                      <span className="w-3 h-3 bg-brand-500 rounded-full mr-3 animate-pulse"></span>
                      Pay via QR Code
                    </h3>
                    
                    <div className="bg-white p-4 rounded-xl inline-block mb-4 shadow-lg border-2 border-brand-500/20">
                      {/* DYNAMIC UPI QR CODE */}
                      <a href={upiLink} onClick={handlePaymentClick} className="cursor-pointer block">
                        <img 
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiLink)}`} 
                          alt="Payment QR Code" 
                          className="w-48 h-48 md:w-56 md:h-56"
                        />
                      </a>
                    </div>
                    
                    {/* MOBILE-ONLY: TAP TO PAY BUTTON */}
                    <div className="md:hidden px-4 mb-6">
                      <a 
                        href={upiLink}
                        onClick={handlePaymentClick}
                        className="w-full flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-white py-4 rounded-xl font-bold transition-all shadow-lg active:scale-95"
                      >
                        <Zap size={20} />
                        Open UPI App to Pay
                      </a>
                      
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText('priyaanand3009-1@oksbi');
                          handlePaymentClick();
                          alert('UPI ID Copied! You can now paste it in your GPay/PhonePe. Once done, return here to join the community.');
                        }}
                        className="w-full mt-3 flex items-center justify-center gap-2 bg-gray-800 text-gray-300 py-3 rounded-xl text-sm border border-gray-700 hover:bg-gray-700"
                      >
                        Copy UPI ID (Fallback)
                      </button>
                      
                      <p className="text-gray-400 text-[10px] mt-4 italic px-4 leading-tight">
                        *Tapping "Open UPI App" launches GPay/PhonePe automatically. If it doesn't work on your device, use "Copy UPI ID".
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-6 hidden md:block">
                      <p className="text-white font-bold text-lg">Analytics Spire</p>
                      <div className="inline-flex items-center bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/30">
                        <span className="text-brand-400 text-xs font-mono">priyaanand3009-1@oksbi</span>
                      </div>
                      <p className="text-gray-500 text-sm">Scan to pay <span className="text-white font-bold">₹{amount.toLocaleString()}</span> via UPI</p>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-800">
                      <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest font-bold">Bank Details</p>
                      <div className="grid grid-cols-2 gap-2 text-left text-xs bg-black/40 p-3 rounded-lg">
                        <span className="text-gray-500">Bank:</span>
                        <span className="text-gray-300">State Bank of India</span>
                        <span className="text-gray-500">A/C No:</span>
                        <span className="text-gray-300">XXXXXXXXXXXX</span>
                        <span className="text-gray-500">IFSC:</span>
                        <span className="text-gray-300">SBIN0010515</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setPaymentStep('success')}
                      className="mt-6 text-brand-500 text-sm font-bold hover:text-white transition underline underline-offset-4"
                    >
                      Already Paid? Click here to join the community
                    </button>
                  </div>
                ) : (
                  <div className="bg-gray-900 border-2 border-green-500/30 rounded-3xl p-8 md:p-12 text-center animate-fadeIn">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="text-green-500 w-12 h-12" />
                    </div>
                    <h3 className="text-3xl font-black text-white mb-4">You're In!</h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto text-lg">
                      Thank you for choosing Analytics Spire. Final step to confirm your spot in the Webinar:
                    </p>
                    
                    <div className="bg-gray-950 border border-gray-800 p-8 rounded-2xl mb-8">
                      <p className="text-brand-400 font-bold uppercase tracking-widest text-sm mb-4">Action Required</p>
                      <h4 className="text-xl font-bold text-white mb-6">Join our exclusive WhatsApp community for all updates & links.</h4>
                      <a 
                        href="https://chat.whatsapp.com/YOUR_LINK_HERE" 
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-5 rounded-2xl text-xl font-black transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:scale-105 active:scale-95"
                      >
                        Join WhatsApp Community
                      </a>
                    </div>

                    <button 
                      onClick={() => setPaymentStep('selection')}
                      className="text-gray-500 hover:text-white text-sm transition"
                    >
                      Wait, I need to pay again / change service
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
