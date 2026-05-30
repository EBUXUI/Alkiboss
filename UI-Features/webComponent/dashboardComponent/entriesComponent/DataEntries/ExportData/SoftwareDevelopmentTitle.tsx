import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
/*----- Server Actions ------*/
import SearchIcon from "@/UI-Features/otherComponents/buttonComponent/searchIcon/homeSearch";
import DatabaseCatalog from "./DatabaseCatalog";
export default function MainTitle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      
        <div className={styles.MainHeroModule}>
          <article className={styles.MainHeroLayedOut}>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <h1
                className={styles.MainSubTitle}

              >
                Export <span className={styles.TitleWolf}> Your Data </span>|<span className={styles.MainSubTitleI}>The Hub of Database <span className={styles.TitleWolf}>Development.</span></span>
              </h1>

            </label>
             <DatabaseCatalog/>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <button
                className={styles.BookNow}
              >
                <Link href="/LaunchingSoon" className={styles.BookBtn}>Export Data</Link>
              </button>
            </label>
          </article>
        </div>
      
    </>
  );
}
