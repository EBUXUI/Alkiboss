'use client';

import { useEffect, useState } from 'react';
import { Inter_Tight } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
});

interface SuccessCookieProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function SuccessCookie({ message, isVisible, onClose }: SuccessCookieProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4500); // Auto dismiss after 4.5 seconds

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      <div 
        className={`
          ${interTight.variable}
          bg-gradient-to-br from-white/95 via-white/90 to-[#f0f9ff]/95 
          backdrop-blur-3xl 
          border border-[#00b4ff]/30 
          shadow-2xl shadow-[#00b4ff]/20
          rounded-3xl 
          px-10 py-8 
          max-w-md w-full mx-4
          text-center
          animate-in fade-in slide-in-from-bottom-4 duration-500
          pointer-events-auto
        `}
      >
        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-[#00b4ff] to-[#0077ff] rounded-2xl flex items-center justify-center mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-[#1e2937] mb-2 tracking-tight">
          Registration Successful!
        </h3>
        
        <p className="text-[#475569] text-[15px] leading-relaxed">
          {message}
        </p>

        <div className="h-1.5 bg-gradient-to-r from-[#00b4ff] via-[#22d3ee] to-[#00b4ff] rounded-full mt-8 mx-auto w-24" />
      </div>
    </div>
  );
}