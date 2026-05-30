import Image from 'next/image';
import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import OperatingManagerTwo from "@/UI-Features/UI-Gallery/Characters/QRCode/QRCodeIII.jpeg";
import OperatingManagerOne from "@/UI-Features/UI-Gallery/Characters/OTP/ChubbyOTPI.jpeg";
import OperatingUserLoginContent from '@/UI-Features/webComponent/registrationComponent/Authentication/EmailAuth/NewRegEmailAuthContent';
import NavigateForgotUserHome from '@/UI-Features/webComponent/registrationComponent/Authentication/EmailAuth/NavigateEmailRegAuthHome';

export default function NewRegEmailAuthMigration() {
  return (
     <>
      <section className={styles.OperatingManagerContent}>
        <div className={styles.OperatingManagerHero}>
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
                    <div>Phone No.</div>
                  </div>
                  <div className={styles.ProductGridColumn}>
                    <div className={styles.ProductPurchase}>
                      <Link
                        href="/FoundationEntry/Registration/AuthOps"
                        className={styles.PurchaseLink}
                      >
                       Request An OTP
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
                    <div>QR Code</div>
                  </div>
                  <div className={styles.ProductGridColumn}>
                    <div className={styles.ProductPurchase}>
                      <Link
                        href="/FoundationEntry/Registration/AuthOps/QRAuth"
                        className={styles.PurchaseLink}
                      >
                        Scan QR Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>            
            </div>
            <NavigateForgotUserHome/> 
          </div>
          <div className={styles.OperatingManagerComponent}>
          <div className={styles.OperatingManagerContentModuleIII}>
            <div className={styles.OperatingManagerContentModule}>
              <OperatingUserLoginContent />
            </div>
          </div>
          </div>
          <div className={styles.OperatingManagerComponent}>
            <h1 className={styles.OperatingManagerManer}>
              Next
            </h1>
          </div>
        </div>
      </section>
    </>
  )
}
