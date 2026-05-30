import Head from "next/head";
import styles from "@/styles/Hero/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import HealthRegime from "@/UI-Features/UI-Gallery/CancerDetection/Brian.jpeg";
import HealthRegimeII from "@/UI-Features/UI-Gallery/CancerDetection/BrianII.jpeg";
export default function WorkshopTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <div className={styles.GridedFooterModule}>
            <div className={styles.ShopTitle}>
              <h1 >Brian’s Bravery</h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>Learning Beyond Limits</h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3>
                "There was a time when my son Brian would sit at the window every morning and watch other children walk to school. He never cried, but his silence spoke volumes. Born with muscular dystrophy, even the simple act of sitting upright became a daily challenge. We couldn’t afford special schooling or therapy — and we were losing hope.

                Then came House of Grace.

                They didn’t just see a child with a condition. They saw a boy full of promise. With your support, Brian now has a tutor who visits him at home, bringing books, colors, and joy. He also receives regular physical therapy — and every small movement he makes is a victory we celebrate.

                His laughter has returned. His mind is growing. He speaks of becoming a teacher someday, to help kids like himself. And for the first time, as a mother, I believe in that future.

                Thank you for turning a quiet struggle into a story of hope. Brian is no longer watching life from the window — he’s becoming a part of it."

                — Brian’s Mother, Kinshasa

              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DonationProductGridNumberI"]} ${styles["InnovativeProductGridBgI"]}`}
              >
                <Link href="InnovativeSolutions/CancerDetection">Know Someone Who Needs Support?</Link>
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
                  <div
                    className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
                  >
                    <Link href="InnovativeSolutions/CancerDetection/ScheduleTestConsultation" className={styles.ProductName}>
                      Brian's Facebook
                    </Link>
                    <Link href="InnovativeSolutions/CancerDetection/ScheduleConsultation" className={styles.ProductPrice}>
                      Visit
                    </Link>
                  </div>

                </div>
                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link href="InnovativeSolutions/CancerDetection/ScheduleConsultation">Facebook Handle</Link>
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
                  <div
                    className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
                  >
                    <Link href="InnovativeSolutions/CancerDetection/SelfConduct" className={styles.ProductName}>
                      Brian's Instagram
                    </Link>
                    <Link href="InnovativeSolutions/CancerDetection/SelfConduct" className={styles.ProductPrice}>
                      Visit
                    </Link>
                  </div>
                </div>
                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link href="InnovativeSolutions/CancerDetection/SelfConduct">Instagram Handle</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
