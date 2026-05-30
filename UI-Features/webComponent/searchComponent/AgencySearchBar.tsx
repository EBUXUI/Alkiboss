import styles from "@/styles/White/Home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBox, faBriefcase, faChair, faHeart, faPlane, faShop, faSun} from "@fortawesome/free-solid-svg-icons"
import React, { useState } from "react";
import SearchParameter from "@/UI-Features/webComponent/buttonComponent/searchButton/airlineSearch/SearchParameter";

export default function AgencySearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.FooterTitleModule}>
          <div className={styles.GridedFooterModuleII}>
            <form className={styles.GridPropertyV}>
              <label
                className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles['GridIcon']}`}
                htmlFor="queryHotelName"
              >
                <FontAwesomeIcon
                  className={styles.FieldIconIII}
                  icon={faPlane}
                />

                <h1 className={styles.AirlineTitle}>
                  Cancer Type
                </h1>
              </label>
              <input
                className={styles.hotelSearch}
                placeholder="Search For A Cancer Type"
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
                onClick={() => setOpen((prev) => !prev)}
              />
              <label
                className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]}  ${styles['GridIcon']}`}
                htmlFor="queryHotelName"
              >
                <FontAwesomeIcon
                  className={styles.FieldIconIII}
                  icon={faHeart}
                />
                <h1 className={styles.AirlineTitle}>
                Disability Type
                </h1>
              </label>
              <input
                className={styles.hotelSearch}
                placeholder="Search For A Disability Type"
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
              />
              <label
                className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles['GridIcon']}`}
                htmlFor="queryHotelName"
              >
                <FontAwesomeIcon
                  className={styles.FieldIconIII}
                  icon={faBox}
                />

                <h1 className={styles.AirlineTitle}>
                Cancer Regime
                </h1>
              </label>
              <input
                className={styles.hotelSearch}
                placeholder="Search For A Regime"
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
              />
              <label
                className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles['GridIcon']}`}
                htmlFor="queryHotelName"
              >
                <FontAwesomeIcon
                  className={styles.FieldIconIII}
                  icon={faSun}
                />
                <h1 className={styles.AirlineTitle}>
                Disability Regime 
                </h1>
              </label>
              <input
                className={styles.hotelSearch}
                placeholder="Search For A Regime"
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
              />
              <label
                className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles['GridIcon']}`}
                htmlFor="queryHotelName"
              >
                <FontAwesomeIcon
                  className={styles.FieldIconIII}
                  icon={faChair}
                />
                <h1 className={styles.AirlineTitle}>
                Cancer Program
                </h1>
              </label>
              <input
                className={styles.hotelSearch}
                placeholder="Search For A Program"
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
              />
              <label
                className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles['GridIcon']}`}
                htmlFor="queryHotelName"
              >
                <FontAwesomeIcon
                  className={styles.FieldIconIII}
                  icon={faBriefcase}
                />
                <h1 className={styles.AirlineTitle}>
                Disability Program
                </h1>
              </label>
              <input
                className={styles.hotelSearch}
                placeholder="Search for a Program"
                name="queryHotelName"
                id="queryHotelName"
                aria-label="queryHotelName"
              />
              <SearchParameter />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
