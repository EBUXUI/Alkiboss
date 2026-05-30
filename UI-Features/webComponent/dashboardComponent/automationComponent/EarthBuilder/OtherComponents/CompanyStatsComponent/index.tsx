"use client";

import { useEffect, useRef, useState } from "react";
import "@grapesjs/studio-sdk/style";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderCSS from "@/styles/Stats/Home.module.css";
import Image from "next/image";

/*----- Performance Analytics ------*/
import LogoI from "@/UI-Features/UI-Gallery/CancerDetection/MedicalSponsorship.jpeg";
import LogoII from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunity.jpg";
import LogoIII from "@/UI-Features/UI-Gallery/CancerDetection/CommunitySeminarI.jpg";
import SearchIcon from "@/UI-Features/buttonComponent/searchIcon/homeSearch";
import CompanyStatsTitle from "./StatsTitle";

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
            <CompanyStatsTitle/>
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
                    <p className={HeaderCSS.CompanyLogo}><span className={HeaderCSS.NavII}>Supporting <br></br></span><span className={HeaderCSS.Nav}> 200 +</span> <span className={HeaderCSS.StatsNav}>Disabled Children</span></p>
                </article>
                <article className={HeaderCSS.headerIconProperty}>
                    <Image
                        priority
                        src={LogoII}
                        alt="Nale Security Logo"
                        className={HeaderCSS.HeadLogo}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    <p className={HeaderCSS.CompanyLogo}><span className={HeaderCSS.NavII}>Supporting<br></br></span><span className={HeaderCSS.Nav}> 500 + </span> <span className={HeaderCSS.StatsNav}>Women with Cancer </span></p>
                </article>
                <article className={HeaderCSS.headerIconProperty}>
                    <Image
                        priority
                        src={LogoIII}
                        alt="Nale Security Logo"
                        className={HeaderCSS.HeadLogo}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    <p className={HeaderCSS.CompanyLogo}><span className={HeaderCSS.NavII}> Engaging<br></br></span><span className={HeaderCSS.Nav}> 30 +</span><span className={HeaderCSS.StatsNav}>Vibrant Communities</span></p>
                </article>
            </div>
        </section>
    );
}


