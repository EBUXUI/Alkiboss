import styles from "@/styles/Desktop.module.css";
import ForestBackground from "@/Main-Gallery/Abstract-Patterns/Forest-Abstract/ForestIII.jpg";
import ForestBackgroundII from "@/Main-Gallery/Abstract-Patterns/Forest-Abstract/ForestIV.jpg";
import ForestBackgroundIII from "@/Main-Gallery/Abstract-Patterns/Forest-Abstract/ForestI.jpg";
import ForestBackgroundIV from "@/Main-Gallery/Abstract-Patterns/Forest-Abstract/ForestVI.jpg";
import ForestBackgroundV from "@/Main-Gallery/Abstract-Patterns/Forest-Abstract/ForestV.jpg";
import Image from "next/image";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default class LoginPictorial extends Component {
  render() {
    return (
      <>
        <div className={styles.LoginImage}>
          <div className={styles.LoginBackground}>
            <Carousel
              showArrows={false}
              autoPlay={true}
              autoFocus={true}
              infiniteLoop={true}
              transitionTime={500}
              showIndicators={false}
              showStatus={false}
              preventMovementUntilSwipeScrollTolerance={true}
              swipeScrollTolerance={100}
              showThumbs={false}
              className={styles.LoginSlideRousel}
            >
              <div
                className={`${styles["LoginRousel"]} ${styles["LoginRouselCenter"]}`}
              >
                <Image
                  priority
                  alt="Hello Background"
                  src={ForestBackground}
                  quality={100}
                  placeholder="blur"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
               <div
                className={`${styles["LoginRousel"]} ${styles["LoginRouselCenter"]}`}
              >
                <Image
                  priority
                  alt="Hello Background"
                  src={ForestBackgroundII}
                  quality={100}
                  placeholder="blur"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
               <div
                className={`${styles["LoginRousel"]} ${styles["LoginRouselCenter"]}`}
              >
                <Image
                  priority
                  alt="Hello Background"
                  src={ForestBackgroundIII}
                  quality={100}
                  placeholder="blur"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
               <div
                className={`${styles["LoginRousel"]} ${styles["LoginRouselCenter"]}`}
              >
                <Image
                  priority
                  alt="Hello Background"
                  src={ForestBackgroundIV}
                  quality={100}
                  placeholder="blur"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
               <div
                className={`${styles["LoginRousel"]} ${styles["LoginRouselCenter"]}`}
              >
                <Image
                  priority
                  alt="Hello Background"
                  src={ForestBackgroundV}
                  quality={100}
                  placeholder="blur"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}
