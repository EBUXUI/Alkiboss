import Link from 'next/link'
import styles from '@/styles/Desktop.module.css'
export default function MainMigration() {
  return (
    <>
      <section className={styles.SkipNavigateHero}>
        <div className={styles.SkipNavigateFlex}>
          <h1 className={styles.SkipNavigateTitle}>
            <Link href="/Home" className={styles.Link}>
              Skip Introduction
            </Link>
          </h1>
        </div>
      </section>
    </>
  );
}
