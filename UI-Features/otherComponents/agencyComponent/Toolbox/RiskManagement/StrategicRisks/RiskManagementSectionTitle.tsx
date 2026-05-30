import styles from "@/styles/Soriyo/Main.module.css";
import HeroCss from "@/styles/White/Main.module.css";
import Link from "next/link";
import Image from "next/image";
import DocumentEnvelope from "@/UI-Features/UI-Gallery/Kaprew/DocumentEnvelope/DocumentEnvelope.jpg";
import CardHolder from "@/UI-Features/UI-Gallery/Kaprew/CardHolder/CardHolder.jpg";
import Staplers from "@/UI-Features/UI-Gallery/Kaprew/Stapler/Stapler.jpg";
import Scissors from "@/UI-Features/UI-Gallery/Kaprew/Scissors/ScissorsI.jpg";
export default function RiskManagementSectionTitle() {
  return (
    <>
      <section className={styles.HeroContentTitle}>
        <div className={styles.HeroTitleModule}>
          <div className={styles.MainProductImageI}>
            <div
              className={`${styles["MainProductElementI"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth AI address necessities in managing risks derived from lending credit strategies"
                src={DocumentEnvelope}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${HeroCss["MainProductGridNumber"]} ${HeroCss["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={HeroCss.ProductName}>
                  Document Envelope
                </Link>
              </div>
            </div>
            <div className={`${styles['RiskButton']} ${styles["FieldNumber"]} ${styles["FieldBg"]}`}
            >
              <Link href="/LaunchingSoon">Purchase Product</Link>
            </div>
          </div>
          <div className={styles.MainProductImageI}>
            <div
              className={`${styles["MainProductElementI"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth AI address necessities in managing risks derived from economies of scale"
                src={CardHolder}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${HeroCss["MainProductGridNumber"]} ${HeroCss["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={HeroCss.ProductName}>
                  Card Holder
                </Link>
              </div>
            </div>
            <div className={`${styles['RiskButton']} ${styles["FieldNumber"]} ${styles["FieldBg"]}`}
            >
              <Link href="/LaunchingSoon">Purchase Product</Link>
            </div>
          </div>
          <div className={styles.MainProductImageI}>
            <div
              className={`${styles["MainProductElementI"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth AI address necessities in managing risks derived from Public Awareness"
                src={Staplers}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${HeroCss["MainProductGridNumber"]} ${HeroCss["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={HeroCss.ProductName}>
                  Stapler
                </Link>
              </div>
            </div>
            <div className={`${styles['RiskButton']} ${styles["FieldNumber"]} ${styles["FieldBg"]}`}
            >
              <Link href="/LaunchingSoon">Purchase Product</Link>
            </div>
          </div>
          <div className={styles.MainProductImageI}>
            <div
              className={`${styles["MainProductElementI"]} ${styles["Wrap"]}`}
            >
              <Image
                priority
                alt="Earth AI address necessities in managing risks derived from Public Awareness"
                src={Scissors}
                 
                fill={true}
                style={{ objectFit: "cover" }}
              />
              <div
                className={`${HeroCss["MainProductGridNumber"]} ${HeroCss["MainProductGridBg"]}`}
              >
                <Link href="/LaunchingSoon" className={HeroCss.ProductName}>
                  Scissors
                </Link>
              </div>
            </div>
            <div className={`${styles['RiskButton']} ${styles["FieldNumber"]} ${styles["FieldBg"]}`}
            >
              <Link href="/LaunchingSoon">Purchase Product</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
