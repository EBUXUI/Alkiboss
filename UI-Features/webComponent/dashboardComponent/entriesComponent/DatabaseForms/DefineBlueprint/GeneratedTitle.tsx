import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/*----- Server Actions ------*/
import { useRouter } from "next/router";



export default function GeneratedTitle() {
  
  return (
    <>
    <label className={`${styles["MainTitle"]}`} htmlFor="queryHotelName">
              <h1 className={styles.MainSubTitle}>
                Generated <span className={styles.TitleWolf}> Databases </span>|
                <span className={styles.MainSubTitleI}>
                  The Hub of Database{" "}
                  <span className={styles.TitleWolf}>Development.</span>
                </span>
              </h1>
            </label>
    </>
  );
}
