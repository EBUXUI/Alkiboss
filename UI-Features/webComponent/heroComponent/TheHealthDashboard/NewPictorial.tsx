import styles from "@/styles/Desktop.module.css";
import ForestBackground from "@/UI-Features/DBMS/Features/Background-A.png";
import ForestBackgroundII from "@/UI-Features/DBMS/Features/Background-B.png";
import ForestBackgroundIII from "@/UI-Features/DBMS/Features/Background-C.png";
import ForestBackgroundIV from "@/UI-Features/DBMS/Features/Background-D.png";
import ForestBackgroundV from "@/UI-Features/DBMS/Features/Background-E.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
export default class OperatingManagerPictorial extends Component {
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
