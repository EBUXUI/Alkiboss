"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderCSS from "@/styles/Stats/Home.module.css";
import Image from "next/image";

/*----- Performance Analytics ------*/
import LogoI from "@/UI-Features/UI-Gallery/CancerDetection/MedicalSponsorship.jpeg";
import LogoII from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunity.jpg";
import LogoIII from "@/UI-Features/UI-Gallery/CancerDetection/CommunitySeminarI.jpg";
import SearchIcon from "@/UI-Features/buttonComponent/searchIcon/homeSearch";
import CompanyMissionTitle from "./MissionTitle";

export default function NavigationComponent() {
    const heroRef = useRef<HTMLElement>(null);
    const [cssValues, setCssValues] = useState({
        minWidth: "",
        maxWidth: "",
        minHeight: "",
        maxHeight: "",
        margin: "",
        padding: "",
    });
    //Toggle Header Buttons
    const [showTB, setTB] = useState(false);
    const [showRMT, setRMT] = useState(false);
    const [showIES, setIES] = useState(false);
    const [showEB, setEB] = useState(false);
    const [showTR, setTR] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showPB, setPB] = useState(false)
    //Toggle Header Buttons

    //Route Header DropDowns
    const Router = useRouter();
    //Route Header DropDowns

    //  Search Query
    const [open, setOpen] = useState(false);
    // Search Query

    //Current Location
    useEffect(() => {
        if (!navigator.geolocation) {
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // setShowLocation({ latitude, longitude });
            },
            (error) => {
                console.error("Error Retrieving Location", error);
            }
        );
    }, []);
    //Current Location

    //Handle Routing Functions
    useEffect(() => {
        const closePB = () => {
            showPB && setPB(false)
        }
        Router.events.on('routeChangeStart', closePB)
        return () => {
            Router.events.off('routeChangeStart', closePB)
        }
    }, [showPB, Router])
    useEffect(() => {
        const closeTB = () => {
            showTB && setTB(false)
        }
        Router.events.on('routeChangeStart', closeTB)
        return () => {
            Router.events.off('routeChangeStart', closeTB)
        }
    }, [showTB, Router])
    useEffect(() => {
        const closeRMT = () => {
            showRMT && setRMT(false)
        }
        Router.events.on("routeChangeStart", closeRMT);
        return () => {
            Router.events.off("routeChangeStart", closeRMT)
        }
    }, [showRMT, Router]);
    useEffect(() => {
        const closeIES = () => {
            showIES && setIES(false)
        }
        Router.events.on('routeChangeStart', closeIES)
        return () => {
            Router.events.off('routeChangeStart', closeIES)
        }
    }, [showIES, Router])
    useEffect(() => {
        const closeTR = () => {
            showTR && setTR(false)
        }
        Router.events.on('routeChangeStart', closeTR)
        return () => {
            Router.events.off('routeChangeStart', closeTR)
        }
    }, [showTR, Router])
    useEffect(() => {
        const closeEB = () => {
            showEB && setEB(false)
        }
        Router.events.on('routeChangeStart', closeEB)
        return () => {
            Router.events.off('routeChangeStart', closeEB)
        }
    }, [showEB, Router])
    //Handle Routing Function

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

        <section className={HeaderCSS.HeaderTitle}>
            <div className={HeaderCSS.HeaderMainTitle}>
            <CompanyMissionTitle/>
            </div>
            <div className={HeaderCSS.HeaderOut}>
                <article className={HeaderCSS.headerIconProperty}>
                    <Image
                        priority
                        src={LogoI}
                        alt="Nale Security Logo"
                        className={HeaderCSS.HeadLogo}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    <article className={HeaderCSS.NavGrid}>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.NavII}>Supporting </span>
                        <span className={HeaderCSS.NavIII}>Disabled Children</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>🥗 Nutrition <span className={HeaderCSS.TitleWolf}> Support</span></span>
                        <span className={HeaderCSS.NavIII}>Regular food distribution to improve health and relieve caregiver burdens.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>📚 Education <span className={HeaderCSS.TitleWolf}> Assistance</span></span>
                        <span className={HeaderCSS.NavIII}>Sponsoring school fees, enrolling in special needs schools, and home-based tutoring.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>👕 Clothing <span className={HeaderCSS.TitleWolf}> & Essentials</span></span>
                        <span className={HeaderCSS.NavIII}>Providing clothes, blankets, shoes, and mobility aids to restore dignity.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>💸 Financial <span className={HeaderCSS.TitleWolf}> Relief for Families</span></span>
                        <span className={HeaderCSS.NavIII}>Offering small stipends to support caretakers of severely disabled children.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>👨‍👩‍👧 Community <span className={HeaderCSS.TitleWolf}> Outreach</span></span>
                        <span className={HeaderCSS.NavIII}>Organizing child outreach days with games, health checkups, and skill development.</span>
                        </p>
                    </label>
                    </article>
                </article>
                <article className={HeaderCSS.headerIconProperty}>
                    <Image
                        priority
                        src={LogoI}
                        alt="Nale Security Logo"
                        className={HeaderCSS.HeadLogo}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    <article className={HeaderCSS.NavGrid}>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.NavII}>Supporting </span>
                        <span className={HeaderCSS.NavIII}>Women with Cancer</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>🩺 Free Cancer Consultations</span>
                        <span className={HeaderCSS.NavIII}>Partnering with clinics to offer breast and cervical cancer screening.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>📣 Awareness Campaigns</span>
                        <span className={HeaderCSS.NavIII}> Hosting community health talks to educate on early signs and prevention.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>🏥 Referral Services</span>
                        <span className={HeaderCSS.NavIII}>Guiding women to public and partner hospitals for further diagnosis and treatment.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>💬 Emotional & Peer Support</span>
                        <span className={HeaderCSS.NavIII}>Providing counseling, survivor groups, and check-in services post-screening.</span>
                        </p>
                    </label>
                    <label className={HeaderCSS.CompanyColumn}>
                        <p className={HeaderCSS.CompanyLogo}>
                        <span className={HeaderCSS.HeaderNavII}>🚐 Mobile Health Camps</span>
                        <span className={HeaderCSS.NavIII}>Bringing screening services directly to rural and underserved communities.</span>
                        </p>
                    </label>
                    </article>
                </article>
            </div>
            
        </section>
    );
}


