import styles from "@/styles/Hero/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import Regime from "@/UI-Features/UI-Gallery/CancerDetection/LungCancerI.jpg"
import RegimeII from "@/UI-Features/UI-Gallery/CancerDetection/BreastCancer.jpg";
import RegimeIII from "@/UI-Features/UI-Gallery/CancerDetection/PancreaticCancer.jpg"
import RegimeIV from "@/UI-Features/UI-Gallery/CancerDetection/BrainCancer.jpg";
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
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/LungCancerPlatform" className={styles.ProductName}>
              Lung Cancer
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
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BreastCancerPlatform" className={styles.ProductName}>
              Breast Cancer
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
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/PancreaticCancerPlatform" className={styles.ProductName}>
              Pancreatic Cancer
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
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BrainCancerPlatform" className={styles.ProductName}>
              Brain Cancer
              </Link>
            </div>
            </div>
          </div>
          <div className={styles.MainProductImage}>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/LungCancerPlatform">Start Lung Cancer Treatment</Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BreastCancerPlatform">Start Breast Cancer Treatment</Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/PancreaticCancerPlatform">Start Pancreatic Cancer Treatment</Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BrainCancerPlatform">Start Brain Cancer Treatment</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
