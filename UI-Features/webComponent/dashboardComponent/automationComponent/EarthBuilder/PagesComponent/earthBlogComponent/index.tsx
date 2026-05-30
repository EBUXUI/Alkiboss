import styles from '@/styles/BuilderDashboard/Desktop.module.css';
import HolderCSS from "@/styles/CSS/UX.module.css";
import { useEffect, useRef, useState } from "react";
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader'
import NavigationComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/NavigationComponent'
import ProductComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/ProductComponent/typeBComponent';
import FooterComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/FooterComponent';

export default function EarthBlogComponent() {
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
            <section ref={heroRef} className={HolderCSS.hero}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGrid}>
                        <NavigationComponent />
                        <ProductComponent />
                        <FooterComponent />
                    </div>
                </MainContentLoader>
            </section>
        </>
    );
};