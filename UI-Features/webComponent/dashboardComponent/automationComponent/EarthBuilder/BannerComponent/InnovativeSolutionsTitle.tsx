import Head from "next/head";
import styles from "@/styles/Hero/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import HealthRegime from "@/MyPotraits/BetikaII.png";
import HealthRegimeII from "@/MyPotraits/BangBetII.png";

export default function WorkshopTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <div className={styles.GridedFooterModule}>
            <div className={styles.ShopTitle}>
              <h1>Welcome To The Alkiboss Partner Network</h1>
            </div>

            <div className={styles.WithTitle}>
              <h2>
                Create • Promote • Earn • Grow With One Of Africa’s Fastest Growing
                Digital Communities
              </h2>
            </div>

            <div className={styles.VisionTitle}>
              <h3>
                This is more than just content — it’s a movement powered by creativity,
                entertainment, and real opportunities. Join the Alkiboss Partnership
                Program and become part of a vibrant network where creators, promoters,
                influencers, and brands connect to build viral campaigns, earn together,
                and reach millions across TikTok, Facebook, and Instagram. Whether you're
                here to collaborate, advertise, promote brands, or grow your audience,
                your journey starts here. 🚀
              </h3>
            </div>

            <div className={styles.Button}>
              <div
                className={`${styles["DonationProductGridNumberI"]} ${styles["InnovativeProductGridBgI"]}`}
              >
                <Link href="InnovativeSolutions/CancerDetection">
                  Join The Partnership
                </Link>
              </div>
            </div>
            </div>

            <div className={styles.GridedFooterModuleI}>
              <div className={styles.GridPropertyIII}>
                <div className={styles.FieldI}>
                  <div
                    className={`${styles["GridOne"]} ${styles["InnovativeSolutionElement"]} ${styles["Wrap"]}`}
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
                    <Link href="InnovativeSolutions/CancerDetection/ScheduleConsultation">
                      The Betika Community
                    </Link>
                  </div>
                </div>

                <div className={styles.FieldI}>
                  <div
                    className={`${styles["GridOne"]} ${styles["InnovativeSolutionElement"]} ${styles["Wrap"]}`}
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
                    <Link href="InnovativeSolutions/CancerDetection/SelfConduct">
                      The Bang Bet Community
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );
}