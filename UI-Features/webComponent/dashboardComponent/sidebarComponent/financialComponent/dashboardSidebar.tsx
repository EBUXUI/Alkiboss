import Image from 'next/image';
import styles from '@/styles/Desktop.module.css';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CompanyLogo from '@/UI-Features/UI-Gallery/Logo/LogoFour.png';
import Link from 'next/link'

export default function dashboardSidebar(){
    return(
        <>
        <div className={styles.SideBarCompany}>
            <article className={styles.SideBarHeader}>
              <label className={styles.SideBarLogo}>
                <Image
                  priority
                  className={styles.SideBarIcon}
                  quality={100}
                  src={CompanyLogo}
                  alt='House of Grace Foundation Logo'
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Settings'>
                 <h1 className={`${styles["CompanyTitle"]} ${styles["active"]}`}></h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('landmark')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard'>
                 <h1 className={styles.ComponentTitle}>Home</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('brain')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Modifications'>
                 <h1 className={styles.ComponentTitle}>Dialysis</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('biking')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Progression'>
                 <h1 className={styles.ComponentTitle}>Workshop</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('coffee')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Analytics'>
                 <h1 className={styles.ComponentTitle}>Sponsorship</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('diagnoses')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Diary'>
                 <h1 className={styles.ComponentTitle}>Diary</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('heart')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Catalouge'>
                 <h1 className={styles.ComponentTitle}>Regime</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('hospital')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Manual'>
                 <h1 className={styles.ComponentTitle}>Consultation</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('syringe')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Settings'>
                 <h1 className={styles.ComponentTitle}>Laboratory</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('leaf')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Catalouge'>
                 <h1 className={styles.ComponentTitle}>Training</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('wind')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Manual'>
                 <h1 className={styles.ComponentTitle}>Experiences</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('money-bill-1')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Settings'>
                 <h1 className={styles.ComponentTitle}>Fundraising</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('atom')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Catalouge'>
                 <h1 className={styles.ComponentTitle}>Volunteering</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('users')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Manual'>
                 <h1 className={styles.ComponentTitle}>Community</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('bolt')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Settings'>
                 <h1 className={styles.ComponentTitle}>Settings</h1>
                </Link>
              </label>
            </article>
            <article className={styles.SideBarComponent}>
              <label className={styles.SideBarActive}>
                <FontAwesomeIcon className={styles.SideBarNav} icon={solid('newspaper')} />
              </label>
              <label className={styles.SideBarTitle}>
                <Link href='/Dashboard/Catalouge'>
                 <h1 className={styles.ComponentTitle}>Manual</h1>
                </Link>
              </label>
            </article>
           
          </div>
        </>
    )
}