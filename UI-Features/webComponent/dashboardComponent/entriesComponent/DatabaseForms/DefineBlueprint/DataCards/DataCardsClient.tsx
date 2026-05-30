"use client";

import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import React from "react";
import PrintingAccessories from "@/UI-Features/UI-Gallery/Characters/BrainCancerV.jpeg";
import DigitalStationery from "@/UI-Features/UI-Gallery/Characters/BrainCancerVI.jpeg";
import { Carousel } from "react-responsive-carousel";

interface ImageData {
  src: string | StaticImageData;
  bg: string | StaticImageData;
  alt: string;
  title: string;
  link: string;
  preview: string;
}

interface DataCardsClientProps {
  blueprints: string[];
}

export default function DataCardsClient({ blueprints }: DataCardsClientProps) {
  const defaultImages = [
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "HouseofGrace",
      title: "House of Grace Blueprint",
    },
    {
      src: DigitalStationery,
      bg: DigitalStationery,
      alt: "Finanvra",
      title: "Finanvra Blueprint",
    },
  ];

  const imageData: ImageData[] = blueprints.map((name) => {
    const isDefault =
      name === "HouseofGraceMetrics" || name === "FinanvraMetrics";
    const defaultIndex =
      name === "HouseofGraceMetrics" ? 0 : name === "FinanvraMetrics" ? 1 : -1;
    return {
      src: isDefault ? defaultImages[defaultIndex].src : PrintingAccessories,
      bg: isDefault ? defaultImages[defaultIndex].bg : PrintingAccessories,
      alt: isDefault ? defaultImages[defaultIndex].alt : name,
      title: isDefault ? defaultImages[defaultIndex].title : `${name} Blueprint`,
      link: `/blueprint/${name}`,
      preview: `/blueprint/${name}`,
    };
  });

  const ImageCard = ({ bg, alt, title, link, preview }: ImageData) => (
    <div className={styles.ProductCatalog}>
      <div
        className={`${styles.LuvProductElement} ${styles.MainProductElementAnime} ${styles.MainProductElementIsometric} ${styles.MainProductElementStackSlide} ${styles.Wrap}`}
      >
        <div className={styles.MainProductElementImage}>
          <Image
            priority
            alt={alt}
            src={bg}
            quality={100}
            fill={true}
            className={styles.MainProductElementImage}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div
          className={`${styles.MainProductGridNumber} ${styles.MainProductGridBg}`}
        >
          <Link href={link} className={styles.ProductName}>
            {title}
          </Link>
          <Link href={preview} className={styles.ProductPrice}>
            View
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <section className={styles.LuvUIFrame}>
        <div className={styles.LuvContentTitleII}>
            <div className={styles.LuvProductImageII}>
                {imageData.length === 0 ? (
                    <p> No Blueprints Available. </p>
                ) : (
                    <Carousel showThumbs={false} showStatus={false} autoPlay>
                        {
                            imageData.map((image, index) => (
                                <ImageCard key={index} {...image}/>
                            ))
                        }
                    </Carousel>
                )}
            </div>
        </div>
    </section>
  );
};
