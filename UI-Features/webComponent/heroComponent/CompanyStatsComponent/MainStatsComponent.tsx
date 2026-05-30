"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import FontCSS from "@/styles/CurrentStats/Desktop.module.css";
import HeaderCSS from "@/styles/CurrentStats/Home.module.css";
import Image from "next/image";

/*----- Performance Analytics ------*/
import LogoI from "@/MyPotraits/MainJ.png";
import LogoII from "@/MyPotraits/MainD.png";
import LogoIII from "@/MyPotraits/MainE.png";
import LogoIV from "@/MyPotraits/MainJ.png";
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
  const [showPB, setPB] = useState(false);
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
      },
    );
  }, []);
  //Current Location

  //Handle Routing Functions
  useEffect(() => {
    const closePB = () => {
      showPB && setPB(false);
    };
    Router.events.on("routeChangeStart", closePB);
    return () => {
      Router.events.off("routeChangeStart", closePB);
    };
  }, [showPB, Router]);
  useEffect(() => {
    const closeTB = () => {
      showTB && setTB(false);
    };
    Router.events.on("routeChangeStart", closeTB);
    return () => {
      Router.events.off("routeChangeStart", closeTB);
    };
  }, [showTB, Router]);
  useEffect(() => {
    const closeRMT = () => {
      showRMT && setRMT(false);
    };
    Router.events.on("routeChangeStart", closeRMT);
    return () => {
      Router.events.off("routeChangeStart", closeRMT);
    };
  }, [showRMT, Router]);
  useEffect(() => {
    const closeIES = () => {
      showIES && setIES(false);
    };
    Router.events.on("routeChangeStart", closeIES);
    return () => {
      Router.events.off("routeChangeStart", closeIES);
    };
  }, [showIES, Router]);
  useEffect(() => {
    const closeTR = () => {
      showTR && setTR(false);
    };
    Router.events.on("routeChangeStart", closeTR);
    return () => {
      Router.events.off("routeChangeStart", closeTR);
    };
  }, [showTR, Router]);
  useEffect(() => {
    const closeEB = () => {
      showEB && setEB(false);
    };
    Router.events.on("routeChangeStart", closeEB);
    return () => {
      Router.events.off("routeChangeStart", closeEB);
    };
  }, [showEB, Router]);
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
        <CompanyStatsTitle />
      </div>
      <div className={HeaderCSS.HeaderOut}>
        <article className={HeaderCSS.headerIconProperty}>
          <Image
            priority
            src={LogoI}
            alt="YouTube Creator Statistics"
            className={HeaderCSS.HeadLogo}
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <p className={HeaderCSS.CompanyLogo}>
            <span className={HeaderCSS.NavII}>Surpassing</span>
            <span className={HeaderCSS.Nav}> 10M+ </span>
            <span className={HeaderCSS.StatsNav}>YouTube Views</span>
            <span className={FontCSS.SystemTitleI}>Global</span>
          </p>
        </article>

        <article className={HeaderCSS.headerIconProperty}>
          <Image
            priority
            src={LogoII}
            alt="TikTok Creator Statistics"
            className={HeaderCSS.HeadLogo}
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <p className={HeaderCSS.CompanyLogo}>
            <span className={HeaderCSS.NavII}>Building</span>
            <span className={HeaderCSS.Nav}> 800K+ </span>
            <span className={HeaderCSS.StatsNav}>TikTok Followers</span>
            <span className={FontCSS.SystemTitleI}>Viral</span>
          </p>
        </article>

        <article className={HeaderCSS.headerIconProperty}>
          <Image
            priority
            src={LogoIV}
            alt="Instagram Creator Statistics"
            className={HeaderCSS.HeadLogo}
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <p className={HeaderCSS.CompanyLogo}>
            <span className={HeaderCSS.NavII}>Growing</span>
            <span className={HeaderCSS.Nav}> 250K+ </span>
            <span className={HeaderCSS.StatsNav}>Youtube Subscribers</span>
            <span className={FontCSS.SystemTitleI}>Creative</span>
          </p>
        </article>

        <article className={HeaderCSS.headerIconProperty}>
          <Image
            priority
            src={LogoIII}
            alt="Facebook Creator Statistics"
            className={HeaderCSS.HeadLogo}
            style={{ objectFit: "cover" }}
            quality={100}
          />
          <p className={HeaderCSS.CompanyLogo}>
            <span className={HeaderCSS.NavII}>Growing</span>
            <span className={HeaderCSS.Nav}> 7M+ </span>
            <span className={HeaderCSS.StatsNav}>Tiktok Likes</span>
            <span className={FontCSS.SystemTitleI}>Engaging</span>
          </p>
        </article>
      </div>
    </section>
  );
}
