import styles from '@/styles/Moduled/Current/Desktop.module.css';
import Link from "next/link";
export default function CancerComponentTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModuleI}>
          <div className={styles.GridedFooterModule}>
            <div className={styles.ShopTitle}>
              <h1 className={styles.MainSubTitle}>
  Meet <span className={styles.TitleWolf}>Alkiboss</span> | The Creator Who Turns
  <span className={styles.MainSubTitleI}> Everyday Moments Into <span className={styles.TitleWolf}>Comedy Gold</span></span>
</h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>Millions Laugh. Millions Watch. The Story Continues.</h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3>
                From hilarious skits to unforgettable characters, discover the content
  that has captured millions of views and built a community that keeps
  coming back for more.
              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DetectionProductGridNumberI"]} ${styles["DetectionProductGridBgI"]}`}
              >
                <Link href="#AllContent">Watch The Latest Comedy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
