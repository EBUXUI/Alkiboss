import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useState } from "react";
/*----- Server Actions ------*/
import SearchIcon from "@/UI-Features/otherComponents/buttonComponent/searchIcon/homeSearch";
import ProgrammesModule from "@/UI-Features/otherComponents/webComponent/heroComponent/SoftwareDevelopmentHero/programmesModule";
export default function MainTitle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.MainHeroContent}>
        <div className={styles.MainHeroModule}>
          <article className={styles.MainHeroLayedOut}>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <h1
                className={styles.MainSubTitle}

              >
                Receive <span className={styles.TitleWolf}> Our Quote </span>|<span className={styles.MainSubTitleI}>The Hub of Great <span className={styles.TitleWolf}>Stationery</span></span>
              </h1>

            </label>
             <form className={styles.HSProperty}>
              <label htmlFor="queryHotelName"></label>
              <input
                className={styles.hotelSearch}
                placeholder={`Which Product Would You Love to Purchase...`}
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
                onClick={() => setOpen((prev) => !prev)}
              />
              <SearchIcon />
            </form>
             <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <h1
                className={styles.MainSubTitle}

              ><span className={styles.MainSubTitleI}>Our <span className={styles.TitleWolf}>Product Catalogue</span></span>
              </h1>

            </label>
            <ProgrammesModule/>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <button
                className={styles.BookNow}
              >
                <Link href="/LaunchingSoon" className={styles.BookBtn}>Generate Project</Link>
              </button>

            </label>
          </article>
        </div>
      </div>
    </>
  );
}
