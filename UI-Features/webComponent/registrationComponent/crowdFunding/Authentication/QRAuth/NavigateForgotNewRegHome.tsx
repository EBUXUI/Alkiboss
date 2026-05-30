import Link from 'next/link'
import styles from '@/styles/Desktop.module.css'
export default function NavigForgotUserHome() {
  return (
    <>
        <div className={styles.ForgotUserNavigateFlex}>
          <h1 className={styles.ForgotUserNavigateTitle}>
            <Link href="/FoundationEntry/CrowdFunding/Registration/AuthOps/QRAuth" className={styles.Link}>
              Request New QR Code
            </Link>
          </h1>
        </div>
    </>
  );
}
