import styles from '@/styles/Desktop.module.css'
import Image from "next/image";
import HouseofGraceLogo from "@/UI-Features/UI-Gallery/Logo/GraceLogo.png";

export default function FloatingMigrationBar() {
  return (
    <>
      <section className={styles.FloatingMigrationHero}>
        <div className={styles.FloatingMigrationFlex}>
          <div className={styles.FloatingMigrationLogo}>
            <div className={styles.FloatingMigrationImage} id="Main-Content">
              <Image
                priority
                alt="House of Grace Foundation"
                src={HouseofGraceLogo}
                className={styles.JosLogo}
                quality={100}
                fill={true}
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.FloatingMigrationTitle}>
              <h1 className={`${styles["FloatingMigrationTitle"]}`}> The Entire <span className={styles.FloatingMigrationLimitedCo}> Regime </span></h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
