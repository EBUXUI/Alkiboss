import Image from "next/image";
import styles from "@/styles/devOps/Desktop.module.css";
import NewDerivative from "@/UI-Features/UI-Gallery/CancerDetection/Doctor.jpg";
import NewLoginContent from "./NewLoginContent";

export default function NewMartialMigration() {
  return (
    <>
      <section className={styles.OperatingManagerContent}>
        <div className={styles.OperatingManagerHero}>
          <div className={styles.OperatingMainManagerComponent}>
            <div className={styles.CloudinaryGrid}>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["CloudinaryBgElement"]} ${styles["WrapIV"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={NewDerivative}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.OperatingManagerComponent}>
              <NewLoginContent />
          </div>
        </div>
      </section>
    </>
  );
}
