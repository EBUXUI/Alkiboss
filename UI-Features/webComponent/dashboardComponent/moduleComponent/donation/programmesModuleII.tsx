import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import BrainTrainingBg from "@/UI-Features/UI-Gallery/BrainCancer/BrainCancer.jpeg";
import BrainTraining from "@/UI-Features/UI-Gallery/BrainCancer/BrainCancerII.jpeg";
import MainBg from "@/UI-Features/UI-Gallery/BrainCancer/BrainCancerV.jpeg";
import MovementTrainingBg from "@/UI-Features/UI-Gallery/MuscularDystrophy/MuscularDystrophyV.jpeg";
import MovementTraining from "@/UI-Features/UI-Gallery/MuscularDystrophy/MuscularDystrophyI.jpeg";
import BiotechMedicineBg from "@/UI-Features/UI-Gallery/ScientificReagents/Acetylene/Acetylene.jpeg";
import BiotechMedicine from "@/UI-Features/UI-Gallery/ScientificReagents/Acetylene/AcetyleneV.jpeg";
import AssistiveTechnologyBg from "@/UI-Features/UI-Gallery/LimbTreatment/LimbTreatmentVIII.jpeg";
import AssistiveTechnology from "@/UI-Features/UI-Gallery/LimbTreatment/LimbTreatmentX.jpeg";

import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function AgencyModule() {
  const [oneWay, setOneWay] = useState(false);
  const imageData = [
    {
      src: BrainTraining,
      bg: BrainTrainingBg,
      alt: "House of Grace Foundation",
      title: "Grace Funding Platform",
      link: "/GraceFunding/Germany",
      preview: "/GraceFunding/Preview",
    },
    {
      src: MovementTraining,
      bg: MovementTrainingBg,
      alt: "House of Grace Foundation",
      title: "Grace Virtual Platform",
      link: "/GlobalRim/India",
      preview: "/GlobalRim/Germany",
    },
    {
      src: BiotechMedicine,
      bg: BiotechMedicineBg,
      alt: "House of Grace Foundation",
      title: "Grace Community Seminar",
      link: "/GlobalRim/Germany",
      preview: "/GlobalRim/Germany",
    },
    {
      src: AssistiveTechnology,
      bg: AssistiveTechnologyBg,
      alt: "House of Grace Foundation",
      title: "Grace Medical Training",
      link: "/GlobalRim/Germany",
      preview: "/GlobalRim/Germany",
    },
  ];
  const ImageCard = ({ bg, src, alt, title, link, preview }) => (
    <div className={`${styles.MainProductElement} ${styles.MainProductElementAnime} ${styles.MainProductElementIsometric} ${styles.MainProductElementStackSlide} ${styles.Wrap}`}>
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
        <div className={`${styles.MainProductElement}`}>
        <Image
        priority
        alt={alt}
        src={src}
        quality={100}
        fill={true}
        className={styles.MainProductElementImage}
        style={{ objectFit: "cover" }}
      />
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
            <Link href="/HealthDashboard/CrowdFunding"> Brain Training Platform</Link>
          </div>
        </div>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/HealthDashboard/VirtualVolunteer"> Movement Training Platform</Link>
          </div>
        </div>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/HealthDashboard/CommunitySeminar">Biotech Medicine Platform</Link>
          </div>
        </div>
        <div className={styles.WrapI}>
          <div className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}>
            <Link href="/HealthDashboard/MedicalTraining">Assistive Technology Platform</Link>
          </div>
        </div>
      </div>
    </section>

    </>
  );
}
