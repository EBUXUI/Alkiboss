"use client";

import ProductCss from "@/styles/Builder-Dashboard/White/Main.module.css";
import Link from "next/link";
import ServiceBg from '@/MyPotraits/GreenWhite/GreenX.jpg';
import {
    AEIF_CONTACTS,
    AEIFCommandBar,
    AEIFComposePanel,
    AEIFEmail,
    AEIFEmailCarousel,
    AEIFEmailDetail,
    AEIFParticleCanvas,
    AEIFSidebar,
    AEIFStatsCanvas,
    AEIFWorkflowVisualizer,
    AEIF_THEMES,
    buildInboxEmails,
    ThemeMode,
    EmailSection
} from "@/UI-Features/types/v1";
import React, {
    useState,
    useEffect,
    useRef,
    useCallback,
    useMemo,
} from "react";
import styles from '@/styles/Legal/Desktop.module.css';
import Image from "next/image";
import Logo from "@/UI-Features/UI-Gallery/Logo/LogoVI.jpg";
import { StaticImageData } from "next/image";
export default function BlogProductComponent() {
    const [theme, setTheme] = useState<ThemeMode>("particle");
    const [activeSection, setSection] = useState<EmailSection>("inbox");
    const [selectedEmail, setEmail] = useState<AEIFEmail | null>(null);
    const [showWorkflow, setShowWorkflow] = useState(false);
    const [isFirstVisit] = useState(true);
    const cfg = AEIF_THEMES[theme];

    const emails = useMemo(() => {
        if (isFirstVisit && activeSection === "inbox") return buildInboxEmails();
        const section = activeSection === "campaigns" || activeSection === "analytics" ? "inbox" : activeSection;
        return buildInboxEmails().filter(e => e.section === section || activeSection === "inbox");
    }, [activeSection, isFirstVisit]);

    const videoData = [
        {
            video: "/Videos/VideoI.mp4",
            title: "Blind Man Public Banter",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7640303838066543880",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7640303838066543880",
        },
        {
            video: "/Videos/VideoJ.mp4",
            title: "Luxury Street Comedy",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7633490547537251591",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7633490547537251591",
        },
        {
            video: "/Videos/VideoK.mp4",
            title: "Afro Fusion Storytelling",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7637590092445404423",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7637590092445404423",
        },
        {
            video: "/Videos/VideoC.mp4",
            title: "Blind Character Reactions",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7521858014177955077",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/752185801417795507",
        },
        {
            video: "/Videos/VideoA.mp4",
            title: "Cinematic Lifestyle Scenes",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7405118961689431302",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7405118961689431302",
        },
        {
            video: "/Videos/VideoE.mp4",
            title: "Viral Comedy Moments",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7521858014177955077",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7521858014177955077",
        }
    ];

    interface VideoProps {
        video: string,
        title: string,
        link: string,
        preview: string
    }

    const VideoCard = ({ video, title, link, preview }: VideoProps) => (
        <div
            className={`${ProductCss.MainProductElementXV} ${ProductCss.MainProductElementAnime} ${ProductCss.MainProductElementIsometric} ${ProductCss.MainProductElementStackSlide} ${ProductCss.Wrap}`}
        >
            <div className={ProductCss.MainProductElementImage}>
                <video
                    className={ProductCss.MainProductElementImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div
                className={`${ProductCss.MainProductGridNumber} ${ProductCss.MainProductGridBg}`}
            >
                <Link href={link} className={ProductCss.ProductName}>
                    {title}
                </Link>

                <Link href={preview} className={ProductCss.ProductPrice}>
                    Watch Now
                </Link>
            </div>
        </div>
    );

    return (
        <section className={styles.Herocontent}>

            <div className={styles.HeroContentBg}>

                <div className={styles.HeroBackground}>
                    <Image
                        priority
                        alt="Soriyo International Management Consultancy Services"
                        src={ServiceBg}
                        className={styles.HeroBackgroundImage}
                        quality={100}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                    />
                    <AEIFParticleCanvas theme={theme} />
                </div>
                <div className={styles.GridedContentModule}>
                    <div className={ProductCss.MainHeroII}>
                        <div className={ProductCss.HeroContentTitle}>
                            <div className={ProductCss.MainProductImage}>
                                {videoData.map((video, index) => (
                                    <VideoCard key={index} {...video} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


