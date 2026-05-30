import styles from "@/styles/Hero/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import Regime from "@/UI-Features/UI-Gallery/CancerDetection/VisualImpaired.jpg"
import RegimeII from "@/UI-Features/UI-Gallery/CancerDetection/HearingImpaired.jpg";
import RegimeIII from "@/UI-Features/UI-Gallery/CancerDetection/SpinalCordImpairment.jpg"
import RegimeIV from "@/UI-Features/UI-Gallery/CancerDetection/LimbImpairment.jpg";
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
              <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/VisualImpairmentPlatform" className={styles.ProductName}>
                Visual Impairment
              </Link>
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/VisualImpairmentPlatform" className={styles.ProductPrice}>
                View
              </Link>
            </div>
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
               <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/HearingImpairmentPlatform" className={styles.ProductName}>
                Hearing Loss
              </Link>
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/HearingImpairmentPlatform" className={styles.ProductPrice}>
                View
              </Link>
            </div>
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
               <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/SpinalCordImpairmentPlatform" className={styles.ProductName}>
                Spinal Cord-Related
              </Link>
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/SpinalCordRelatedPlatform" className={styles.ProductPrice}>
                View
              </Link>
            </div>
            </div>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="House of Grace Foundation"
                src={RegimeIV}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/LimbAmputationPlatform" className={styles.ProductName}>
                Limb Amputation
              </Link>
              <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/LimbAmputationPlatform" className={styles.ProductPrice}>
                View
              </Link>
            </div>
            </div>
          </div>
          <div className={styles.MainProductImage}>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/VisualImpairmentPlatform">Start Disability Treatment</Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/HearingImpairmentPlatform">Start Disability Treatment</Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/SpinalCordRelatedPlatform">Start Disability Treatment</Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/GeneticScreening/LimbAmputationPlatform">Start Disability Treatment</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
