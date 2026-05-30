import styles from '@/styles/Desktop.module.css'
import JosLogo from "@/Gallery/Logo/JosLogo.png";
import Image from "next/image";

export default function FloatingMigrationBarI() {
  return (
    <>
      <section className={styles.FloatingMigrationHero}>
        <div className={styles.FloatingMigrationFlex}>
          <div className={styles.FloatingMigrationLogo}>
            <div className={styles.FloatingMigrationImage} id="Main-Content">
              <Image
                priority
                alt="Johns & Jo's Restaurant"
                src={JosLogo}
                className={styles.JosLogo}
                quality={100}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.FloatingMigrationTitle}>
              <h1 className={`${styles["FloatingMigrationTitle"]}`}>Recover Manager<span className={styles.FloatingMigrationLimitedCo}>Username</span></h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
