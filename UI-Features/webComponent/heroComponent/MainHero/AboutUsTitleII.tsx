import Head from "next/head";
import styles from "@/styles/Hero/Home.module.css";
import Link from "next/link";
import HealthRegime from "@/UI-Features/UI-Gallery/CancerDetection/TestConsultation/TestConsultationI.jpeg";
import HealthRegimeII from "@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationXXII.jpeg";
import HealthRegimeIII from "@/UI-Features/UI-Gallery/CancerDetection/Doctor.jpg";
import HealthRegimeIV from "@/UI-Features/UI-Gallery/CancerDetection/FundraisingII.jpg";
import Image from "next/image";
export default function WorkshopTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <div className={styles.GridedFooterModuleI}>
            <div className={styles.GridPropertyIII}>
              <div className={styles.FieldI}>
                <div
                  className={`${styles["GridOne"]} ${styles["InnovativeSolutionElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={HealthRegimeIII}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
                  >
                    <Link href="InnovativeSolutions/GeneticScreening/ScheduleConsultation" className={styles.ProductName}>
                      Consult Doctor
                    </Link>
                    <Link href="InnovativeSolutions/GeneticScreening/ScheduleConsultation" className={styles.ProductPrice}>
                      Schedule
                    </Link>
                  </div>

                </div>
                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link href="InnovativeSolutions/GeneticScreening/ScheduleConsultation">Schedule Test Consultation</Link>
                </div>
              </div>
              <div className={styles.FieldI}>
                <div
                  className={`${styles["GridOne"]} ${styles["InnovativeSolutionElement"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="House of Grace Foundation"
                    src={HealthRegimeIV}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    className={`${styles["MainProductGridNumber"]} ${styles["MainProductGridBg"]}`}
                  >
                    <Link href="InnovativeSolutions/GeneticScreening/SelfConduct" className={styles.ProductName}>
                      Financial Aid
                    </Link>
                    <Link href="InnovativeSolutions/GeneticScreening/SelfConduct" className={styles.ProductPrice}>
                      Start
                    </Link>
                  </div>
                </div>
                <div
                  className={`${styles["FieldNumber"]} ${styles["FieldBg"]}`}
                >
                  <Link href="InnovativeSolutions/GeneticScreening/SelfConduct">Receive Financial Aid</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.GridedFooterModule}>
          <div className={styles.ShopTitle}>
              <h1>Revolutionizing</h1>
            </div>
            <div className={styles.WithTitle}>
              <h2>Disability treatments through cutting-edge chemical innovations.</h2>
            </div>
            <div className={styles.VisionTitle}>
              <h3>
              These innovations focus on fast, strong, and highly effective solutions, pushing 
              beyond current medical limitations achieving faster, stronger, and permanent 
              results through Nanotechnology & Smart Materials, Bioelectric Medicine, Synthetic 
              Neurostimulation Compounds, Gene Therapy for Permanent Fixes and AI-Driven 
              Precision Chemical Therapies.
              </h3>
            </div>
            <div className={styles.Button}>
              <div
                className={`${styles["DonationProductGridNumberI"]} ${styles["DonationProductGridBgI"]}`}
              >
                <Link href="InnovativeSolutions/GeneticScreening">Kick Start Your Disability Treatment</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
