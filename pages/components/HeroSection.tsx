"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import AlkiBoss from "@/MyPotraits/B.png"
export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = heroRef.current?.querySelectorAll(".anim-el");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      itemScope
      itemType="https://schema.org/Person"
      className="hero-gradient min-h-screen relative overflow-hidden flex items-center
      shadow-lg
      shadow-blue-500/30
      transition-all
      duration-500
      hover:bg-right
      hover:-translate-y-1
      hover:shadow-xl
      hover:shadow-blue-500/50
      active:translate-y-0
      focus:outline-none
      focus:ring-4
      focus:ring-blue-300/40"
    >
      {/* Decorative cloud blobs */}
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)" }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 min-h-screen md:min-h-0 md:py-24">

          {/* LEFT: Text Content */}
          <div className="flex-1 text-center md:text-center z-10">
            {/* Name */}
            <div className="anim-el opacity-0 translate-y-8 transition-all duration-700 delay-100">
              <h1 itemProp="name"
  className="font-playfair font-black leading-none tracking-tight mb-8"
  style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
>
  <span style={{ color: "#0a0a0a" }}>ALKIBOSS</span>{" "}
  <span style={{ color: "#0178ff" }}>CLASSIC</span>
</h1>
            </div>

            {/* Tagline */}
            <div className="anim-el opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <h2 className="font-medium text-gray-700 mb-10 tracking-wide">
  Comedian • Entertainer • Content Creator • Digital Influencer • Viral Video Creator
            </h2>
            </div>
            <div className="max-w-3xl mx-auto mt-10">
  <p itemProp="description" className="text-gray-700 leading-relaxed text-lg">
    Alkiboss Classic is a Kenyan comedian, viral content creator, digital influencer, YouTube creator, TikTok creator, Brand ambassador, Social media personality,
and entertainer known across East Africa and Africa in entertainment, content creation and
    digital influencing known for viral comedy content across YouTube,
    TikTok, Facebook and Instagram. Through storytelling, humor and
    engaging social media content, Alkiboss has reached millions of
    viewers and collaborated with leading brands across East Africa.
  </p>
</div>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm font-semibold">
  <span>10M+ YouTube Views</span>
  <span>7M+ TikTok Likes</span>
  <span>10+ Brand Collaborations</span>
</div>
            {/* CTA */}
            <div className="anim-el opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <a
                href="#contact"
                rel="me noopener noreferrer"
                className="
      group
      inline-flex
      items-center
      justify-center
      gap-2
      h-12
      w-40
      px-8
      rounded-full
      font-montserrat
      font-bold
      text-sm
      tracking-[0.2em]
      uppercase
      text-white
      bg-gradient-to-r
      from-blue-600
      via-cyan-500
      to-blue-600
      bg-[length:200%_100%]
      shadow-lg
      shadow-blue-500/30
      transition-all
      duration-500
      hover:bg-right
      hover:-translate-y-1
      hover:shadow-xl
      hover:shadow-blue-500/50
      active:translate-y-0
      focus:outline-none
      focus:ring-4
      focus:ring-blue-300/40
    "
              >
                Let's Connect

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            {/* Social Icons */}
            <div className="anim-el opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <div className="flex items-center gap-4 justify-center md:justify-center">
                {/* Facebook */}
                <a href="https://www.facebook.com/Alkiboss/" target="_blank" rel="noopener noreferrer"
                  className="social-icon" aria-label="Facebook">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/alkiboss_classic" target="_blank" rel="noopener noreferrer"
                  className="social-icon" aria-label="Instagram">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* TikTok */}
                <a href="https://www.tiktok.com/@alkiboss_classic" target="_blank" rel="noopener noreferrer"
                  className="social-icon" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.88a8.27 8.27 0 0 0 4.83 1.53V7a4.85 4.85 0 0 1-1.06-.31z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@alkibossclassic" target="_blank" rel="noopener noreferrer"
                  className="social-icon" aria-label="YouTube">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                  </svg>
                </a>
                {/* Email */}
                <a href="mailto:alkibossclassic@gmail.com"
                  className="social-icon" aria-label="Email">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Creator Photo */}
          <div className="flex-1 flex justify-center md:justify-end relative z-10">
            <div className="anim-el opacity-0 translate-y-8 transition-all duration-1000 delay-200 animate-float relative">
              {/* Decorative ring behind photo */}
              <div className="absolute inset-0 rounded-full opacity-20 blur-2xl"
                style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />

              <div className="relative" style={{ width: "clamp(280px, 40vw, 520px)", height: "clamp(360px, 52vw, 680px)" }}>
                {/* Photo placeholder with creator styling - using TikTok profile image */}
                <img
                  src="/images/C.png"
                  width={520}
                  height={680}
                  itemProp="image"
                  alt="Alkiboss Classic Kenyan comedian entertainer digital influencer content creator and brand ambassador"
                  className="w-full h-full object-cover object-top"
                  style={{
                    mixBlendMode: "multiply",
                    filter: "contrast(1.05) brightness(1.02)",
                    borderRadius: "0",
                  }}
                  onError={(e) => {
                    // Fallback to a styled placeholder
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = "linear-gradient(135deg, #93c5fd20, #3b82f640)";
                      parent.innerHTML = `
                        <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;">
                          <div style="font-size:120px;">🎭</div>
                          <p style="font-family:Montserrat,sans-serif;font-weight:700;font-size:18px;color:#1d4ed8;text-align:center;padding:0 20px;">Alkiboss Classic</p>
                          <p style="font-family:Montserrat,sans-serif;font-size:13px;color:#6b7280;text-align:center;padding:0 20px;">Kenya's #1 Comedy Creator</p>
                        </div>
                      `;
                    }
                  }}
                >
                <figcaption className="sr-only">
Alkiboss Classic, Kenyan comedian, content creator,
digital influencer and viral entertainment creator.
</figcaption>
                </img>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
