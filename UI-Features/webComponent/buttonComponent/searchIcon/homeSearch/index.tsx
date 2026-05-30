'use client';

import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HomeSearchParameter() {
  return (
    <Link href="/Queried Results" className={styles.HeaderSearchNumberIII}>
      <FontAwesomeIcon className={styles.HeaderSearchIconII} icon={faSearch} />
    </Link>
  );
}
