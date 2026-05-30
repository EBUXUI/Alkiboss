import Link from 'next/link'
import styles from '@/styles/Desktop.module.css'
export default function ManagerCredEmailAuthSubmit() {
  return (
    <>
        <div className={styles.SubmitNavigateFlex}>
          <h1 className={styles.SubmitNavigateTitle}>
            <Link href="/Dashboard/Fundraising/CrowdFunding" className={styles.Link}>
              Confirm Code
            </Link>
          </h1> 
        </div>
    </>
  );
}
