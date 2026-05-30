"use client";

import { useEffect, useRef, useState } from "react";
import HeroCss from "@/styles/White/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/UI-Features/UI-Gallery/EarthOrganizer/EcommercePlatform/EcommerceVIII.jpg";
import { faBell, faClock, faCloud, faMoneyBill, faPen, faPeopleGroup, faShop, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function HeroComponent() {


    return (
        <section className={HeroCss.MainHero}>
            <article className={HeroCss.MainHeroLayedOutII}>
                <div className={HeroCss.ImageGrid}>
                    <label
                        className={`${HeroCss["MainTitle"]}`}
                        htmlFor="queryHotelName"
                    >
                        <Image
                            priority
                            src={Logo}
                            alt="Nale Security Logo"
                            className={HeroCss.MainHeroIcon}
                            style={{ objectFit: "cover" }}
                            quality={100}
                        />
                    </label>
                    <label
                        className={`${HeroCss["MainTitle"]}`}
                        htmlFor="queryHotelName"
                    >
                        <Image
                            priority
                            src={Logo}
                            alt="Nale Security Logo"
                            className={HeroCss.MainHeroIcon}
                            style={{ objectFit: "cover" }}
                            quality={100}
                        />
                    </label>
                </div>
                <div className={HeroCss.TextGrid}>
                    <label
                        className={`${HeroCss["MainTitle"]}`}
                        htmlFor="queryHotelName"
                    >
                        <h1
                            className={HeroCss.MainSubTitle}

                        >
                            Company<span className={HeroCss.TitleWolf}> Name </span>|<span className={HeroCss.MainSubTitleI}>The Company <span className={HeroCss.TitleWolf}>Motto</span></span>
                        </h1>

                    </label>
                    <label
                        className={`${HeroCss["MainTitle"]} ${HeroCss["MainBg"]} ${HeroCss['MainIcon']}`}
                        htmlFor="queryHotelName"
                    >
                        <div className={HeroCss.MenuPropertyX}>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faUserPlus}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]}`}
                                >
                                    <Link href="/Dashboard/RegistrationPanel">Register</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faPeopleGroup}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]}`}
                                >
                                    <Link href="/Dashboard/LoginPanel">Login</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faShop}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]}`}
                                >
                                    <Link href="/Dashboard/CancerType">Shop</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faMoneyBill}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]} `}
                                >
                                    <Link href="/Dashboard/CurrentDisability">Affiliates</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faBell}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]} `}
                                >
                                    <Link href="/Dashboard/ViewProgrammes">Notifications</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faCloud}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]}`}
                                >
                                    <Link href="/Dashboard/GlobalStatistics">Statistics</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faClock}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]}`}
                                >
                                    <Link href="/Dashboard/ScheduleMeeting">Schedule</Link>
                                </div>
                            </div>
                            <div className={HeroCss.MenuII}>
                                <FontAwesomeIcon
                                    className={HeroCss.MenuIconII}
                                    icon={faPen}
                                />
                                <div
                                    className={`${HeroCss["MenuMainTitle"]} ${HeroCss["MenuTitleBg"]}`}
                                >
                                    <Link href="/Dashboard/EmailUs">Email</Link>
                                </div>
                            </div>
                        </div>
                    </label>
                    <label
                        className={`${HeroCss["MainTitle"]}`}
                        htmlFor="queryHotelName"
                    >
                        <button
                            className={HeroCss.BookNow}
                        >
                            <Link href="" className={HeroCss.BookBtn}>Call to Action</Link>
                        </button>

                    </label>
                </div>
            </article>

        </section>
    );
}


