"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CSS/UX.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [cssValues, setCssValues] = useState({
    minWidth: "",
    maxWidth: "",
    minHeight: "",
    maxHeight: "",
    margin: "",
    padding: "",
  });

  useEffect(() => {
    if (heroRef.current) {
      const computed = getComputedStyle(heroRef.current);
      setCssValues({
        minWidth: computed.minWidth,
        maxWidth: computed.maxWidth,
        minHeight: computed.minHeight,
        maxHeight: computed.maxHeight,
        margin: computed.margin,
        padding: computed.padding,
      });
    }
  }, []);

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={`${styles['annotationTopLeft']} ${styles['annotationBg']}`}>max-width: {cssValues.maxWidth}</div>
      <div className={`${styles['annotationTopRight']} ${styles['annotationBg']}`}>min-height: {cssValues.minHeight}</div>
      <div className={`${styles['annotationBottomLeft']} ${styles['annotationBg']}`}>margin: {cssValues.margin}</div>
      <div className={`${styles['annotationBottomRight']} ${styles['annotationBg']}`}>padding: {cssValues.padding}</div>
    </section>
  );
}
