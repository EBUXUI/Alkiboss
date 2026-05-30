import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/*----- Server Actions ------*/
import SearchBar from "./DataEntrySearch";
import { useRouter } from "next/router";


export default function RetrieveEntryBtn() {
 
  return (
    <>
      
        
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <button
                className={styles.BookNow}
              >
                <Link href="" className={styles.BookBtn}>Retrieve Entry</Link>
              </button>
            </label>
        
      
    </>
  );
}
