"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
export default function AboutSection() {
   const heroRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);


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
    const els = heroRef.current?.querySelectorAll(".about-anim");
    els?.forEach((el) => observer.observe(el));
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

              <figure itemProp="image">
  <Image
    src="/images/C.webp"
    alt="Official portrait of Alkiboss Classic"
    width={520}
    height={680}
    priority
    className="w-full h-full object-cover object-top"
    style={{
      mixBlendMode: "multiply",
      filter: "contrast(1.05) brightness(1.02)",
      borderRadius: "0",
    }}
  />

  <figcaption className="sr-only">
    Official portrait of Alkiboss Classic, Kenyan comedian,
    entertainer, content creator and digital influencer.
  </figcaption>
</figure>
              
            </div>
          </div>

          {/* RIGHT: Bio text */}
          <div className="flex-1 about-anim opacity-0 translate-x-8 transition-all duration-700 delay-200">
            <h2
              className="font-dancing mb-6"
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
