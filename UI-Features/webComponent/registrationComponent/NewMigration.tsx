import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import Microsoft from "@/UI-Features/UI-Gallery/EntryLogo/Microsoft/MicrosoftIV.jpg";
import Apple from "@/UI-Features/UI-Gallery/EntryLogo/Apple/AppleII.jpg";
import Google from "@/UI-Features/UI-Gallery/EntryLogo/Google/GoogleIII.jpg";
import Facebook from "@/UI-Features/UI-Gallery/EntryLogo/Facebook/FacebookV.jpg";
import Yahoo from "@/UI-Features/UI-Gallery/EntryLogo/Yahoo/Yahoo.jpg";
import NewLoginContent from "@/UI-Features/webComponent/registrationComponent/NewLoginContent";

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
                    src={Microsoft}
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
                    src={Apple}
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
                    src={Google}
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
                    src={Facebook}
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
                    src={Yahoo}
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
