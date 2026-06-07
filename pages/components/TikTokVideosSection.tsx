"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Your real videos (8 items)
 */
const videos = [
  "/Videos/VideoC.mp4",
  "/Videos/VideoE.mp4",
  "/Videos/VideoI.mp4",
  "/Videos/VideoJ.mp4",
  "/Videos/VideoK.mp4",
  "/Videos/VideoP.mp4",
  "/Videos/VideoA.mp4",
  "/Videos/VideoK.mp4",
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
    <div
      className="
        relative
        w-[300px]
        sm:w-[320px]
        md:w-[240px]
        lg:w-[250px]
        xl:w-[260px]
        aspect-[9/19.5]
        mx-auto
        group
      "
    >
      {/* Ground Shadow */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[75%] h-8 bg-black/40 blur-3xl rounded-full" />

      {/* Titanium Frame */}
      <div
        className="
          absolute inset-0
          rounded-[3.5rem]
          bg-gradient-to-b
          from-neutral-500
          via-neutral-800
          to-black
          border
          border-neutral-700
          overflow-hidden
          shadow-[0_40px_80px_rgba(0,0,0,0.45)]
          transition-all
          duration-500
          group-hover:scale-[1.03]
          group-hover:-translate-y-2
        "
      >
        {/* Metal Edge */}
        <div className="absolute inset-[2px] rounded-[3.3rem] border border-white/10 pointer-events-none" />

        {/* Speaker */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30">
          <div className="w-14 h-[3px] rounded-full bg-neutral-700 shadow-inner" />
        </div>

        {/* Camera */}
        <div className="absolute top-5 right-[43%] z-30">
          <div className="w-2.5 h-2.5 rounded-full bg-black border border-neutral-600">
            <div className="w-full h-full rounded-full bg-gradient-to-br from-sky-400/40 to-transparent" />
          </div>
        </div>

        {/* Screen */}
        <div
          className="absolute overflow-hidden bg-black shadow-inner"
          style={{
            top: "2.5%",
            left: "2.5%",
            width: "95%",
            height: "95%",
            borderRadius: "3rem",
          }}
        >
          <AutoPlayVideo src={video} />

          {/* OLED Depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />

          {/* Glass Reflection */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-white/[0.03] to-transparent pointer-events-none" />
        </div>

        {/* Volume Buttons */}
        <div className="absolute right-[-2px] top-28 w-[4px] h-16 bg-neutral-600 rounded-full" />
        <div className="absolute right-[-2px] top-48 w-[4px] h-10 bg-neutral-600 rounded-full" />

        {/* Power Button */}
        <div className="absolute left-[-2px] top-40 w-[4px] h-14 bg-neutral-600 rounded-full" />

        {/* Premium Reflection */}
        <div className="absolute inset-0 rounded-[3.5rem] bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" />
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
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl text-black">
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
