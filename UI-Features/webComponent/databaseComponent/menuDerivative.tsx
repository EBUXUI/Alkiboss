import styles from "@/styles/White/Current/Home.module.css";
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
                <Link href="/CreatorUniverse/JoinCommunity">
                  Join The Community
                </Link>
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
                <Link href="/CreatorUniverse/FanPortal">
                  Fan Portal
                </Link>
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
                <Link href="/CreatorUniverse/ExclusiveDrops">
                  Exclusive Drops
                </Link>
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
                <Link href="/CreatorUniverse/BrandPartnerships">
                  Brand Partnerships
                </Link>
              </div>
            </div>

            <div className={`${styles["MenuII"]} ${styles["MainIcon"]}`}>
              <article
                className={`${styles["MenuIconII"]} ${styles["MainIconDisplay"]}`}
              >
                <article className={styles.DisplayIconGrid}>
                  <FontAwesomeIcon
                    className={`${styles["DisplayIconMain"]}`}
                    icon={faCircle}
                  />
                  <label
                    className={`${styles["IconMainTitle"]} ${styles["IconMainTitleBg"]}`}
                  >
                    <Link href="/YouTubeContent"></Link>
                  </label>
                </article>

                <article className={styles.DisplayIconGrid}>
                  <FontAwesomeIcon
                    className={`${styles["DisplayIconMain"]}`}
                    icon={faCircle}
                  />
                  <label
                    className={`${styles["IconMainTitle"]} ${styles["IconMainTitleBg"]}`}
                  >
                    <Link href="/InstagramContent"></Link>
                  </label>
                </article>

                <article className={styles.DisplayIconGrid}>
                  <FontAwesomeIcon
                    className={`${styles["DisplayIconMain"]}`}
                    icon={faCircle}
                  />
                  <label
                    className={`${styles["IconMainTitle"]} ${styles["IconMainTitleBg"]}`}
                  >
                    <Link href="/TikTokContent"></Link>
                  </label>
                </article>
              </article>

              <div
                className={`${styles["MenuMainTitle"]} ${styles["MenuTitleBg"]}`}
              >
                <Link href="/CreatorUniverse/Dashboard">
                  Creator Dashboard
                </Link>
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
                <Link href="/CreatorUniverse/MerchStore">
                  Merch Store
                </Link>
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
                <Link href="/CreatorUniverse/TrendingAnalytics">
                  Trending Analytics
                </Link>
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
                <Link href="/CreatorUniverse/ReleaseSchedule">
                  Release Schedule
                </Link>
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
                <Link href="/CreatorUniverse/Contact">
                  Contact The Creator
                </Link>
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
                <Link href="https://www.youtube.com/@alkibossclassic">
                  Join Community
                </Link>
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
                <Link href="https://www.tiktok.com/@alkiboss_classic">
                  Creator Universe
                </Link>
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
                <Link href="https://www.instagram.com/alkiboss_classic">
                  Comedy Reels
                </Link>
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
                <Link href="#ContactUs">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
