
import React from 'react';

interface RazorpayButtonProps {
  amount: number;
  currency?: string;
  name?: string;
  description?: string;
  onSuccess?: (response: any) => void;
  onFailure?: (error: any) => void;
  className?: string;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export const RazorpayButton: React.FC<RazorpayButtonProps> = ({
  amount,
  currency = 'INR',
  name = 'Analytics Spire',
  description = 'Service Payment',
  onSuccess,
  onFailure,
  className = "",
}) => {
  const handlePayment = () => {
    if (!window.Razorpay) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_placeholder', // Enter the Key ID generated from the Dashboard
      amount: amount * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency,
      name,
      description,
      image: 'https://ui-avatars.com/api/?name=Analytics+Spire&background=0284c7&color=fff&bold=true&size=512',
      handler: function (response: any) {
        if (onSuccess) onSuccess(response);
        else {
          alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        }
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      notes: {
        address: 'Analytics Spire Office',
      },
      theme: {
        color: '#0ea5e9',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response: any) {
      if (onFailure) onFailure(response.error);
      else {
        alert('Payment Failed: ' + response.error.description);
      }
    });
    rzp.open();
  };

  return (
    <button
      onClick={handlePayment}
      aria-label={`Pay ${amount} ${currency} with Razorpay`}
      className={`bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-brand-900/20 flex items-center justify-center space-x-2 ${className}`}
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
      </svg>
      <span>Pay with Razorpay</span>
    </button>
  );
};
