import Head from "next/head";
import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import React, { useEffect, useState } from "react";
/*----- Server Actions ------*/
import { useRouter } from "next/router";

interface ViewBlueprintProps {
  setActivePage: (page: 
    'HouseofGrace' | 'Finanvra'
  ) => void;
}

export default function ViewBlueprintBtn({setActivePage}: ViewBlueprintProps) {
  
  return (
    <>
      <div className={styles.WrapI}>
        <div
          className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}
        >
          <Link 
          onClick={
            ()=>{
              setActivePage('Finanvra')
            }
          }
          href="">View Database</Link>
        </div>
      </div>
    </>
  );
}
