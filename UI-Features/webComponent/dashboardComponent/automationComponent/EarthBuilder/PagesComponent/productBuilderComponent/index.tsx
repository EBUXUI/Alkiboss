import styles from '@/styles/BuilderDashboard/Desktop.module.css';
import HolderCSS from "@/styles/CSS/UX.module.css";
import { useEffect, useRef, useState } from "react";

import SideBarRousel from '@/UI-Features/webComponent/dashboardComponent/sidebarComponent/dashboardSidebar'
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader'
import NavigationComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/NavigationComponent'
import HeroComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/HeroComponent/typeDComponent';
import FooterComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/FooterComponent';

export default function ProductBuilderComponent() {
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
                        <HeroComponent />
                        <FooterComponent />
                    </div>
                </MainContentLoader>
            </section>
        </>
    );
};