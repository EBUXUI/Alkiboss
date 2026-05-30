import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import CrowdFundingBg from "@/MyPotraits/MainD.png";
import CrowdFunding from "@/MyPotraits/MainD.png";
import VirtualVolunteerBg from "@/MyPotraits/MainE.png";
import VirtualVolunteer from "@/MyPotraits/MainE.png";
import CommunitySeminarBg from "@/MyPotraits/MainF.png";
import CommunitySeminar from "@/MyPotraits/MainF.png";
import MedicalTrainingBg from "@/MyPotraits/MainG.png";
import MedicalTraining from "@/MyPotraits/MainG.png";
import { useState } from "react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function programmesModule() {
  const [oneWay, setOneWay] = useState(false);
  const imageData = [
    {
      src: CrowdFunding,
      //bg: CrowdFundingBg,
      alt: "Affordable Cancer Treatment",
      title: "Affordable Cancer Treatment Blog",
      link: "/FoundationalBlog/CancerRelatedBlogs/AffordableCancerTreatmentBlog",
      preview: "/FoundationalBlog/CancerRelatedBlogs/AffordableCancerTreatmentBlog",
    },
    {
      src: CrowdFundingBg,
      //bg: CrowdFundingBg,
      alt: "Early Cancer Detection",
      title: "Early Cancer Detection Blog",
      link: "/FoundationalBlog/CancerRelatedBlogs/EarlyCancerDetectionBlog",
      preview: "/FoundationalBlog/CancerRelatedBlogs/EarlyCancerDetectionBlog",
    },
    {
      src: MedicalTrainingBg,
      //bg: CrowdFundingBg,
      alt: "Disability Rights",
      title: "Disability Rights Blog",
      link: "/FoundationalBlog/DisabilityRelatedBlogs/DisabilityRightsBlog",
      preview: "/FoundationalBlog/DisabilityRelatedBlogs/DisabilityRightsBlog",
    },
    {
      src: VirtualVolunteerBg,
      //bg: CrowdFundingBg,
      alt: "Role of Genetic Testing",
      title: "Role of Genetic Testing Blog",
      link: "/FoundationalBlog/DisabilityRelatedBlogs/RoleofGeneticTestingBlog",
      preview: "/FoundationalBlog/DisabilityRelatedBlogs/RoleofGeneticTestingBlog",
    },
    {
      src: VirtualVolunteer,
      //bg: VirtualVolunteerBg,
      alt: "House of Grace Foundation",
      title: "Role of Telemedicine Blog",
      link: "/FoundationalBlog/GrowthRelatedBlogs/RoleofTelemedicineBlog",
      preview: "/FoundationalBlog/GrowthRelatedBlogs/RoleofTelemedicineBlog",
    },
    {
      src: CommunitySeminar,
      //bg: CommunitySeminarBg,
      alt: "House of Grace Foundation",
      title: "The Funding Hope Blog",
      link: "/FoundationalBlog/GrowthRelatedBlogs/TheFundingHopeBlog",
      preview: "/FoundationalBlog/GrowthRelatedBlogs/TheFundingHopeBlog",
    },
    {
      src: CommunitySeminarBg,
      //bg: MedicalTrainingBg,
      alt: "House of Grace Foundation",
      title: "Patnering with Hospitals Blog",
      link: "/FoundationalBlog/HealthcareRelatedBlogs/PatneringwithHospitalsBlog",
      preview: "/FoundationalBlog/HealthcareRelatedBlogs/PatneringwithHospitalsBlog",
    },
    {
      src: MedicalTraining,
      //bg: CrowdFundingBg,
      alt: "House of Grace Foundation",
      title: "Patnering with Schools Blog",
      link: "/FoundationalBlog/HealthcareRelatedBlogs/PatneringwithSchoolsBlog",
      preview: "/FoundationalBlog/HealthcareRelatedBlogs/PatneringwithSchoolsBlog",
    },
  ];
  const ImageCard = ({ src, alt, title, link, preview }) => (
    <div className={`${styles.ProductElement} ${styles.MainProductElementAnime} ${styles.MainProductElementIsometric} ${styles.MainProductElementStackSlide} ${styles.Wrap}`}>
       <div className={`${styles.ProductElementImage}`}>
       <Image
        priority
        alt={alt}
        src={src}
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
          Read
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
     
    </section>

    </>
  );
}
