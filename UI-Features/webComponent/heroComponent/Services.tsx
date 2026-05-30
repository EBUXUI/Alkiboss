import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Soriyo/Main.module.css";
import FirstService from "@/UI-Features/UI-Gallery/CancerDetection/VirtualI.jpg";
import SecondService from "@/UI-Features/UI-Gallery/CancerDetection/VirtualII.jpg";
import ThirdService from "@/UI-Features/UI-Gallery/CancerDetection/VirtualIII.jpg";
import FourthService from "@/UI-Features/UI-Gallery/CancerDetection/VirtualIV.jpg";
export default function ConsultancyServices() {
  return (
    <>
      <section className={styles.LoginContent}>
        <div className={styles.LoginHero}>
          <div className={styles.LoginComponent}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="House of Grace Foundation"
                  src={FirstService}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                <Link href='/LegalConsultancy'>Sensory Enhancement</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.LoginComponent}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="House of Grace Foundation"
                  src={SecondService}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                <Link href='/LegalConsultancy'>Interactive Evolution</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.LoginComponent}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="House of Grace Foundation"
                  src={ThirdService}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                <Link href='/LegalConsultancy'>Metaverse Rehabilitation </Link>
                </div>
              </div>
            </div>
          </div>
            <div className={`${styles["LoginComponent"]} ${styles["LastLoginComponentChild"]}`}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="House of Grace Foundation"
                  src={FourthService}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                <Link href='/LegalConsultancy'>Prosthetics Regime</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
