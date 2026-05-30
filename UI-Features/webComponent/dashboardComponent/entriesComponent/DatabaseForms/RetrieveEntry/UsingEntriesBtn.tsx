import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import ImageCss from "@/styles/White/Main.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/*----- Server Actions ------*/
import SearchBar from "./DataEntrySearch";
import { useRouter } from "next/router";

import PrintingAccessories from "@/UI-Features/UI-Gallery/Luvra/LuvraXXXVI.jpg";
import Image from "next/image";

export interface RetrieveOptions {
  setActivePage: (page: "UseEntries" | "UseClauses") => void;
}

export default function UsingEntriesBtn({ setActivePage }: RetrieveOptions) {
  const imageData = [
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "Finanvra",
      title: "Import Data",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
      button: "/LaunchingSoon",
      buttonRef: "Import Data",
    },
  ];
  const ImageCard = ({
    bg,
    alt,
    title,
    link,
    preview,
    button,
    buttonRef,
  }: any) => (
    <div className={`${ImageCss.MainProductElementImage}`}>
      <Image
        priority
        alt={alt}
        src={bg}
        quality={100}
        fill={true}
        className={ImageCss.MainProductElementImage}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
  return (
    <>
      <label className={`${styles["EntryTitle"]}`} htmlFor="queryHotelName">
        <div className={`${ImageCss.LuvProductElement} ${ImageCss.MainProductElementAnime} ${ImageCss.MainProductElementIsometric} ${ImageCss.MainProductElementStackSlide} ${ImageCss.Wrap}`}>
        {
          imageData.map((image, index) => (
            <ImageCard key={index} {...image} />
          ))
        }
        </div>
        <button
          className={styles.BookNow}
          onClick={() => {
            setActivePage("UseEntries");
          }}
        >
          <Link href="#UseEntry" className={styles.BookBtn}>
            Retrieve Data Using Entries
          </Link>
        </button>
      </label>
    </>
  );
}
