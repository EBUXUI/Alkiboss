import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { faPeopleGroup, faShop, faMoneyBill, faCircle, faShoppingCart, faCloud, faClock, faPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
export default function AgencyTitle() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.MenuContentTitle}>
        <div className={styles.GridedMenuModule}>
          <div className={styles.MenuPropertyIV}>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faUserPlus}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">New User</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faPeopleGroup}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">Current User</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faShop}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">Deals & Promotions</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faMoneyBill}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]} `}
              >
                <Link href="/LaunchingSoon">Affiliate Marketing</Link>
              </div>
            </div>
            <div className={`${styles["MenuII"]} ${styles["MainIcon"]}`}>
              <article
                className={`${styles["MenuIconII"]} ${styles["MainIconDisplay"]}`}
              >
                <article className={styles.DisplayIconGrid}>
                  <FontAwesomeIcon
                    className={`${styles["DisplayIcon"]}`}
                    icon={faCircle}
                  />
                  <label
                    className={`${styles["IconMainTitle"]} ${styles["IconMainTitleBg"]}`}
                  >
                    <Link href="/LaunchingSoon"></Link>
                  </label>
                </article>
                <article className={styles.DisplayIconGrid}>
                <FontAwesomeIcon
                  className={`${styles["DisplayIcon"]}`}
                  icon={faCircle}
                />
                <label
                  className={`${styles["IconMainTitle"]} ${styles["IconMainTitleBg"]}`}
                >
                  <Link href="/LaunchingSoon"></Link>
                </label>
                </article>
                <article className={styles.DisplayIconGrid}>
                <FontAwesomeIcon
                  className={`${styles["DisplayIcon"]}`}
                  icon={faCircle}
                />
                <label
                  className={`${styles["IconMainTitle"]} ${styles["IconMainTitleBg"]}`}
                >
                  <Link href="/LaunchingSoon"></Link>
                </label>
                </article>
              </article>
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">My Dashboard</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faShoppingCart}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]} `}
              >
                <Link href="/LaunchingSoon">View Cart</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faCloud}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon"> Niche Statistics </Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faClock}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">Current Schedule</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faPen}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">Email Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.MenuContentTitleII}>
        <div className={styles.GridedMenuModule}>
          <div className={styles.MenuPropertyIV}>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faUserPlus}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">New User</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faPeopleGroup}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">Current User</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faShoppingCart}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]} `}
              >
                <Link href="/LaunchingSoon">View Cart</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faPen}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/LaunchingSoon">Email Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
