'use client'
import React, { useFormStatus } from "react-dom";
import Link from "next/link";
import styles from "@/styles/Home.module.css"

export default function SearchParameter(){
    //const {pending} = useFormStatus();
    return(
        <>
        <button
        id="searchParameter"
        //aria-disabled={pending}
        type="submit"
        className={`${styles['GridBgIII']} ${styles['GridNumberIII']} ${styles['GridSpan']}`}
        >
            <Link href="/Queried Results" className={styles.Link}>
            Search Available Flight
            </Link>
        </button>
        </>
    )
}