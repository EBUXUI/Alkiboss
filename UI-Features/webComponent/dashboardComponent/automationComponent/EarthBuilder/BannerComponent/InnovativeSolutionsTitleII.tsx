import Head from "next/head";
import styles from "@/styles/Hero/Home.module.css";
import Link from "next/link";
import HealthRegime from "@/MyPotraits/E.png";
import HealthRegimeII from "@/MyPotraits/D.png";
import HealthRegimeIII from "@/MyPotraits/PepetaIII.png"
import HealthRegimeIV from "@/MyPotraits/YoucinII.png";
import Image from "next/image";

export default function WorkshopTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          
          {/* ========================================= */}
          {/* LEFT SIDE - AFFILIATED BRANDS */}
          {/* ========================================= */}

          <div className={styles.GridedFooterModuleI}>
            <div className={styles.GridPropertyIII}>

              {/* ========================================= */}
              {/* CARD ONE */}
              {/* ========================================= */}

              <div className={styles.FieldI}>
                <div
                  className={`${styles["GridOne"]} ${styles["InnovativeSolutionElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="Affiliate Partnership"
                    src={HealthRegimeIII}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />

                </div>

                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link href="InnovativeSolutions/GeneticScreening/ScheduleConsultation">
                    Join the Pepeta Community
                  </Link>
                </div>
              </div>

              {/* ========================================= */}
              {/* CARD TWO */}
              {/* ========================================= */}

              <div className={styles.FieldI}>
                <div
                  className={`${styles["GridOne"]} ${styles["InnovativeSolutionElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="Affiliate Partnership"
                    src={HealthRegimeIV}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link href="InnovativeSolutions/GeneticScreening/SelfConduct">
                    Join The YouCin Community
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE - CONTINUATION HERO */}
          {/* ========================================= */}

          <div className={styles.GridedFooterModule}>

            <div className={styles.ShopTitle}>
              <h1>
                Discover Brands Ready To Grow With You
              </h1>
            </div>

            <div className={styles.WithTitle}>
              <h2>
                Exclusive Affiliate Partnerships Designed For Creators,
                Influencers, Promoters & Digital Entrepreneurs
              </h2>
            </div>

            <div className={styles.VisionTitle}>
              <h3>
                Every partnership inside the Alkiboss Network is built around
                one mission — creating real value through creativity,
                entertainment, engagement, and digital influence. From gaming
                brands and fintech platforms to viral campaigns and online
                services, each affiliated company offers unique opportunities
                for creators and communities to collaborate, grow audiences,
                increase visibility, and unlock new earning potential. Explore
                immersive brand experiences tailored to each partner and connect
                with opportunities built for the modern digital generation.
              </h3>
            </div>

            <div className={styles.Button}>
              <div
                className={`${styles["DonationProductGridNumberI"]} ${styles["DonationProductGridBgI"]}`}
              >
                <Link href="InnovativeSolutions/GeneticScreening">
                  Explore Partner Brands
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}