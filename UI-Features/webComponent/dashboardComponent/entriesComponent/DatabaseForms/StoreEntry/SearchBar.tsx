import styles from "@/styles/Search/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import SearchParameter from "@/UI-Features/webComponent/buttonComponent/searchButton/airlineSearch/SearchParameter";
import {
  faLandmark,
  faBrain,
  faBiking,
  faCoffee,
  faDiagnoses,
  faHeart,
  faSyringe,
  faLeaf,
  faWind,
  faMoneyBill,
  faMoneyBill1,
  faAtom,
  faHospital,
  faClose,
  faUsers,
  faBolt,
  faNewspaper,
  faArrowDown,
  faBuilding,
  faDollar,
  faDollarSign,
  faShop,
  faPlane,
  faBox,
  faSun,
  faChair,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

export default function AgencySearchBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.GridedFooterModuleII}>
        <form className={styles.GridPropertyV}>
          
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Client ID</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Client Reference Number"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Company Name</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Name of The Company"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Product Name</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Name of The Product"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Product Category</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Name of Category"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Product Price</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Price of The Product"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Quantity Sold</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Number of Sold Products"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Payment Status</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder=" Pending | Paid | Refunded "
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
            <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Date & Time</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Date & Time of Purchase"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>Delivery Status</h1>
            </label>
            <input
              className={styles.hotelSearch}
              placeholder="Status of The Purchase"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </form>
      </div>
    </>
  );
}
