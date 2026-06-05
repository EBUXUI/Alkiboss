"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Your real videos (8 items)
 */
const videos = [
  "/Videos/VideoA.mp4",
  "/Videos/VideoC.mp4",
  "/Videos/VideoE.mp4",
  "/Videos/VideoI.mp4",
  "/Videos/VideoJ.mp4",
  "/Videos/VideoK.mp4",
  "/Videos/VideoP.mp4",
  "/Videos/VideoA.mp4",
];


/**
 * Auto-play video only when visible
 */
function AutoPlayVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const [loaded, setLoaded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowAll(true);
    }, 1500);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loaded) {
            setLoaded(true);

            requestAnimationFrame(() => {
              video.load();
              video.play().catch(() => { });
            });
          } else {
            video.play().catch(() => { });
          }
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (

    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster="/images/C.webp"
      className="absolute inset-0 w-full h-full object-cover">
       <track
    kind="captions"
    src="/captions/empty.vtt"
    srcLang="en"
    label="English"
  />
      {loaded && (
        <source
          src={src}
          type="video/mp4"
        />
      )}
    </video>
  );
}

/**
 * PREMIUM ANDROID DEVICE MOCKUP
 */
function AndroidDevice({ video }: { video: string }) {
  return (
    <div className="relative w-[280px] md:w-[220px] lg:w-[240px] aspect-[9/19] mx-auto group">

      {/* OUTER SHADOW GLOW */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-black/30 blur-2xl rounded-full" />

      {/* PHONE BODY */}
      <div className="absolute inset-0 rounded-[3rem] bg-black shadow-2xl border border-neutral-800 overflow-hidden transition-transform duration-300 group-hover:scale-[1.03]">

        {/* TOP CAMERA + SPEAKER */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
          <div className="w-2 h-2 rounded-full bg-neutral-700" />
          <div className="w-12 h-1.5 rounded-full bg-neutral-800" />
        </div>

        {/* SCREEN */}
        <div
          className="absolute overflow-hidden bg-black"
          style={{
            top: "6%",
            left: "5%",
            width: "90%",
            height: "88%",
            borderRadius: "2.2rem",
          }}
        >
          <AutoPlayVideo src={video} />

          {/* subtle vignette for realism */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none" />
        </div>

        {/* GLASS REFLECTION */}
        <div className="absolute inset-0 rounded-[3rem] pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );
}

/**
 * MAIN SECTION
 */
export default function AndroidVideoGrid() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".anim");

            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 bg-white relative overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-300/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-4">
          <h2 className="font-black text-4xl md:text-5xl text-black">
            Viral Content Showcase
          </h2>
        </div>

        <p className="text-center text-slate-700 tracking-[0.25em] uppercase text-sm mb-10">
          Android Experience Grid
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {videos.map((video, i) => (
            <div
              key={i}
              className="anim opacity-0 translate-y-10 transition-all duration-700 flex justify-center"
            >
              <AndroidDevice video={video} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
