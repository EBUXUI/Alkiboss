import Link from 'next/link'
import styles from '@/styles/Desktop.module.css'
export default function ManagerForgotUserHome() {
  return (
    <>
        <div className={styles.ForgotUserNavigateFlex}>
          <h1 className={styles.ForgotUserNavigateTitle}>
            <Link href="/FoundationEntry/Registration/AuthOps/EmailAuth" className={styles.Link}>
              Request New Code
            </Link>
          </h1>
        </div>
    </>
  );
}
