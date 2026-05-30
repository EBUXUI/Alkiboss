import styles from "@/styles/White/Current/Home.module.css";
import MenuDerivative from "./menuDerivative";
import React from "react";


export default function menuHero() {
    return (
      <>
        <section className={styles.MenuContent}>
          <div className={styles.MenuModule}>
            <MenuDerivative />
          </div>
        </section>
      </>
    );
};
