import styles from '@/styles/Desktop.module.css'
import Link from 'next/link'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
              <h1 className={`${styles["FloatingMigrationTitle"]}`}>Breast Cancer<span className={styles.FloatingMigrationLimitedCo}>Platform</span></h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
