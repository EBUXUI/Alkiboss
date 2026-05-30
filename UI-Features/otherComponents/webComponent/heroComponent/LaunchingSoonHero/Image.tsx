import styles from '@/styles/Legal/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import HeroImage from "@/UI-Features/UI-Gallery/Kaprew/WhiteboardMarker/WhiteboardMarkerIX.jpg"
import HeroImageII from "@/UI-Features/UI-Gallery/Kaprew/LCDWritingTablet/LCDWritingTabletXI.jpg"
import HeroImageIII from "@/UI-Features/UI-Gallery/Kaprew/CardHolder/CardHolderVI.jpg"
import HeroImageIV from "@/UI-Features/UI-Gallery/Kaprew/PackagingCourier/PackagingCourierVI.jpg"
import HeroImageV from "@/UI-Features/UI-Gallery/Kaprew/DocumentEnvelope/DocumentEnvelope.jpg"
import HeroImageVI from "@/UI-Features/UI-Gallery/Kaprew/LeatherBag/LeatherBagXIII.jpg"
import HeroImageVII from "@/UI-Features/UI-Gallery/Kaprew/DeskMat/DeskMatXI.jpg"
import HeroImageVIII from "@/UI-Features/UI-Gallery/Kaprew/ReceiptBook/ReceiptBookXII.jpg"
export default function DonationHeroImageComponent() {
  const images = [

    HeroImage,
    HeroImageII,
    HeroImageIII,
    HeroImageIV,
    HeroImageVIII,
    HeroImageV,
    HeroImageVI,
    HeroImageVII,

  ];

  return (
    <>
      <div className={styles.RouselContentTitle}>
        <div className={styles.RouselTitleModule}>
          <div className={styles.LaunchingSoonHeroModule}>
            {
              images.map((imgSrc, index) => (
                <span
                  key={index}
                  style={{ ['--i' as any]: index + 1 }}
                  id={`${index + 1}`}
                  className={`${styles["DonationProductElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt={`Earth Speed Image ${index + 1}`}
                    src={imgSrc}
                     
                    fill={true}
                    className={styles.RotatingImageComponent}
                    style={{ objectFit: "cover" }}
                  />
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};
``