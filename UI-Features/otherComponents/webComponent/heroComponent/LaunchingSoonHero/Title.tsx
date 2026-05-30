import styles from '@/styles/Moduled/Desktop.module.css';
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
                Kaprew<span className={styles.TitleWolf}> Creations </span>|<span className={styles.MainSubTitleI}>The Page is <span className={styles.TitleWolf}>Under Construction</span></span>
              </h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>Your patience is of essence as we develop the interface</h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3>
                Hey there, curious explorer!
                You’ve caught us in the middle of something awesome.
                We’re brewing fresh code, painting pixels, and fine-tuning the magic behind the scenes just for you.
                We’re building something legendary, and we can’t wait to share it with you.
              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DetectionProductGridNumberI"]} ${styles["DetectionProductGridBgI"]}`}
              >
                <Link href="tel:_+254721766886">Contact Sales Representative</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
