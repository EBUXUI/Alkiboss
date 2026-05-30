import styles from '@/styles/Legal/Home.module.css';
import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/UI-Features/UI-Gallery/CancerDetection/BioTechV.jpg"
import HeroImageII from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunityI.jpg"
import HeroImageIII from "@/UI-Features/UI-Gallery/CancerDetection/DisabledCommunity.jpg"
import HeroImageIV from "@/UI-Features/UI-Gallery/CancerDetection/CancerCommunity.jpg"
import HeroImageV from "@/UI-Features/UI-Gallery/CancerDetection/CrowdI.jpg"
import HeroImageVI from "@/UI-Features/UI-Gallery/CancerDetection/DisabledCommunityI.jpg"
import HeroImageVII from "@/UI-Features/UI-Gallery/CancerDetection/CrowdIII.jpg"
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
