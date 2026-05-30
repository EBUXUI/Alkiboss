"use client";

import { useEffect, useRef, useState } from "react";
import "@grapesjs/studio-sdk/style";
import Link from "next/link";
import { useRouter } from "next/router";
import HeaderCSS from "@/styles/Stats/Home.module.css";;
import Image from "next/image";
/*----- Performance Analytics ------*/
import Logo from "@/UI-Features/UI-Gallery/Logo/LogoVI.jpg";
import SearchIcon from "@/UI-Features/buttonComponent/searchIcon/homeSearch";

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
            <div className={HeaderCSS.HeaderOut}>
                <article className={HeaderCSS.headerIconProperty}>
                    <Image
                        priority
                        src={Logo}
                        alt="Nale Security Logo"
                        className={HeaderCSS.HeadLogo}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    <p className={HeaderCSS.CompanyLogo}><span className={HeaderCSS.TitleWolf}>Co. </span> Name</p>
                </article>
                <article className={HeaderCSS.headerColumn}>
                    <form className={HeaderCSS.HSProperty}>
                        <label htmlFor="queryHotelName"></label>
                        <input
                            className={HeaderCSS.hotelSearch}
                            placeholder="Ask Earth AI anything about planning..."
                            name="queryHotelName"
                            id="queryHotelName"
                            aria-label="queryHotelName"
                            onClick={() => setOpen((prev) => !prev)}
                        />
                        <SearchIcon />
                    </form>
                </article>
                <article className={HeaderCSS.HeaderPropertyIV}>
                    <div
                        className={`${HeaderCSS["MenuMainTitle"]} ${HeaderCSS["MenuTitleBg"]}`}
                    >
                        <div className={HeaderCSS.HeaderII}>
                            <div className={HeaderCSS.LiveIcon} />
                            <Link href="/Register">Kickstart Journey</Link>
                        </div>
                    </div>
                </article>
            </div>
            <ul className={HeaderCSS.HeaderGrid}>
                <li className={HeaderCSS.HeaderNav}>
                    <Link href="/">Home</Link>
                </li>
                <li onClick={() => setTB(!showTB)} className={HeaderCSS.HeaderNav}>
                    <Link href="Toolbox"> The Toolbox </Link>
                </li>
                <li onClick={() => { setRMT(!showRMT) }} className={HeaderCSS.HeaderNav}>
                    <Link href="RiskManagement">Risk Management</Link>
                </li>
                <li onClick={() => setIES(!showIES)} className={HeaderCSS.HeaderNav}>
                    <Link href="InstallEarthSpeed">Install Earth Speed</Link>
                </li>
                <li onClick={(() => setPB(!showPB))} className={HeaderCSS.HeaderNav}>
                    <Link href="ProductBuilder">Product Builder</Link>
                </li>
                <li onClick={() => { setEB(!showEB) }} className={HeaderCSS.HeaderNav}>
                    <Link href="EarthsBlog">Earth's Blog</Link>
                </li>
            </ul>
        </section>
    );
}


