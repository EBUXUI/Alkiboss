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

export default function DataClauseSearch() {
  const [open, setOpen] = useState(false);
 
  return (
    <>
        <form id="UseClause" className={styles.GridPropertyV}>
          
          <div className={styles.GridForm}>
            <label
              className={`${styles["GridNumberIV"]} ${styles["GridBgIV"]} ${styles["GridIcon"]}`}
              htmlFor="queryHotelName"
            >
              <FontAwesomeIcon className={styles.FieldIconIII} icon={faPlane} />

              <h1 className={styles.AirlineTitle}>WHERE Clause</h1>
            </label>
            <input
              className={styles.hotelSearchV}
              placeholder="Tap The Green Icon"
              name="queryHotelName"
              id="queryHotelName"
              aria-label="queryHotelName"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
          
        </form>
    </>
  );
}
