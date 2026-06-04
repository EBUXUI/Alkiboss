//import Footer from '@/Partitions/Pads/FooterPad';

import { PropsWithChildren } from "react";
// components/LoadingBar.tsx
import React from 'react';
import styles from '@/styles/Desktop.module.css';
import { useEffect, useRef } from "react";

export default function SectionComponent({ children }: PropsWithChildren) {
  const heroRef = useRef<HTMLDivElement>(null);
   
  return (
    <>
      <section 
      className={`
        hero-gradient min-h-screen relative overflow-hidden flex items-center
        ${styles['sectionHolder']}`
      }
      ref={heroRef}
    >
      {/* Decorative cloud blobs */}
      <div className="absolute top-10 right-20 w-72 h-72 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, #93c5fd 0%, transparent 70%)" }} />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #bfdbfe 0%, transparent 70%)" }} />

        {children}
      </section>
    </>
  )
}

