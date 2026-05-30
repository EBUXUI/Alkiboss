import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/devOps/Desktop.module.css";
import NewDerivative from "@/UI-Features/UI-Gallery/CancerDetection/GeneticScreening.jpeg";
import NewLoginContent from "./NewLoginContent";
//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function TheHealthDashboardNewMigrationLogin() {
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
