import styles from "@/styles/Bg/Main.module.css";
import ForestBackground from "@/UI-Features/UI-Gallery/Curaad/Background/Bg.png";
import ForestBackgroundII from "@/UI-Features/UI-Gallery/Curaad/Background/BgVIII.png";
import ForestBackgroundIII from "@/UI-Features/UI-Gallery/Curaad/Background/BgV.png";
import ForestBackgroundIV from "@/UI-Features/UI-Gallery/Curaad/Background/BgIII.png";
import ForestBackgroundV from "@/UI-Features/UI-Gallery/Curaad/Background/BgIV.png";
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
