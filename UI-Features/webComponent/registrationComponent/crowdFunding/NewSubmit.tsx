import Link from 'next/link'
import styles from '@/styles/Desktop.module.css'
export default function ManagerSubmit() {
  return (
    <>
        <div className={styles.SubmitNavigateFlex}>
          <h1 className={styles.SubmitNavigateTitle}>
            <Link href="/FoundationEntry/CrowdFunding/Registration/AuthOps" className={styles.Link}>
              Register
            </Link>
          </h1>
        </div>
    </>
  );
}
