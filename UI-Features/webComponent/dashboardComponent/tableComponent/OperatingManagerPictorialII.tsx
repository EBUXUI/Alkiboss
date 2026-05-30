import styles from "@/styles/Modern/Rousel.module.css";
import ForestBackground from "@/UI-Features/DBMS/Features/WhiteBlue-A.jpg";
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
              </div>
          </div>
      </>
    );
  }
}
