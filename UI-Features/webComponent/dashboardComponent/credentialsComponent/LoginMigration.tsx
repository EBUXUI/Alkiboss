import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import OperatingManager from "@/Main-Gallery/Characters/Manager.png";
import OperatingSupervisor from "@/Main-Gallery/Characters/Supervisor.png";
import OperatingUser from "@/Main-Gallery/Characters/UserFive.png";

export default function LoginMigration() {
  return (
    <>
      <section className={styles.LoginContent}>
        <div className={styles.LoginHero}>
          <div className={styles.LoginComponent}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="John & Jos Catalog System"
                  src={OperatingManager}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                  <Link href='/Login/OperatingManager'>Operating Manager</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.LoginComponent}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="John & Jos Catalog System"
                  src={OperatingSupervisor}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                 <Link href='/Login/OperatingSupervisor'>Operating Supervisor</Link>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.LoginComponent}>
            <div className={styles.LoginCharacter}>
              <div className={`${styles["GridOne"]} ${styles["LoginCharacterElement"]} ${styles["LoginCharacterWrap"]}`}>
                <Image
                  priority
                  alt="John & Jos Catalog System"
                  src={OperatingUser}
                  quality={100}
                  fill={true}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className={`${styles["LoginCharacterNumber"]} ${styles["LoginCharacterBg"]}`}>
                  <Link href='/Login/OperatingUser'>Operating User</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
