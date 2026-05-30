import styles from '@/styles/BuilderDashboard/Desktop.module.css';
import HolderCSS from "@/styles/CSS/UX.module.css";
import { useEffect, useRef, useState } from "react";

import SideBarRousel from '@/UI-Features/webComponent/dashboardComponent/sidebarComponent/dashboardSidebar';
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader';
import HomepageComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas/PagesComponent/homepageComponent';
import ToolboxComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas/PagesComponent/toolboxComponent';
import RiskManagementComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas/PagesComponent/riskManagementComponent';
import InstallEarthComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas/PagesComponent/installEarthComponent';
import ProductBuilderComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas/PagesComponent/productBuilderComponent';
import EarthBlogComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas/PagesComponent/earthBlogComponent';

export default function BuilderCanvas() {
    const heroRef = useRef<HTMLElement>(null);
    const [showHomePage, setShowHomePage] = useState(true); // default: true to render Homepage
    const [showToolBoxPage, setShowToolBoxPage] = useState(false);
    const [showRiskManagementPage, setShowRiskManagementPage] = useState(false);
    const [showInstallEarthSpeedPage, setShowInstallEarthSpeedPage] = useState(false);
    const [showProductBuilderPage, setShowProductBuilderPage] = useState(false);
    const [showEarthBlogPage, setShowEarthBlogPage] = useState(false);

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
        <section ref={heroRef} className={HolderCSS.hero}>
            <MainContentLoader>
                <div className={HolderCSS.HeroGrid}>
                </div>
            </MainContentLoader>
        </section>
    );
}
