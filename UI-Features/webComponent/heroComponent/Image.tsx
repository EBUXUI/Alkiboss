import styles from '@/styles/Legal/Current/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import HeroImage from "@/MyPotraits/E.png"
import HeroImageII from "@/MyPotraits/D.png"
import HeroImageIII from "@/MyPotraits/C.png"
import HeroImageIV from "@/MyPotraits/D.png"
import HeroImageV from "@/MyPotraits/C.png"
import HeroImageVI from "@/MyPotraits/E.png"
import HeroImageVII from "@/MyPotraits/C.png"
import HeroImageVIII from "@/MyPotraits/D.png"
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
``
