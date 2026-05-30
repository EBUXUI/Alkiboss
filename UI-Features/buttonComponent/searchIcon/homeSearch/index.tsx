"use client";
import React, { useFormStatus } from "react-dom";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function homeSearchParameter() {
  //const {pending} = useFormStatus();
  return (
    <>
      <button
        id="searchParameter"
        //aria-disabled={pending}
        type="submit"
        className={` ${styles["HeaderSearchNumberIII"]} `}
      >
        <Link href="/Queried Results">
          <FontAwesomeIcon
            className={styles.HeaderSearchIconII}
            icon={faSearch}
          />
        </Link>
      </button>
    </>
  );
}
