"use client";
import HeroCss from "@/styles/Builder-Dashboard/White/Home.module.css";

import ServiceBg from '@/MyPotraits/MainG.png';
import ServiceBgII from '@/MyPotraits/Main.png';
import ServiceBgIII from '@/MyPotraits/MainC.png';

import Link from "next/link";
import Image from "next/image";

import Logo from "@/MyPotraits/MainD.png";
import LogoII from "@/MyPotraits/MainJ.png";
import LogoIII from "@/MyPotraits/MainI.png";
import LogoIV from "@/MyPotraits/MainH.png";

import styles from '@/styles/Legal/Desktop.module.css';
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

import { Carousel } from "react-responsive-carousel";
export default function HeroComponent() {
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
        <section className={styles.Herocontent}>
            <div className={styles.HeroContentBg}>
                <div
                    className={styles.HeroBackground}>
                    <Image
                        priority
                        alt="Soriyo International Management Consultancy Services"
                        src={ServiceBgIII}
                        className={styles.HeroBackgroundImage}
                        quality={100}
                        fill={true}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <Carousel
                    className={styles.GridedContentModuleXV}
                    autoPlay={true}
                    showArrows={true}
                    swipeScrollTolerance={100}
                    preventMovementUntilSwipeScrollTolerance={true}
                    interval={6000}
                    transitionTime={1000}
                    infiniteLoop={true}
                    showIndicators={true}
                    showStatus={true}
                    useKeyboardArrows={true}
                    swipeable={true}
                    showThumbs={true}
                >
                    <div className={HeroCss.MainHeroII}>
                        <article className={HeroCss.MainHeroLayedOut}>
                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <Image
                                    priority
                                    src={Logo}
                                    alt="TikTok Content Creator"
                                    className={HeroCss.MainHeroIcon}
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                />
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <h1 className={HeroCss.MainSubTitle}>
                                    TikTok<span className={HeroCss.TitleWolf}> Comedy </span>|
                                    <span className={HeroCss.MainSubTitleI}>
                                        Viral <span className={HeroCss.TitleWolf}>Blind-Character Content</span>
                                    </span>
                                </h1>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]} ${HeroCss["MainBg"]} ${HeroCss['MainIcon']}`}
                                htmlFor="queryHotelName"
                            >
                                <p className={HeroCss.MainContext}>
                                    Enter the fast-paced world of viral TikTok entertainment filled with
                                    hilarious blind-man banter, cinematic public interactions, luxury
                                    lifestyle moments, and unforgettable African humor designed for the
                                    modern digital generation.
                                </p>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <button className={HeroCss.BookNow}>
                                    <Link target="_blank" href="https://www.tiktok.com/@alkiboss_classic" className={HeroCss.BookBtn}>
                                        Watch TikTok Content
                                    </Link>
                                </button>
                            </label>
                        </article>
                    </div>

                    <div className={HeroCss.MainHeroII}>
                        <article className={HeroCss.MainHeroLayedOut}>
                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <Image
                                    priority
                                    src={LogoIV}
                                    alt="Facebook Content Creator"
                                    className={HeroCss.MainHeroIcon}
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                />
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <h1 className={HeroCss.MainSubTitle}>
                                    Facebook<span className={HeroCss.TitleWolf}> Community </span>|
                                    <span className={HeroCss.MainSubTitleI}>
                                        Inspirational <span className={HeroCss.TitleWolf}>Entertainment</span>
                                    </span>
                                </h1>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]} ${HeroCss["MainBg"]} ${HeroCss['MainIcon']}`}
                                htmlFor="queryHotelName"
                            >
                                <p className={HeroCss.MainContext}>
                                    Connect with a growing entertainment community through inspiring
                                    storytelling, relatable comedy moments, Afro-fusion music updates,
                                    engaging discussions, cinematic lifestyle content, and meaningful
                                    interactions built for audiences across the world.
                                </p>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <button className={HeroCss.BookNow}>
                                    <Link target="_blank" href="https://www.facebook.com/Alkiboss/" className={HeroCss.BookBtn}>
                                        Explore Facebook Content
                                    </Link>
                                </button>
                            </label>
                        </article>
                    </div>

                    <div className={HeroCss.MainHeroII}>
                        <article className={HeroCss.MainHeroLayedOut}>
                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <Image
                                    priority
                                    src={LogoII}
                                    alt="YouTube Content Creator"
                                    className={HeroCss.MainHeroIcon}
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                />
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <h1 className={HeroCss.MainSubTitle}>
                                    YouTube<span className={HeroCss.TitleWolf}> Cinematics </span>|
                                    <span className={HeroCss.MainSubTitleI}>
                                        Storytelling <span className={HeroCss.TitleWolf}>Without Limits</span>
                                    </span>
                                </h1>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]} ${HeroCss["MainBg"]} ${HeroCss['MainIcon']}`}
                                htmlFor="queryHotelName"
                            >
                                <p className={HeroCss.MainContext}>
                                    Experience long-form cinematic storytelling, blind-character comedy
                                    series, emotional Afro-fusion music visuals, public social experiments,
                                    and creative African entertainment built to inspire laughter and
                                    connection worldwide.
                                </p>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <button className={HeroCss.BookNow}>
                                    <Link target="_blank" href="https://www.youtube.com/@alkibossclassic" className={HeroCss.BookBtn}>
                                        Explore YouTube Content
                                    </Link>
                                </button>
                            </label>
                        </article>
                    </div>

                    <div className={HeroCss.MainHeroII}>
                        <article className={HeroCss.MainHeroLayedOut}>
                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <Image
                                    priority
                                    src={LogoIII}
                                    alt="Instagram Content Creator"
                                    className={HeroCss.MainHeroIcon}
                                    style={{ objectFit: "cover" }}
                                    quality={100}
                                />
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <h1 className={HeroCss.MainSubTitle}>
                                    Instagram<span className={HeroCss.TitleWolf}> Luxury </span>|
                                    <span className={HeroCss.MainSubTitleI}>
                                        Creative <span className={HeroCss.TitleWolf}>Visual Storytelling</span>
                                    </span>
                                </h1>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]} ${HeroCss["MainBg"]} ${HeroCss['MainIcon']}`}
                                htmlFor="queryHotelName"
                            >
                                <p className={HeroCss.MainContext}>
                                    Discover luxury-inspired portraits, cinematic reels, modern African
                                    fashion, artistic storytelling, rooftop visuals, and emotionally driven
                                    creative photography curated for the Instagram generation.
                                </p>
                            </label>

                            <label
                                className={`${HeroCss["MainTitle"]}`}
                                htmlFor="queryHotelName"
                            >
                                <button className={HeroCss.BookNow}>
                                    <Link target="_blank" href="https://www.instagram.com/alkiboss_classic" className={HeroCss.BookBtn}>
                                        View Instagram Content
                                    </Link>
                                </button>
                            </label>
                        </article>
                    </div>
                </Carousel>
            </div>
        </section >
    );
}


