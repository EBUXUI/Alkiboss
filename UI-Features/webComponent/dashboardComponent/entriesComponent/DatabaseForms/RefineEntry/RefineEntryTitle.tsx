import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/*----- Server Actions ------*/
import SearchBar from "./DataEntrySearch";
import { useRouter } from "next/router";



export default function RefineEntryTitle() {
  
  return (
    <>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <h1
                className={styles.MainSubTitle}

              >
                Refine <span className={styles.TitleWolf}> An Entry </span>|<span className={styles.MainSubTitleI}>The Hub of Database Name <span className={styles.TitleWolf}>Development.</span></span>
              </h1>
            </label>
            
             
      
    </>
  );
}
