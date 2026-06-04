"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const brands = [
  { name: "Betika", image: "/images/Betika.png" },
  { name: "BangBet", image: "/images/BangBet.png" },
  { name: "Gosupa", image: "/images/Gosupa.jpg" },
  { name: "KE7", image: "/images/KE7.jpg" },
  { name: "KessGame", image: "/images/KessGame.png" },
  { name: "Pocket Option", image: "/images/PocketOption.jpg" },
  { name: "Numero eSIM", image: "/images/Numero.jpg" },
  { name: "Pepeta", image: "/images/Pepeta.jpg" },
  { name: "Safaricom", image: "/images/Safaricom.jpg" },
  { name: "Safaricom Kenya", image: "/images/Safarico.jpg" },
];

export default function CollaboratedWith() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements =
              entry.target.querySelectorAll<HTMLElement>(".brand-anim");

            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "scale-100");
                el.classList.remove("opacity-0", "scale-90");
              }, index * 80);
            });
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={ref}
      className="
      hero-gradient py-20 md:py-28
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
      <div className="container flex flex-col gap-5 items-center justify-center mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <h2
          className=" text-center mb-4 tracking-tight"
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#0a0a0a",
          }}
        >
          Brand <span style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            color: "#115ed1ff",
          }}>Partners</span>
        </h2>

        <div className="w-24 h-1 mx-auto mb-16 rounded-full" />

        {/* Brands Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="brand-anim opacity-0 scale-90 transition-all duration-500 flex flex-col items-center gap-3"
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-[3px] border-gray-200 shadow-lg overflow-hidden">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-contain p-2"
                  priority={false}
                />
              </div>

              <span className="font-montserrat font-semibold text-xs text-center text-gray-600 max-w-[90px] leading-tight">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}