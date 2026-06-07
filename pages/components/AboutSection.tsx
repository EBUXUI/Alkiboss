"use client";
import { useEffect, useRef } from "react";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".about-anim");
            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100");
                el.classList.remove("opacity-0", "translate-x-8", "-translate-x-8");
              }, i * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #f0f7ff 0%, #dceeff 50%, #c8dff7 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #93c5fd, transparent)" }} />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* LEFT: Creator photo */}
          <div className="flex-shrink-0 relative about-anim opacity-0 -translate-x-8 transition-all duration-700">
            <div
              className="relative"
              style={{ width: "clamp(240px, 30vw, 420px)", height: "clamp(320px, 40vw, 560px)" }}
            >
              {/* Subtle glow behind */}
              <div className="absolute inset-0 blur-3xl opacity-30 rounded-full"
                style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }} />

              <img
                src="/images/C.webp"
                alt="Alkiboss Classic"
                className="w-full h-full object-cover object-top relative z-10"
                style={{ mixBlendMode: "multiply" }}
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = "";
                  t.style.display = "none";
                  const p = t.parentElement;
                  if (p) {
                    p.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:100px;z-index:10;position:relative;">🎭</div>`;
                  }
                }}
              />
            </div>
          </div>

          {/* RIGHT: Bio text */}
          <div className="flex-1 flex flex-col text center items-center justify-center about-anim opacity-0 translate-x-8 transition-all duration-700 delay-200">
            <h2
              className="font-dancing text center mb-6"
              style={{ fontSize: "clamp(3rem, 6vw, 5rem)", color: "#0a0a0a", lineHeight: 1.1 }}
            >
              Hey,
            </h2>

            <p className="font-montserrat text-gray-800 leading-relaxed text-center md:text-left"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              I&apos;m <strong>Alkiboss Classic</strong>, a content creator, comedian, and digital entertainer
              making waves across East Africa and beyond. I craft scroll-stopping prank, comedy, and
              lifestyle content that keeps audiences genuinely hooked from the first second to the last frame.
            </p>

            <p className="font-montserrat text-gray-800 leading-relaxed mt-5 text-center md:text-left"
              style={{ fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)" }}>
              Beyond the laughs, I partner with global brands to create authentic, high-performing
              promotional content that actually converts — not just views, but real engagement from a
              loyal audience aged 18 to 65+. I&apos;ve worked with brands across fintech, gaming, tech,
              and telecom including Pocket Option, IQ Broker, Roobet, MegaPari, Infinix, Numero eSIM,
              and PlayMaster.
            </p>


            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">

              {["Comedy", "Pranks", "Brand Deals", "UGC Creator", "Multi-Platform"].map((tag) => (
                <span key={tag}
                  className="px-4 py-2 rounded-full font-montserrat font-semibold text-xs tracking-wider uppercase
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
    ">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
