// src/app/submitButton.tsx — BOUNCING WORDS + FOREST DARK GREEN PERFECTION
'use client';

import { useFormStatus } from 'react-dom';
import { useState } from 'react';

export default function SubmitButton() {
  const { pending } = useFormStatus();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="submit"
      disabled={pending}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full overflow-hidden px-12 py-6 bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700 rounded-2xl font-black text-2xl tracking-wider shadow-2xl transition-all duration-500 hover:shadow-green-600/60 disabled:opacity-70 disabled:cursor-not-allowed group border border-green-800/50"
    >
      {/* BOUNCING TEXT — FOREST GLOW */}
      <span className="relative block transition-all duration-700 ease-out group-hover:-translate-y-16">
        <span className="block text-green-300 drop-shadow-lg">
          {pending ? 'Creating...' : 'Create Account'}
        </span>
        <span className="block absolute inset-0 top-16 text-green-200 font-extrabold drop-shadow-2xl">
          {pending ? 'Creating...' : 'Create Account'}
        </span>
      </span>

      {/* DEEP FOREST GLOW PULSE ON HOVER */}
      <span
        className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/0 via-emerald-400/40 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl ${
          isHovered ? 'animate-pulse' : ''
        }`}
      />

      {/* SUBTLE INNER GLOW */}
      <span className="absolute inset-1 rounded-2xl bg-gradient-to-r from-green-800/30 to-transparent opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
    </button>
  );
}