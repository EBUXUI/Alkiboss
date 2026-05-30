import Head from "next/head";
import styles from "@/styles/Hero/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import HealthRegime from "@/UI-Features/UI-Gallery/CancerDetection/DonationIII.jpg";
import HealthRegimeII from "@/UI-Features/UI-Gallery/CancerDetection/CrowdIII.jpg";
import GlobalRouselModule from "./GlobalRouselModule";
export default function GlobalParticipationTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <GlobalRouselModule />
          <div className={styles.GridedFooterModule}>
            <div className={styles.ShopTitle}>
              <h1>Empower Your Office</h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>with Premium Stationery </h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3>
                From government tenders to private offices, we supply a full range of stationery essentials built for performance, presentation, and reliability. Whether you're planning bulk procurement or personal office upgrades,
                great ideas begin with great tools. Choose stationery that inspires action.
              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DonationProductGridNumberI"]} ${styles["InnovativeProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">View Product Catalog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
