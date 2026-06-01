import styles from "@/styles/Bg/Main.module.css";
import ForestBackground from "@/MyPotraits/GreenWhite/GreenX.jpg";
import ForestBackgroundII from "@/MyPotraits/GreenWhite/GreenVIII.jpg";
import ForestBackgroundIII from "@/MyPotraits/GreenWhite/GreenX.jpg";
import ForestBackgroundIV from "@/MyPotraits/GreenWhite/GreenX.jpg";
import ForestBackgroundV from "@/MyPotraits/GreenWhite/GreenX.jpg";
import Image from "next/image";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
export default class BackgroundComponentLoginPictorial extends Component {
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
                  alt="Kenyan Management Consultancy Services"
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
                  alt="Kenyan Management Consultancy Services"
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
                  alt="Kenyan Management Consultancy Services"
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
                  alt="Kenyan Management Consultancy Services"
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
                  alt="Kenyan Management Consultancy Services"
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
