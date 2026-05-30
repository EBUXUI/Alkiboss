import styles from '@/styles/Home.module.css';
import Link from 'next/link';
import { faLandmark, faLayerGroup, faPlus, faUsers, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Menu() {
  return (
    <>
      <section className={styles.Menucontent}>
        <div className={styles.Menuhero}>
          <div className={styles.GridMenu}>
            <div className={styles.MenuTitle}>
              <div className={styles.MenuFlex}>
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faLandmark}/>
                  <Link className={styles.MenuLink} href="/Home">Home</Link>
                </article>
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faLayerGroup} />
                  <Link className={styles.MenuLink} href="/OurProducts">Catalouge</Link>
                </article>
                <article className={`${styles["MenuNav"]} ${styles["MenuMain"]}`}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faPlus} />
                  <Link className={styles.MenuLink} href="/OurProudcts">Shop</Link>
                </article>                                                         
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faUsers} />
                  <Link className={styles.MenuLink} href="/ReceiveAQuote">About Us</Link>
                </article>
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faHandshake} />
                  <Link className={styles.MenuLink} href="/OurProducts">Products</Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};