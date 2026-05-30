import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Desktop.module.css";
import ProductModifications from "@/UI-Features/DBMS/Features/Contract-A.jpg";
import HPEnvy from "@/UI-Features/DBMS/Features/Contract-B.jpg";
import Incubator from "@/UI-Features/DBMS/Features/Contract-C.jpg";
import LampBallast from "@/UI-Features/DBMS/Features/Contract-G.jpg";
import DelicacyCatalog from "@/UI-Features/DBMS/Features/Contract-H.jpg";
import PriceModifications from "@/UI-Features/DBMS/Features/Contract-I.jpg";
import SlidesModifications from "@/UI-Features/DBMS/Features/Contract-J.jpg";
import PromotionalModifications from "@/UI-Features/DBMS/Features/Contract-K.jpg";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class SlidingRousel extends Component {
  render() {
    return (
      <section
        className={`${styles["CarouselContainer"]} ${styles["BannerCarousel"]}`}
      >
        <Carousel
          showArrows={true}
          autoPlay={true}
          transitionTime={100}     
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={100}
          showThumbs={false}
          className={styles.NextSlideCarousel}
        >
          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit:"cover"}}
              src={ProductModifications}
              alt=""
              sizes="100vw"
            />
            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/ConstructionHardware"
              >
                Product Modifications
              </Link>
            </p>
          </div>

          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit: "cover" }}
              src={PriceModifications}
              alt="John & Jo's Restaurant"
            />

            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/Workshop"
              >
                Price Modifications
              </Link>
            </p>
          </div>

          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit: "cover" }}
              src={SlidesModifications}
              alt="John & Jo's Restaurant"
            />

            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/MedicalImaging"
              >
                Slides Modifications
              </Link>
            </p>
          </div>

          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit: "cover" }}
              src={PromotionalModifications}
              alt="Annex Investments Limited Kenya"
            />

            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/ScientificReagents"
              >
                Promotional Modifications
              </Link>
            </p>
          </div>
        </Carousel>

        <Carousel
          preventMovementUntilSwipeScrollTolerance={true}
          swipeScrollTolerance={100}
          showArrows={true}
          showThumbs={false}
          className={styles.NextSlideCarousel}
        >
          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{objectFit:"cover"}}
              src={DelicacyCatalog}
              alt="Annex Investments Limited Kenya"
            />

            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/DiagnosticEquipments"
              >
                Delicacy Catalog
              </Link>
            </p>
          </div>

          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit: "cover" }}
              src={HPEnvy}
              alt="Annex Investments Limited Kenya"
            />

            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/DiagnosticEquipments"
              >
               Seasonal Offers
              </Link>
            </p>
          </div>
          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit: "cover" }}
              src={LampBallast}
              alt="Annex Investments Limited Kenya"
            />

            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/DiagnosticEquipments"
              >
                Schedule Organizer
              </Link>
            </p>
          </div>

          <div className={`${styles["Carousel"]} ${styles["CarouselCenter"]}`}>
            <Image
              priority
              className={styles.CarouselImage}
              fill={true}
              style={{ objectFit: "cover" }}
              src={Incubator}
              alt="Annex Investments Limited Kenya"
            />
            <p className="FieldIntroLink">
              <Link
                className={styles.FieldIntroLink}
                href="/Catalouge/DiagnosticEquipments"
              >
                Recreational Content
              </Link>
            </p>
          </div>
        </Carousel>
      </section>
    );
  }
}
