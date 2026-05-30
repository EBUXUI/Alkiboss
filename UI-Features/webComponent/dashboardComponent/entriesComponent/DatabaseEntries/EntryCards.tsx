import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";import { useState } from "react";
import React from "react";
import PrintingAccessories from "@/UI-Features/UI-Gallery/Luvra/StoreEntryI.jpg"
import DigitalStationery from "@/UI-Features/UI-Gallery/Luvra/LuvraXII.jpg"
import EcoFriendlyStationery from "@/UI-Features/UI-Gallery/Luvra/RefineEntryX.jpg"
import SchoolSupplies from "@/UI-Features/UI-Gallery/Luvra/EraseEntryXIV.jpg"
import { Carousel } from "react-responsive-carousel";

interface EntryProps {
  setActivePage: (page:
    'Entry' |
    'Entry/Store'|
    'Entry/Retrieve'|
    'Entry/Refine'|
    'Entry/Erase'
   ) => void
}

export default function EntryCards({setActivePage}: EntryProps) {
  const [oneWay, setOneWay] = useState(false);
  const [open, setOpen] = useState(false);
  
  const imageData = [
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "Finanvra",
      title: "Add an Entry To The Database",
      link: "",
      preview: "",
      button: "",
      buttonRef: "Store Entry",
    },
    {
      src: DigitalStationery,
      bg: DigitalStationery,
      alt: "Finanvra",
      title: "Get an Entry From The Database",
      link: "",
      preview: "",
      button: "",
      buttonRef: "Retrieve Entry",
    },
    {
      src: EcoFriendlyStationery,
      bg: EcoFriendlyStationery,
      alt: "Finanvra",
      title: "Edit an Entry In The Database",
      link: "",
      preview: "",
      button: "",
      buttonRef: "Refine Entry",
    },
    {
      src: SchoolSupplies,
      bg: SchoolSupplies,
      alt: "Finanvra",
      title: "Remove an Entry From The Database",
      link: "",
      preview: "",
      button: "",
      buttonRef: "Erase Entry",
    },
  ];

  const ImageCard = ({bg, alt, title, link, preview, button, buttonRef, whenClick }: any) => (
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
          <div 
          className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href={button} onClick={whenClick}>
            {buttonRef}
            </Link>
          </div>
    </div>
    </div>
  );

  return (
    <>
    <section className={styles.LuvUIFrame}>
      <div className={styles.LuvContentTitle}>
      <div className={styles.LuvProductImage}>
        {imageData.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
      </div>
    </section>

    </>
  );
}
