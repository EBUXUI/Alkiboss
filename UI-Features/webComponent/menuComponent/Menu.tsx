import styles from '@/styles/Soriyo/Main.module.css';
import Link from 'next/link';
import {
  faChurch,
  faLayerGroup,
  faDashboard,
  faTimeline,
  faCoins
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Menu() {
  return (
    <>
      <section className={styles.Menucontent}>
        <div className={styles.Menuhero}>
          <div className={styles.GridMenu}>
            <div className={styles.MenuTitle}>
              <div className={styles.MenuFlex}>
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faChurch} />
                  <Link className={styles.MenuLink} href="/">Home</Link>
                </article>
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faLayerGroup} />
                  <Link className={styles.MenuLink} href="/InnovativeSolutions/FoundationalWorkshops">Programs</Link>
                </article>
                <article className={`${styles["MenuNav"]} ${styles["MenuMain"]}`}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faDashboard} />
                  <Link className={styles.MenuLink} href="/FoundationEntry/Registration">Dashboard</Link>
                </article>                                                         
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faTimeline} />
                  <Link className={styles.MenuLink} href="/FoundationEntry/ScheduleConsultation">Schedule</Link>
                </article>
                <article className={styles.MenuNav}>
                  <FontAwesomeIcon className={styles.MenuIcon} icon={faCoins} />
                  <Link className={styles.MenuLink} href="/GlobalParticipation/Fundraising/OfferADonation">Donate</Link>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
