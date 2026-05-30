import styles from '@/styles/Moduled/Current/Desktop.module.css';
import Link from "next/link";
export default function CancerComponentTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModuleI}>
          <div className={styles.GridedFooterModule}>
            <div className={styles.ShopTitle}>
              <h1
                className={styles.MainSubTitle}

              >
                In the<span className={styles.TitleWolf}> Spirit </span>|<span className={styles.MainSubTitleI}>that refuses to <span className={styles.TitleWolf}>give up</span></span>
              </h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>We Rise. We Empower. We Inspire.</h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3>
                Be part of a journey where limitations turn into possibilities, and challenges become victories, Together, we rise, we empower, we inspire.
              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DetectionProductGridNumberI"]} ${styles["DetectionProductGridBgI"]}`}
              >
                <Link href="/LaunchingSoon">View Our Disability Schedule</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
