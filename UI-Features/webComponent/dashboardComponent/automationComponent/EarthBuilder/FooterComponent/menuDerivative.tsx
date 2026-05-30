import styles from "@/styles/White/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import { faBell, faClock, faCloud, faMap, faMoneyBill, faPen, faPeopleGroup, faShop, faShoppingCart, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                <Link href="/Dashboard/RegistrationPanel">Register</Link>
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
                <Link href="/Dashboard/LoginPanel">Login</Link>
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
                <Link href="/Dashboard/CancerType">Shop</Link>
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
                <Link href="/Dashboard/CurrentDisability">Affiliates</Link>
              </div>
            </div>
            <div className={`${styles["MenuII"]} ${styles[""]}`}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faShoppingCart}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/Dashboard/Authentication">Cart</Link>
              </div>
            </div>
            <div className={`${styles["MenuII"]} ${styles[""]}`}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faMap}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/Dashboard/Authentication">Location</Link>
              </div>
            </div>
            <div className={styles.MenuII}>
              <FontAwesomeIcon
                className={styles.MenuIconII}
                icon={faBell}
              />
              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]} `}
              >
                <Link href="/Dashboard/ViewProgrammes">Notifications</Link>
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
                <Link href="/Dashboard/GlobalStatistics">Statistics</Link>
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
                <Link href="/Dashboard/ScheduleMeeting">Schedule</Link>
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
                <Link href="/Dashboard/EmailUs">Email</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
