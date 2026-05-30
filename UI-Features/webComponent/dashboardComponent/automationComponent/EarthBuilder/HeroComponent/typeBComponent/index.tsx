"use client";

import { useEffect, useRef, useState } from "react";
import HeroCss from "@/styles/White/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/UI-Features/UI-Gallery/EarthOrganizer/EcommercePlatform/EcommerceVIII.jpg";

export default function HeroComponent() {
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
        <section className={HeroCss.MainHero}>
            <article className={HeroCss.MainHeroLayedOutII}>
                <div className={HeroCss.ImageGrid}>
                <label
                    className={`${HeroCss["MainTitleII"]}`}
                    htmlFor="queryHotelName"
                >
                    <label className={HeroCss.MainTitleElement}>
                        <Image
                        priority
                        src={Logo}
                        alt="Nale Security Logo"
                        className={HeroCss.MainHeroIconII}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    </label>
                    <label className={HeroCss.MainTitleElement}>
                        <button
                        className={HeroCss.BookNow}
                    >
                        <Link href="" className={HeroCss.BookBtn}>Install Software</Link>
                    </button>
                    </label>
                </label>
                <label
                    className={`${HeroCss["MainTitleII"]}`}
                    htmlFor="queryHotelName"
                >
                    <label className={HeroCss.MainTitleElement}>
                        <Image
                        priority
                        src={Logo}
                        alt="Nale Security Logo"
                        className={HeroCss.MainHeroIconII}
                        style={{ objectFit: "cover" }}
                        quality={100}
                    />
                    </label>
                    <label className={HeroCss.MainTitleElement}>
                        <button
                        className={HeroCss.BookNow}
                    >
                        <Link href="" className={HeroCss.BookBtn}>Download Software</Link>
                    </button>
                    </label>
                </label>
                </div>
                <div className={HeroCss.TextGrid}>    
                <label
                    className={`${HeroCss["MainTitleII"]}`}
                    htmlFor="queryHotelName"
                >
                    <h1
                        className={HeroCss.MainSubTitle}

                    >
                        Software<span className={HeroCss.TitleWolf}> Name </span>|<span className={HeroCss.MainSubTitleI}>The Software <span className={HeroCss.TitleWolf}>Motto</span></span>
                    </h1>

                </label>
                <label
                    className={`${HeroCss["MainTitleII"]} ${HeroCss["MainBg"]} ${HeroCss['MainIcon']}`}
                    htmlFor="queryHotelName"
                >
                    <p
                        className={HeroCss.MainContext}

                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, nulla. <br>
                        </br>consectetur adipisicing elit. Itaque tempora voluptatibus mollitia labore fuga eveniet
                    </p>
                </label>
                <label
                    className={`${HeroCss["MainTitleII"]}`}
                    htmlFor="queryHotelName"
                >
                    <button
                        className={HeroCss.BookNow}
                    >
                        <Link href="" className={HeroCss.BookBtn}>Software Download</Link>
                    </button>

                </label>
                </div>
            </article>

        </section>
    );
}


