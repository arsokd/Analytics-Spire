
import React, { useState } from 'react';
import { RazorpayButton } from '../components/RazorpayButton';
import { CreditCard, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

export const PaymentPage: React.FC = () => {
  const [amount, setAmount] = useState<number>(1000);
  const [selectedService, setSelectedService] = useState<string>('Consultation');

  const services = [
    { name: 'Consultation', price: 1000, description: '1-hour strategy session' },
    { name: 'Inventory Audit', price: 5000, description: 'Full warehouse audit' },
    { name: 'Training Workshop', price: 15000, description: 'Full day team training' },
    { name: 'Custom Solution', price: 0, description: 'Enter custom amount' },
  ];

  return (
    <div className="bg-gray-950 min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 tracking-tight">
            Secure <span className="text-brand-500">Payments</span>
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
                        {service.price > 0 && (
                          <span className="text-brand-400 font-bold">₹{service.price.toLocaleString()}</span>
                        )}
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

                <RazorpayButton 
                  amount={amount} 
                  description={`Payment for ${selectedService}`}
                  className="w-full py-5 text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
