import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import BallpointPen from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenI.jpg";
import FountainPen from "@/UI-Features/UI-Gallery/Kaprew/Pen/PenVII.jpg";
import WhiteboardMarker from "@/UI-Features/UI-Gallery/Kaprew/WhiteboardMarker/WhiteboardMarker.jpg";
import MechanicalPencil from "@/UI-Features/UI-Gallery/Kaprew/Pencil/PencilV.jpg";
import CopierPaper from "@/UI-Features/UI-Gallery/Kaprew/PhotocopyingPapers/PhotocopyingPapersIV.jpg";
import A4Diary from "@/UI-Features/UI-Gallery/Kaprew/A4Diary/DiaryVII.jpg";
import StickyNotes from "@/UI-Features/UI-Gallery/Kaprew/StickyNotes/StickyNotes.jpg";
import ReceiptBooks from "@/UI-Features/UI-Gallery/Kaprew/ReceiptBook/ReceiptBookVIII.jpg";
import FileFolder from "@/UI-Features/UI-Gallery/Kaprew/FileFolder/FileFolderII.jpg";
import ClipBoard from "@/UI-Features/UI-Gallery/Kaprew/ClipBoard/ClipBoard.jpg";
import DocumentEnvelope from "@/UI-Features/UI-Gallery/Kaprew/DocumentEnvelope/DocumentEnvelopeI.jpg";
import CardHolder from "@/UI-Features/UI-Gallery/Kaprew/CardHolder/CardHolder.jpg";
import Staplers from "@/UI-Features/UI-Gallery/Kaprew/Stapler/Stapler.jpg";
import Scissors from "@/UI-Features/UI-Gallery/Kaprew/Scissors/ScissorsI.jpg";
import DeskMats from "@/UI-Features/UI-Gallery/Kaprew/DeskMat/DeskMatII.jpg";
import Glue from "@/UI-Features/UI-Gallery/Kaprew/Glue/GlueVII.jpg";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function AgencyModule() {
  const [oneWay, setOneWay] = useState(false);
  return (
    <>
      <section className={styles.HeroContentTitle}>
        <div className={styles.FooterContentTitle}>
          <div className={styles.FooterTitleModule}>
            <div className={styles.GridedFooterModule}>
              <div className={styles.ShopTitle}>
                <label className={styles.MedicalTitle}>Stationery</label>
                <label className={styles.WithTitle}>Catalog</label>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MainProductImage}>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={BallpointPen}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Ballpoint Pen
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={FountainPen}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Fountain Pen
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={WhiteboardMarker}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Whiteboard Marker
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth Speed"
                src={MechanicalPencil}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={styles.ProductName}>
                  Normal Pencil
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MainProductImage}>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={CopierPaper}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Copier Paper
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={A4Diary}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                A4 Diary
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={StickyNotes}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Sticky Notes
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth Speed"
                src={ReceiptBooks}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={styles.ProductName}>
                  Receipt Book
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MainProductImage}>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={FileFolder}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                File Folder
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={ClipBoard}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Clip Board
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={DocumentEnvelope}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Document Envelope
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth Speed"
                src={CardHolder}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={styles.ProductName}>
                  Card Holder
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.MainProductImage}>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={Staplers}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Stapler
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={Scissors}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                Scissors
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
            className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
          >
            <Image
              priority
              alt="Earth Speed"
              src={DeskMats}
               
              fill={true}
              style={{ objectFit: "cover" }}
            />
            <div
              className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
            >
              <Link href="/LaunchingSoon" className={styles.ProductName}>
                DeskMat
              </Link>
              
            </div>
          </div>
          <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
          <div className={styles.MainProductContent}>
            <div
              className={`${styles["MainProductElement"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth Speed"
                src={Glue}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={styles.ProductName}>
                  Glue
                </Link>
              </div>
            </div>
            <div className={styles.WrapI}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">Purchase Product</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
