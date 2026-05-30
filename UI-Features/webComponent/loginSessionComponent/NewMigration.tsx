import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import NewDerivative from "@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationXXIII.jpeg";
import NewDerivativeI from "@/UI-Features/UI-Gallery/ImmunityPlan/ImmunityPlanIX.jpeg";
import NewDerivativeII from "@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationXXII.jpeg";
import NewDerivativeIII from "@/UI-Features/UI-Gallery/ImmunityPlan/ImmunityPlanX.jpeg";
import NewDerivativeIV from "@/UI-Features/UI-Gallery/ImmunityPlan/ImmunityPlanI.jpeg";
import NewLoginContent from "@/UI-Features/webComponent/registrationComponent/NewLoginContent";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function NewMartialMigration() {
  return (
    <>
      <section className={styles.OperatingManagerContent}>
        <div className={styles.OperatingManagerHero}>
          <div className={styles.OperatingMainManagerComponent}>
            <div className={styles.CompanyGridII}>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={NewDerivative}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>
                    <Link href="/Dashboard/Registration/AuthOps/MicrosoftAuth"  
                    className={styles.Link}>
                      Use Microsoft Sign-in
                    </Link>
                  </div>
                  </div>
                  
                </div>
              </div>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={NewDerivativeI}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>
                    <Link
                        href="/Dashboard/Registration/AuthOps/AppleAuth"
                        className={styles.Link}
                      >
                        Use Apple Sign-in
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={NewDerivativeII}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>
                    <Link
                        href="/Dashboard/Registration/AuthOps/GoogleAuth"
                        className={styles.Link}
                      >
                        Use Google Sign-in
                    </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={NewDerivativeIII}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>
                    <Link
                        href="/Dashboard/Registration/AuthOps/FacebookAuth"
                        className={styles.Link}
                      >
                        Use Facebook Sign-in
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={NewDerivativeIV}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>
                    <Link
                        href="/Dashboard/Registration/AuthOps/YahooAuth"
                        className={styles.Link}
                      >
                        Use Yahoo Sign-in
                    </Link>
                    </div>
                  </div>
                  
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
