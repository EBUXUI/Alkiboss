// app/AdminForest.tsx (or wherever this page/component lives)
import { Trash2, Edit3 } from 'lucide-react';
import { db } from '@/lib/db';
import { luvParse } from '@luvra/luvsql';
import { revalidatePath } from 'next/cache';
import path from 'path';
import fs from 'fs/promises';

function formatDateTime(dateStr: string): string {
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) +
    ' at ' +
    date
      .toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .replace(' ', '')
      .toUpperCase()
  );
}

async function deleteUser(id: string) {
  'use server';
  if (!id) return;
  try {
    await db.execute(luvParse(`ERASE|ENTRY users _id "${id}"`));
    revalidatePath('/');
  } catch (err) {
    console.error('Delete failed:', err);
  }
}

async function refineUser(id: string, formData: FormData) {
  'use server';
  try {
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const price = formData.get('price')?.toString().trim();

    if (!name || !email) throw new Error('Missing required fields');

    await db.execute(
      luvParse(
        `REFINE|ENTRY users _id "${id}" SET name "${name}" email "${email}" price "${price}"`
      )
    );
    revalidatePath('/');
  } catch (err) {
    console.error('Refine failed:', err);
  }
}

export default async function AdminForest() {
  let users: any[] = [];

  try {
    // Fetch all users via LuvSQL (fast & consistent)
    const result = await db.execute(
      luvParse("RETRIEVE|ENTRY users *")
    );
    users = (result as any)?.horizontalPanel || [];

    // Sort in-memory (fast for small datasets)
    users = [...users].sort(
      (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (err) {
    console.error('LuvSQL retrieval failed:', err);
    users = [];
  }

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
          <div className="absolute inset-0 opacity-40 mix-blend-soft-light pointer-events-none" />
        </div>

        {/* VAULT — FIXED KEY WARNING */}
        <div className="relative z-10">
          <div className="bg-[#051505]/95 backdrop-blur-3xl py-20">
            <div className="max-w-5xl mx-auto px-8 lg:px-16">
              <h2 className="text-4xl lg:text-5xl font-black text-center bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#4ade80] mb-6">
                Live Encrypted Forest
              </h2>
              <p className="text-center text-[#86efac]/80 text-sm mb-16 italic">
                Every entry carries its true moment of creation.
              </p>

              {users.length === 0 ? (
                <div className="text-center py-32">
                  <p className="text-[#86efac]/80 text-sm mb-16 italic">
                    Every true moment of creation is rendered on this canvas.
                  </p>
                </div>
              ) : (
                <div className="space-y-10">
                  {users.map((user: any, index: number) => {
                    const userId = user._id?.toString() || `fallback-${index}`;
                    const timeLabel = formatDateTime(
                      user.created_at || new Date().toISOString()
                    );

                    return (
                      <div
                        key={userId}
                        className="relative p-10 rounded-3xl backdrop-blur-2xl transition-all duration-700 group
                          bg-gradient-to-r from-[#166534]/60 via-[#0d9488]/50 to-[#0f766e]/60
                          shadow-2xl shadow-[#166534]/50 ring-4 ring-[#4ade80]/40
                          hover:ring-[#4ade80]/70 hover:shadow-[#4ade80]/30
                          border border-[#4ade80]/30 animate-pulse-slow"
                      >
                        {userId !== `fallback-${index}` && (
                          <>
                            <form
                              action={() => deleteUser(userId)}
                              className="absolute top-4 right-16 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <button
                                type="submit"
                                className="p-3 bg-red-600/90 hover:bg-red-500 rounded-full shadow-lg hover:scale-110 transition-all"
                              >
                                <Trash2 size={18} className="text-white" />
                              </button>
                            </form>
                            <form
                              action={refineUser.bind(null, userId)}
                              className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <button
                                type="submit"
                                className="p-3 bg-blue-600/90 hover:bg-blue-500 rounded-full shadow-lg hover:scale-110 transition-all"
                              >
                                <Edit3 size={18} className="text-white" />
                              </button>
                            </form>
                          </>
                        )}
                        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
                          <div className="flex-1">
                            <div className="text-3xl font-black text-[#86efac] drop-shadow-md">
                              {user.name}
                            </div>
                            <div className="font-mono text-lg mt-3 text-[#4ade80]/90">
                              {"Secured"}
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-medium tracking-wider text-[#86efac]/60 uppercase">
                              Created on
                            </div>
                            <div className="text-sm font-light text-[#4ade80] mt-1 tracking-wide">
                              {timeLabel}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-16 text-[#86efac] text-xs border-t border-[#166534]/50">
        <p>
          Created by <span className="font-bold text-[#86efac]">Inale</span> • Powered by{' '}
          <span className="font-bold text-[#22d3ee]">@luvra/luvsql</span>
        </p>
        <p className="mt-2 text-[#4ade80]">
          Download →{' '}
          <a
            href="https://github.com/luvra/luvsql"
            target="_blank"
            className="underline hover:text-[#22d3ee]"
          >
            github.com/luvra/luvsql
          </a>
        </p>
      </footer>
    </>
  );
}