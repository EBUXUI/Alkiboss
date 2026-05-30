import Image from 'next/image';
import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import OperatingManagerTwo from "@/UI-Features/UI-Gallery/Characters/OTP/ChubbyOTPII.jpeg";
import OperatingManagerOne from "@/UI-Features/UI-Gallery/Characters/Email/EmailCode.jpeg";
import OperatingUserLoginContent from '@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/QRAuth/NewRegQRAuthContent';
import NavigateForgotUserHome from '@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/QRAuth/NavigateForgotNewRegHome';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ManagerQRAuthMigration() {
  return (
     <>
      <section className={styles.OperatingManagerContentAuth}>
        <div className={styles.OperatingManagerHeroAuth}>
          <div className={styles.OperatingMainManagerComponent}>
            <div className={styles.CompanyGridII}>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElementI"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="John & Jo's Restaurant"
                    src={OperatingManagerOne}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>Email </div>
                  </div>
                  <div className={styles.ProductGridColumn}>
                    <div className={styles.ProductPurchase}>
                      <Link
                        href="/FoundationEntry/CrowdFunding/Registration/AuthOps/EmailAuth"
                        className={styles.PurchaseLink}
                      >
                       Request An Email
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.CompanyGridedLogo}>
                <div
                  className={`${styles["GridOne"]} ${styles["ProductElementI"]} ${styles["Wrap"]}`}
                >
                  <Image
                    priority
                    alt="John & Jo's Restaurant"
                    src={OperatingManagerTwo}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>Phone No.</div>
                  </div>
                  <div className={styles.ProductGridColumn}>
                    <div className={styles.ProductPurchase}>
                      <Link
                        href="/FoundationEntry/CrowdFunding/Registration/AuthOps"
                        className={styles.PurchaseLink}
                      >
                        Request An OTP
                      </Link>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
            <NavigateForgotUserHome/> 
          </div>
          <div className={styles.OperatingManagerComponentAuth}>
              <OperatingUserLoginContent />
            </div>
          </div>
      </section>
    </>
  )
}
