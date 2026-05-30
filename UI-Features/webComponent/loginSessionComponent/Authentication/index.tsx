import Image from 'next/image';
import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import OperatingManagerTwo from "@/UI-Features/UI-Gallery/Characters/QRCode/QRCodeII.jpeg";
import OperatingManagerOne from "@/UI-Features/UI-Gallery/Characters/Email/EmailCodeV.jpeg";
import OperatingUserLoginContent from '@/UI-Features/webComponent/registrationComponent/Authentication/NewRegAuthContent';
import NavigateForgotUserHome from '@/UI-Features/webComponent/registrationComponent/Authentication/NavigateForgotRegHome';

export default function ManagerAuthentication() {
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
                    alt="House of Grace Foundation"
                    src={OperatingManagerOne}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>Email Auth</div>
                  </div>
                  <div className={styles.ProductGridColumn}>
                    <div className={styles.ProductPurchase}>
                      <Link
                        href="/FoundationEntry/Registration/AuthOps/EmailAuth"
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
                    alt="House of Grace Foundation"
                    src={OperatingManagerTwo}
                    quality={100}
                    fill={true}
                    style={{ objectFit: "cover" }}
                  />
                  <div className={styles.ProductNumber}>
                    <div>QR Auth</div>
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
        </div>
      </section>
    </>
  )
}

