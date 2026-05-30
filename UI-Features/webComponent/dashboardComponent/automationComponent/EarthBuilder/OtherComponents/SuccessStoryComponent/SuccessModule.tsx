import styles from "@/styles/Hero/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import Story from "@/UI-Features/UI-Gallery/CancerDetection/Volunteer.jpeg";
import StoryII from "@/UI-Features/UI-Gallery/CancerDetection/Sponsorship.jpeg";
import StoryIII from "@/UI-Features/UI-Gallery/CancerDetection/BrianI.jpeg";
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
                src={Story}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/LungCancerPlatform" className={styles.ProductName}>
             Service One
              </Link>
              
            </div>
            </div>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="House of Grace Foundation"
                src={StoryII}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
               <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BreastCancerPlatform" className={styles.ProductName}>
              Service Two
              </Link>
            </div>
            </div>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="House of Grace Foundation"
                src={StoryIII}
                quality={100}
                fill={true}
                style={{ objectFit: "cover" }}
              />
               <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/PancreaticCancerPlatform" className={styles.ProductName}>
              Service Three 
              </Link>
            </div>
            </div>
          </div>
          <div className={styles.MainProductImage}>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/LungCancerPlatform">
                Call To Action
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/BreastCancerPlatform">
                Call To Action
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/FoundationEntry/InnovativeSolutions/CancerDetection/PancreaticCancerPlatform">
                Call To Action
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
