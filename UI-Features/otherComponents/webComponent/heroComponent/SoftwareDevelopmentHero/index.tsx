import styles from "@/styles/White/Home.module.css";
import SoftwareDevelopmentTitle from "./SoftwareDevelopmentTitle";
import React from "react";


export default function SoftwareDevelopmentHero() {
    return (
      <>
        <section className={styles.MainHero}>
          <div className={styles.MainModule}>
                  <div className={styles.MainHeroContentModule}>
                    <SoftwareDevelopmentTitle />
                  </div>
          </div>
        </section>
      </>
    );
};
