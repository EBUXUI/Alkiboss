/* =========================================================
   A. VIDEO VERSION - programmesModule
========================================================= */

"use client";

import styles from "@/styles/White/Main.module.css";
import Link from "next/link";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function programmesModule() {
  const [oneWay, setOneWay] = useState(false);

  const videoData = [
        {
            video: "/Videos/VideoK.mp4",
            title: "Afro Fusion Storytelling",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7637590092445404423",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7637590092445404423",
        },
        {
            video: "/Videos/VideoC.mp4",
            title: "Blind Character Reactions",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7521858014177955077",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/752185801417795507",
        },
        {
            video: "/Videos/VideoA.mp4",
            title: "Cinematic Lifestyle Scenes",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7405118961689431302",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7405118961689431302",
        },
        {
            video: "/Videos/VideoE.mp4",
            title: "Viral Comedy Moments",
            link: "https://www.tiktok.com/@alkiboss_classic/video/7521858014177955077",
            preview: "https://www.tiktok.com/@alkiboss_classic/video/7521858014177955077",
        }
  ];
   
  interface VideoProps {
    video: string;
    title: string;
    link: string;
    preview: string;
  }

  const VideoCard = ({
    video,
    title,
    link,
    preview,
  }: VideoProps) => (
    <div
      className={`${styles.MainProductElement} ${styles.MainProductElementAnime} ${styles.MainProductElementIsometric} ${styles.MainProductElementStackSlide} ${styles.Wrap}`}
    >
      <div className={styles.MainProductElementImage}>
        <video
          className={styles.MainProductElementImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div
        className={`${styles.MainProductGridNumber} ${styles.MainProductGridBg}`}
      >
        <Link href={link} className={styles.ProductName}>
          {title}
        </Link>

        <Link href={preview} className={styles.ProductPrice}>
          Watch
        </Link>
      </div>
    </div>
  );

  return (
    <>
      <section className={styles.HeroContentTitle}>
        <div className={styles.MainProductImage}>
          {videoData.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>

        <div className={styles.MainRouselButton}>
          <div className={styles.WrapI}>
            <div
              className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}
            >
              <Link href="/FoundationEntry/CrowdFunding">
                Join our Crowd Funding
              </Link>
            </div>
          </div>

          <div className={styles.WrapI}>
            <div
              className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}
            >
              <Link href="/GlobalParticipation/Volunteering/VirtualVolunteering">
                Become a Virtual Volunteer
              </Link>
            </div>
          </div>

          <div className={styles.WrapI}>
            <div
              className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}
            >
              <Link href="/GlobalParticipation/Awareness/CommunitySeminar">
                Join our Community Seminar
              </Link>
            </div>
          </div>

          <div className={styles.WrapI}>
            <div
              className={`${styles.MainProductGridNumberI} ${styles.MainProductGridBgI}`}
            >
              <Link href="/LaunchingSoon">
                Join our Medical Training
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
