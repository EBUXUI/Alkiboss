import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/UI-Features/UI-Gallery/Logo/LogoIV.jpg";
import React, { useState } from "react";

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
              <Image
                priority
                src={Logo}
                alt="Nale Security Logo"
                className={styles.MainHeroIcon}
                style={{ objectFit: "cover" }}
                 
              />

            </label>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <h1
                className={styles.MainSubTitle}

              >
                Strategy<span className={styles.TitleWolf}> Planner </span>|<span className={styles.MainSubTitleI}>Strategic Risk <span className={styles.TitleWolf}>Management Tool</span></span>
              </h1>

            </label>
            <label
              className={`${styles["MainTitle"]} ${styles["MainBg"]} ${styles['MainIcon']}`}
              htmlFor="queryHotelName"
            >
              <p
                className={styles.MainContext}

              > Habits develop into character, and good habits will lead you to a successful life. <br>
                </br>Excellence is doing your absolute best with the resources you have, don’t get stuck in the mud of perfection.
              </p>
            </label>  
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <button
                className={styles.BookNow}
              >
                <Link href="" className={styles.BookBtn}>How Our Tool Works</Link>
              </button>

            </label>
          </article>
        </div>
      </div>
    </>
  );
}
