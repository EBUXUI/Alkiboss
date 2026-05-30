import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/devOps/Desktop.module.css";
import DBMStyles from "@/styles/DBMS/Desktop.module.css";
import NewDerivative from "@/UI-Features/UI-Gallery/CancerDetection/GeneticScreening.jpeg";
import NewLoginContent from "./NewLoginContent";
import OperatingManagerOne from "@/UI-Features/UI-Gallery/EntryLogo/Google/GoogleIII.jpg";
import OperatingManagerTwo from "@/UI-Features/UI-Gallery/EntryLogo/Apple/AppleIV.jpg";
//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function BloodCancerNewMigration() {
  return (
    <>
      <section className={styles.OperatingManagerContent}>
        <div className={styles.OperatingManagerHero}>
          <div className={DBMStyles.OperatingMainManagerComponent}>
                      <div className={DBMStyles.CompanyGridII}>
                        <div className={DBMStyles.CompanyGridedLogo}>
                          <div
                            className={`${DBMStyles["GridOne"]} ${DBMStyles["ProductElement"]} ${DBMStyles["Wrap"]}`}
                          >
                            <Image
                              priority
                              alt="John & Jo's Restaurant"
                              src={OperatingManagerOne}
                              fill={true}
                              style={{ objectFit: "cover" }}
                            />
                            <div className={DBMStyles.ProductNumber}>
                              <div>Google Sign-In</div>
                            </div>
                            <div className={DBMStyles.ProductGridColumn}>
                              <div className={DBMStyles.ProductPurchase}>
                                <Link
                                  href="OperationsOfficer"
                                  className={DBMStyles.PurchaseLink}
                                >
                                Register with Google
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={DBMStyles.CompanyGridedLogo}>
                          <div
                            className={`${DBMStyles["GridOne"]} ${DBMStyles["ProductElement"]} ${DBMStyles["Wrap"]}`}
                          >
                            <Image
                              priority
                              alt="John & Jo's Restaurant"
                              src={OperatingManagerTwo}
                              fill={true}
                              style={{ objectFit: "cover" }}
                            />
                            <div className={DBMStyles.ProductNumber}>
                              <div>Grace Member</div>
                            </div>
                            <div className={DBMStyles.ProductGridColumn}>
                              <div className={DBMStyles.ProductPurchase}>
                                <Link
                                  href="StrategicDirector"
                                  className={DBMStyles.PurchaseLink}
                                >
                                  Navigate to Login
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
