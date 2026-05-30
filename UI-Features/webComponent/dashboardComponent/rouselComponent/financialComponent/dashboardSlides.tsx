import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Desktop.module.css";
import ProductModifications from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyII.jpeg";
import HPEnvy from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyVIII.jpeg";
import Incubator from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyXII.jpeg";
import LampBallast from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyIV.jpeg";
import DelicacyCatalog from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyResize.jpeg";
import PriceModifications from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyVII.jpeg";
import SlidesModifications from "@/UI-Features/UI-Gallery/DelicayCatalog/DelicacyX.jpeg";
import PromotionalModifications from "@/UI-Features/UI-Gallery/Prices/PricesVII.jpeg";
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
