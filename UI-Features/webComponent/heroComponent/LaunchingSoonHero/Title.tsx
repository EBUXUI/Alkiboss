import styles from '@/styles/Legal/Home.module.css';

export default function CancerHeroTitle() {
  return (
    <>

      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <div className={styles.LaunchTitleModule}>
            <label
              className={`${styles["MainTitle"]}`}
              htmlFor="queryHotelName"
            >
              <h1
                className={styles.MainSubTitle}

              >
                Under<span className={styles.TitleWolf}> Construction </span>|<span className={styles.MainSubTitleI}>Launching <span className={styles.TitleWolf}>Soon</span></span>
              </h1>

            </label>
          </div>
        </div>
      </div>
    </>
  );
};
