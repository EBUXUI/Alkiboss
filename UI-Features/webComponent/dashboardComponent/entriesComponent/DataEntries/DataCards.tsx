import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";import { useState } from "react";
import React from "react";
import PrintingAccessories from "@/UI-Features/UI-Gallery/Luvra/LuvraXV.jpg"
import DigitalStationery from "@/UI-Features/UI-Gallery/Luvra/LuvraXVI.jpg"
import { Carousel } from "react-responsive-carousel";


export default function DataCards() {
  const [oneWay, setOneWay] = useState(false);
  const [open, setOpen] = useState(false);
  
  const imageData = [
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "Finanvra",
      title: "Import Data",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
      button: "/LaunchingSoon",
      buttonRef: "Import Data"
    },
    {
      src: DigitalStationery,
      bg: DigitalStationery,
      alt: "Finanvra",
      title: "Export Data",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
      button: "/LaunchingSoon",
      buttonRef: "Export Data"
    }
  ];
  const ImageCard = ({bg, alt, title, link, preview, button, buttonRef }: any) => (
    <div className={styles.ProductCatalog}>
    <div className={`${styles.LuvProductElement} ${styles.MainProductElementAnime} ${styles.MainProductElementIsometric} ${styles.MainProductElementStackSlide} ${styles.Wrap}`}>
      <div className={`${styles.MainProductElementImage}`}>
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
      <div className={`${styles.MainProductGridNumber} ${styles.MainProductGridBg}`}>
        
      <Link href={link} className={styles.ProductName}>
          {title}
        </Link>
        <Link href={preview} className={styles.ProductPrice}>
          View
        </Link>
      </div>
    </div>
    <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href={button}>
            {buttonRef}
            </Link>
          </div>
    </div>
    </div>
  );

  return (
    <>
    <section className={styles.LuvUIFrame}>
      <div className={styles.LuvContentTitleII}>
      <div className={styles.LuvProductImageII}>
        {imageData.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
      </div>
    </section>

    </>
  );
}
