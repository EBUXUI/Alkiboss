import styles from '@/styles/devOps/Desktop.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

export default function NavigateManager() {
  return (
    <>
      <section className={styles.LoginNavigateHero}>
        <div className={styles.LoginNavigateFlex}>
          <article className={styles.LoginNavigateTitle}>
            <label className={styles.LoginLinkNavigate}>
              <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={faUsers} />
              <Link href='folderUpload' className={styles. LinkNavigation}>
              Google Sign In
              </Link>
            </label>
            <label className={styles.LoginLinkNavigate}>
             <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={faUsers} />
             <Link href='EmailDevOps' className={styles.LinkNavigation}>
              Microsoft Sign In 
             </Link>
            </label>
            <label className={styles.LoginLinkNavigate}>
            <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={faUsers} />
            <Link href='ContactDevOps' className={styles.LinkNavigation}>
              Facebook Sign In
            </Link>
            </label>
            <label className={styles.LoginLinkNavigate}>
            <FontAwesomeIcon className={styles.LoginNavigateIcon} icon={faUsers} />
            <Link href='/' className={`${styles["LinkNavigation"]} ${styles["LastChildLoginNavigate"]}`}>
              Yahoo Sign In
            </Link>
            </label>
          </article>
        </div>
      </section>
    </>
  )
}
