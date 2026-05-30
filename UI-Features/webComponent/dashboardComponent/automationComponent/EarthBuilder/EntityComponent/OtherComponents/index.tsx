import styles from '@/styles/BuilderDashboard/Desktop.module.css';
import HolderCSS from "@/styles/CSS/UX.module.css";
import { useEffect, useRef, useState } from "react";
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader'
import CompanyStatsComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/OtherComponents/CompanyStatsComponent';
import CompanyMissionComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/OtherComponents/CompanyMissionComponent';
import SuccessStoryComponent from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/OtherComponents/SuccessStoryComponent';
import Button from './AddComponent';

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
            <section ref={heroRef} className={HolderCSS.hero}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGrid}>
                        <CompanyStatsComponent />
                        
                    </div>
                </MainContentLoader>
            </section>
            <section ref={heroRef} className={HolderCSS.heroI}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGridI}>
                        <Button/>
                    </div>
                </MainContentLoader>
            </section>
            <section ref={heroRef} className={HolderCSS.hero}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGrid}>
                        <CompanyMissionComponent />
                        
                    </div>
                </MainContentLoader>
            </section>
             <section ref={heroRef} className={HolderCSS.heroI}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGridI}>
                        <Button/>
                    </div>
                </MainContentLoader>
            </section>
            <section ref={heroRef} className={HolderCSS.hero}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGrid}>
                        <SuccessStoryComponent />
                        
                    </div>
                </MainContentLoader>
            </section>
             <section ref={heroRef} className={HolderCSS.heroI}>
                <MainContentLoader>
                    <div className={HolderCSS.HeroGridI}>
                        <Button/>
                    </div>
                </MainContentLoader>
            </section>
        </>
    );
};