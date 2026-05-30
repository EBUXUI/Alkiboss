import Link from 'next/link'
import styles from '@/styles/Desktop.module.css'
export default function ManagerForgotUserSubmit() {
  return (
    <>
        <div className={styles.ForgotUserNavigateFlex}>
          <h1 className={styles.ForgotUserNavigateTitle}>
            <Link href="/FoundationEntry/CrowdFunding/Registration/AuthOps" className={styles.Link}>
              Request a New Code
            </Link>
          </h1>
        </div>
    </>
  );
}
