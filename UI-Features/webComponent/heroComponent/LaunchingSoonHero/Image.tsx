import styles from '@/styles/Legal/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/MyPotraits/MainB.png"
import HeroImageII from "@/MyPotraits/MainC.png"
import HeroImageIII from "@/MyPotraits/MainD.png"
import HeroImageIV from "@/MyPotraits/MainE.png"
import HeroImageV from "@/MyPotraits/MainF.png"
import HeroImageVI from "@/MyPotraits/MainG.png"
import HeroImageVII from "@/MyPotraits/MainH.png"
import { Carousel } from 'react-responsive-carousel';
export default function DonationHeroImageComponent() {
  const images = [
    
    HeroImage,
    HeroImageII,
    HeroImageIII,
    HeroImageIV,
    HeroImageV,
    HeroImageVI,
    HeroImageVI,
    HeroImageVII

  ];

  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
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
                    alt={`House of Grace Foundation Image ${index + 1}`}
                    src={imgSrc}
                    quality={100}
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
