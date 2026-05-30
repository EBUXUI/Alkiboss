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
                Kaprew<span className={styles.TitleWolf}> Creations </span>|<span className={styles.MainSubTitleI}>Fast & Reliable <span className={styles.TitleWolf}>Stationery Tenders</span></span>
              </h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>Deviating Sales from Product Ethic.</h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3> 
                Providing premium office supplies with unmatched consistency, ethics, and efficiency.
                Your procurement success starts with the right partner. Access Fast & Reliable Stationery 
                Tenders for Government and Private Enterprises.
              
              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DetectionProductGridNumberI"]} ${styles["DetectionProductGridBgI"]}`}
              >
                <Link href="/ReceiveAQuote">Get a Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
