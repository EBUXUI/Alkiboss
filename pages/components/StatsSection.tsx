"use client";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel?: string;
}

/**
 * Animated counter
 */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          const duration = 1600;
          const steps = 60;
          const increment = target / steps;

          let current = 0;

          const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/**
 * MAIN SECTION
 */
export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".stat-anim");

            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      icon: "▶",
      value: "10M+",
      label: "YOUTUBE",
      sublabel: "VIEWS",
    },
    {
      icon: "👥",
      value: "10+",
      label: "BRAND",
      sublabel: "COLLABORATIONS",
    },
    {
      icon: "⚡",
      value: "HIGH",
      label: "ENGAGEMENT",
      sublabel: "RATE",
    },
    {
      icon: "🌐",
      value: "MULTI",
      label: "PLATFORM",
      sublabel: "CREATOR",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-24 md:py-32 bg-[#0b0f19]"
    >
      {/* Luxury background glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-16 flex items-center justify-center">
          <h1 className="font-black tracking-tight text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}
          >
            BY THE NUMBERS
          </h1>

          <div className="w-28 h-[2px] bg-gradient-to-r  mx-auto mt-4 rounded-full" />

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-center leading-relaxed">
            Performance metrics reflecting reach, engagement, and impact across platforms.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">

          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-anim opacity-0 translate-y-10 transition-all duration-700 group"
            >
              {/* CARD */}
              <div className="
                relative p-8 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_40px_rgba(0,0,0,0.4)]
                hover:scale-[1.04] hover:border-white/20
                transition-all duration-300 text-center
              ">

                {/* glow accent */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-blue-500/10 to-cyan-400/10" />

                {/* ICON */}
                <div className="text-2xl mb-6 opacity-80">
                  {stat.icon}
                </div>

                {/* VALUE */}
                <div className="text-white font-black tracking-tight mb-2"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  {stat.value}
                </div>

                {/* LABEL */}
                <div className="text-xs tracking-[0.25em] uppercase text-gray-300 font-semibold">
                  {stat.label}
                </div>

                {/* SUBLABEL */}
                {stat.sublabel && (
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500 mt-1">
                    {stat.sublabel}
                  </div>
                )}

                {/* subtle shine line */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
