import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";import { useState } from "react";
import React from "react";
import PaperProduct from "@/UI-Features/UI-Gallery/Kaprew/StickyNotes/StickyNotes.jpg"
import WritingInstruments from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenVIII.jpg"
import FilingSupplies from "@/UI-Features/UI-Gallery/Kaprew/FileFolder/FileFolderI.jpg"
import DeskTools from "@/UI-Features/UI-Gallery/Kaprew/DeskMat/DeskMatIII.jpg"
import PrintingAccessories from "@/UI-Features/UI-Gallery/Kaprew/PhotocopyingPapers/PhotocopyingPapersV.jpg"
import DigitalStationery from "@/UI-Features/UI-Gallery/Kaprew/LCDWritingTablet/LCDWritingTablet.jpg"
import EcoFriendlyStationery from "@/UI-Features/UI-Gallery/Kaprew/Pencil/PencilV.jpg"
import SchoolSupplies from "@/UI-Features/UI-Gallery/Kaprew/LeatherBag/LeatherBagXIII.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function programmesModule() {
  const [oneWay, setOneWay] = useState(false);
  const [open, setOpen] = useState(false);
  const imageData = [
    {
      src: PaperProduct,
      bg: PaperProduct,
      alt: "Kaprew Creations",
      title: "Paper Product",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: WritingInstruments,
      bg: WritingInstruments,
      alt: "Kaprew Creations",
      title: "Writing Instruments",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: FilingSupplies,
      bg: FilingSupplies,
      alt: "Kaprew Creations",
      title: "Filing Supplies",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: DeskTools,
      bg: DeskTools,
      alt: "Kaprew Creations",
      title: "Desk Tools",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "Kaprew Creations",
      title: "Printing Accessories",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: DigitalStationery,
      bg: DigitalStationery,
      alt: "Kaprew Creations",
      title: "Digital Stationery",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: EcoFriendlyStationery,
      bg: EcoFriendlyStationery,
      alt: "Kaprew Creations",
      title: "Eco-Friendly Stationery",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
    {
      src: SchoolSupplies,
      bg: SchoolSupplies,
      alt: "Kaprew Creations",
      title: "School Supplies",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
    },
  ];
  const ImageCard = ({bg, alt, title, link, preview }) => (
    <div className={`${styles.MainProductElement} ${styles.MainProductElementAnime} ${styles.MainProductElementIsometric} ${styles.MainProductElementStackSlide} ${styles.Wrap}`}>
       <div className={`${styles.MainProductElementImage}`}>
       <Image
        priority
        alt={alt}
        src={bg}
         
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
  );

  return (
    <>
      <section className={styles.HeroContentTitle}>
      <div className={styles.MainProductImage}>
        {imageData.map((image, index) => (
          <ImageCard key={index} {...image} />
        ))}
      </div>
      <div className={styles.MainRouselButton}>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/LaunchingSoonPaperProduct">View the Product</Link>
          </div>
        </div>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/LaunchingSoon/FilingSuppliesng">View the Product</Link>
          </div>
        </div>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/LaunchingSoonFilingSupplies">View the Product</Link>
          </div>
        </div>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/LaunchingSoon">View the Product</Link>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
