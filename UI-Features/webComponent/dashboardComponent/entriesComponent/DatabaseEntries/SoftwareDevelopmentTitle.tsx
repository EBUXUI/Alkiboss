import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
/*----- Server Actions ------*/
import SearchIcon from "@/UI-Features/otherComponents/buttonComponent/searchIcon/homeSearch";
import EntryCards from './EntryCards'
export default function MainTitle() {
  const [open, setOpen] = useState(false);
  const [activePage, setActivePage] = useState<
  'Entries' |
  'Entries/Store'|
  'Entires/Retrieve'|
  'Entries/Refine'|
  'Entries/Erase'>('Entries')
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
                Use <span className={styles.TitleWolf}> Your Entries </span>|<span className={styles.MainSubTitleI}>The Hub of Database <span className={styles.TitleWolf}>Development.</span></span>
              </h1>

            </label>
             <EntryCards setActivePage={setActivePage}/>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <button
                className={styles.BookNow}
              >
                <Link href="/LaunchingSoon" className={styles.BookBtn}>View Database</Link>
              </button>
            </label>
          </article>
        </div>
      
    </>
  );
}
