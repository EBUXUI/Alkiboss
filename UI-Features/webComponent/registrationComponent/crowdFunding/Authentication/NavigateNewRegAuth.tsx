import styles from '@/styles/Desktop.module.css'
import Link from 'next/link'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NavigateManagerAuth() {
  return (
    <>
      <section className={styles.LoginNavigateHero}>
        <div className={styles.LoginNavigateFlex}>
          <article className={styles.LoginNavigateTitle}>
            <label className={styles.LoginLinkNavigate}>
              <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={solid('users')} />
              <Link href='/Login/UsernameOps' className={styles.LinkNavigation}>
               Forgot Username
              </Link>
            </label>
            <label className={styles.LoginLinkNavigate}>
             <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={solid('users')} />
             <Link href='/Login/PasswordOps' className={styles.LinkNavigation}>
              Forgot Password
             </Link>
            </label>
            <label className={styles.LoginLinkNavigate}>
            <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={solid('users')} />
            <Link href='/Login/ImmediateOps' className={styles.LinkNavigation}>
              Immediate Aid
            </Link>
            </label>
            <label className={styles.LoginLinkNavigate}>
            <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={solid('users')} />
            <Link href='/index' className={`${styles["LinkNavigation"]} ${styles["LastChildLoginNavigate"]}`}>
              Return Home
            </Link>
            </label>
          </article>
        </div>
      </section>
    </>
  )
}
