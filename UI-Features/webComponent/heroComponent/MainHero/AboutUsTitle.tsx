import Head from "next/head";
import styles from "@/styles/Hero/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import HealthRegime from "@/MyPotraits/MainC.png";
import HealthRegimeII from "@/MyPotraits/MainB.png";
export default function WorkshopTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <div className={styles.GridedFooterModuleI}>
            <div className={styles.GridPropertyIII}>
              <div className={styles.FieldI}>
                <div
                  className={`${styles["GridOne"]} ${styles["InnovativeSolutionElementXV"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={HealthRegime}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  

                </div>
                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link target="_blank" href="https://www.tiktok.com/@alkiboss_classic">Visit Tiktok Channel</Link>
                </div>
              </div>
              <div className={styles.FieldI}>
                <div
                  className={`${styles["GridOne"]} ${styles["InnovativeSolutionElementXV"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={HealthRegimeII}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link target="_blank" href="https://www.youtube.com/@alkibossclassic">Visit Youtube Channel</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.GridedFooterModule}>
            <div className={styles.ShopTitle}>
              <h1>Laughter Withheld In Banter.</h1>
            </div>

            <div className={styles.WithTitle}>
              <h2>
                Kenyan Blind-Character Comedian • Afro Fusion Artist • Content Creator
              </h2>
            </div>

            <div className={styles.VisionTitle}>
              <h3>
                Step into the world of a visionary Kenyan creator blending blind-character
                comedy, Afro-fusion music, cinematic storytelling, and unforgettable
                entertainment experiences. From hilarious public interactions and emotional
                music performances to luxury-inspired visuals and viral content, every
                scene is designed to inspire laughter, creativity, and modern African
                culture.
              </h3>
            </div>

            <div className={styles.Button}>
              <div
                className={`${styles["DonationProductGridNumberI"]} ${styles["InnovativeProductGridBgI"]}`}
              >
                <Link href="#AllContent">
                  Explore The Creator Universe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
