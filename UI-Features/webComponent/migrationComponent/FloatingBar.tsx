import styles from '@/styles/Desktop.module.css'
import Link from 'next/link'
import HouseofGraceLogo from "@/UI-Features/UI-Gallery/EarthOrganizer/Logo.png";
import Image from "next/image";

export default function FloatingBar() {
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
              <h1 className={`${styles["FloatingMigrationTitle"]}`}>Catalouge System<span className={styles.FloatingMigrationLimitedCo}><Link href='/Login' className={styles.Link}>Return Home</Link></span></h1>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
