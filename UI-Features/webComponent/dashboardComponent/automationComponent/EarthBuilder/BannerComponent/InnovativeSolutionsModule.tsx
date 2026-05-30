import styles from "@/styles/Hero/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import RegimeIII from "@/MyPotraits/KessGameIII.png";
import RegimeII from "@/MyPotraits/KE7II.png";
import Regime from "@/MyPotraits/KessGameII.png";
import RegimeIV from "@/MyPotraits/B.png";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class WorkshopModule extends Component {
  render() {
    return (
      <>
       
        <section className={styles.HeroContentTitle}>
          
          <div className={styles.MainProductImage}>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="House of Grace Foundation"
                src={Regime}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="House of Grace Foundation"
                src={RegimeII}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="House of Grace Foundation"
                src={RegimeIII}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className={styles.MainProductImage}>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/LungCancerPlatform">
                Join the Gosupa Community
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BreastCancerPlatform">
                Join the KE7 Community
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/PancreaticCancerPlatform">
                Join the Kess Game Community
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
