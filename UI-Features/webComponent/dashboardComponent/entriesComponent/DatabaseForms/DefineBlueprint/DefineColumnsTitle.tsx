'use client';
import Head from "next/head";
import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/*----- Server Actions ------*/
import { useRouter } from "next/router";

export type BlueprintNameProps = {
  BlueprintName: (name:
    ''
  ) => void;
}

export default function DefineColumnsTitle({BlueprintName}: BlueprintNameProps) {
  const [dbName, setDbName] = useState(false);
  
  return (
    <>             
    <label className={`${styles["MainTitle"]}`} htmlFor="queryHotelName">
                <h1 className={styles.MainSubTitle}>
                  Define <span className={styles.TitleWolf}> Your Blueprint Columns </span>|
                  <span className={styles.MainSubTitleI}>
                    The Hub of {BlueprintName.name}
                    <span className={styles.TitleWolf}>Development.</span>
                  </span>
                </h1>
              </label>
    </>
  );
}
