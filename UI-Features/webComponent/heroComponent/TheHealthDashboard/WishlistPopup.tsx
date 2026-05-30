'use client';

import { useEffect } from 'react';
import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  weight: ['600', '700'],
  display: 'swap',
});

interface RegistrationSuccessPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

export default function RegistrationSuccessPopup({ 
  isVisible, 
  onClose 
}: RegistrationSuccessPopupProps) {

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 5000); // Auto close after 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div 
        className={`
          ${interTight.variable}
          bg-gradient-to-br from-white via-white to-[#f0f9ff] 
          backdrop-blur-3xl 
          border border-[#00b4ff]/40 
          shadow-2xl shadow-[#00b4ff]/30
          rounded-3xl 
          p-12 max-w-md w-full mx-4 text-center
          animate-in fade-in zoom-in-95 duration-400
        `}
      >
        <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-11 h-11 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
          Registration Successful!
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Login credentials have been sent to your email.<br />
          Please check your inbox (and spam folder).
        </p>

        <button
          onClick={onClose}
          className="w-full py-4 bg-gradient-to-r from-[#00b4ff] to-[#0077ff] hover:from-[#0077ff] hover:to-[#00b4ff] text-white font-semibold rounded-2xl transition-all duration-200 active:scale-[0.98]"
        >
          Continue to Login
        </button>
      </div>
    </div>
  );
}