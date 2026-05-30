import styles from '@/styles/BuilderDashboard/Desktop.module.css';
import HolderCSS from "@/styles/CSS/UX.module.css";
import { useEffect, useRef, useState } from "react";
import HeroComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/HeroComponent';
import ProductComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/ProductComponent';
import BannerComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/BannerComponent';

export default function HomepageComponent() {
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
    <>
      <HeroComponent />
      <ProductComponent />
      <BannerComponent />

    </>
  );
};
