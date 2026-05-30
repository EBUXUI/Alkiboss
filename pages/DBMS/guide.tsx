// src/app/page.tsx — FINAL: NO KEY WARNINGS, EVERYTHING PERFECT
import SubmitButton from './submitButton';
import { Trash2, Edit3 } from 'lucide-react';
import { db } from '@/lib/db';
import { luvParse } from '@luvra/luvsql';
import { revalidatePath } from 'next/cache';
import { logSoulBaptism } from '@/lib/Library/Logger';

export const revalidate = 0;

async function addUser(formData: FormData) {
  'use server';
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const price = formData.get('price')?.toString().trim();
  const password = formData.get('password')?.toString();

  if (!name || !email || !password || password.length < 4) return;

  const createdAt = new Date().toISOString();

  try {
    await db.execute(luvParse('DEFINE|BLUEPRINT users name TEXT email TEXT SECURE price TEXT SECURE password TEXT SECURE created_at TEXT')).catch(() => {});
  } catch {}

  await db.execute(luvParse(`STORE|ENTRY users name "${name}" email "${email}" price "${price}" password "${password}" created_at "${createdAt}"`));

  logSoulBaptism({ type: 'STORE|ENTRY', Canvas: 'users', values: [name, email, price, createdAt] });

  revalidatePath('/');
}



export default async function Home() {
  


  return (
    <>
      <head>
        <title>LuvSQL Testing | SQL Made Simple.</title>
      </head>

      <div className="relative min-h-screen bg-black text-white font-sans antialiased">
        {/* BACKGROUND */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#051505] via-black to-[#0a2e0a]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a0f]/40 via-transparent to-[#0a3310]/20" />
          <div className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none"/>
        </div>

        <div className="relative z-10">
          <div className="min-h-screen flex flex-col lg:flex-row">
            {/* LEFT: HERO + CARDS */}
            <div className="flex-1 flex flex-col justify-between p-8 lg:p-20 bg-gradient-to-br from-[#051505]/90 via-black/80 to-[#0a2e0a]/90 backdrop-blur-sm">
              <div>
                <h1 className="text-5xl lg:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#4ade80] via-[#22d3ee] to-[#2dd4bf] leading-tight">
                  LuvSQL
                </h1>
                <p className="text-lg lg:text-2xl font-light text-[#86efac] mt-4 italic">The encrypted Love forest</p>
                <p className="text-sm lg:text-base text-[#86efac]/80 mt-6 max-w-xl opacity-90 leading-relaxed">
                  Zero-config • File-based • End-to-end encrypted • Grown in silence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-16 lg:mt-0">
                <div className="group bg-[#051505]/60 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl hover:shadow-[#4ade80]/30 transition-all duration-500">
                  <img src="/images/OperatingManagerII.jpg" alt="Login" className="w-full h-52 object-cover rounded-2xl mb-8 shadow-lg" />
                  <h3 className="text-xl font-bold text-[#86efac]">Login</h3>
                  <p className="text-[#86efac]/80 text-sm mt-2 italic">Enter the forest</p>
                  
                </div>

                <div className="group bg-[#051505]/60 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl hover:shadow-[#22d3ee]/30 transition-all duration-500">
                  <img src="/images/StoreEntryIII.jpg" alt="Register" className="w-full h-52 object-cover rounded-2xl mb-8 shadow-lg" />
                  <h3 className="text-xl font-bold text-[#22d3ee]">Register</h3>
                  <p className="text-[#22d3ee]/80 text-sm mt-2 italic">Harvest Your Data</p>
                  
                </div>
              </div>
            </div>

            {/* RIGHT: FORM */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-20 bg-gradient-to-bl from-[#0a2e0a]/90 via-black/70 to-[#051505]/90 backdrop-blur-sm">
              <div className="w-full max-w-md bg-[#051505]/80 backdrop-blur-3xl rounded-3xl p-12 shadow-2xl border border-[#166534]/50">
                <h2 className="text-3xl lg:text-4xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#4ade80] to-[#22d3ee] mb-4">
                  Secure Your Data
                </h2>
                <p className="text-center text-[#86efac] text-sm mb-10 italic">Your data. Your roots. Forever.</p>

                <form action={addUser} className="space-y-6">
                  <input name="name" placeholder="Name" required className="w-full px-6 py-4 bg-[#0a2e0a]/70 rounded-2xl placeholder-[#86efac]/70 focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition text-sm" />
                  <input name="email" type="email" placeholder="Email" required className="w-full px-6 py-4 bg-[#0a2e0a]/70 rounded-2xl placeholder-[#86efac]/70 focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition text-sm" />
                   <input name="price" type="price" placeholder="Amount in Ksh." required className="w-full px-6 py-4 bg-[#0a2e0a]/70 rounded-2xl placeholder-[#86efac]/70 focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition text-sm" />
                  <input name="password" type="password" placeholder="Password (min 4)" minLength={4} required className="w-full px-6 py-4 bg-[#0a2e0a]/70 rounded-2xl placeholder-[#86efac]/70 focus:outline-none focus:ring-2 focus:ring-[#4ade80] transition text-sm" />
                  <SubmitButton />
                </form>
              </div>
            </div>
          </div>

         
        </div>
      </div>

    </>
  );
}