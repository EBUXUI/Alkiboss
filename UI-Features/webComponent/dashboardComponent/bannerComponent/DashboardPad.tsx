import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrumstickBite,
  faMartiniGlassCitrus,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import TakeAwayTea from "@/UI-Features/DBMS/Features/Contract-K.jpg";
import TakeAwayTeaII from "@/UI-Features/DBMS/Features/Contract-L.png";

export default function TabPad() {
  return (
    <section className={`${styles.RouselTabPad} ${styles.Props}`}>
      {/* Left Screen */}
      <article
        className={`${styles.RouselTabPadCOD} ${styles.RouselTabPadProp} ${styles["Rousel-Active-First-Pad"]}`}
      >
        <label className={styles.RouselTabField}>
          <FontAwesomeIcon
            className={styles.RouselTabFieldIcon}
            icon={faDrumstickBite}
            title="Food Icon"
          />
        </label>
        <label className={`${styles["RouselFirst-Pad"]} ${styles["RouselLink-Pad"]}`}>
          <Link href="#Profile-Information" className={styles.RouselLinkPadLink}>
            Left Screen
          </Link>
        </label>
      </article>

      {/* Right Screen */}
      <article className={`${styles.RouselTabPadCOD} ${styles.RouselTabPadProp}`}>
        <label className={styles.RouselTabField}>
          <FontAwesomeIcon
            className={styles.RouselTabFieldIcon}
            icon={faMartiniGlassCitrus}
            title="Drink Icon"
          />
        </label>
        <label className={`${styles["RouselSecond-Pad"]} ${styles["RouselLink-Pad"]}`}>
          <Link href="#Ammendments" className={styles.RouselLinkPadLink}>
            Right Screen
          </Link>
        </label>
      </article>

      {/* First Image Display */}
      <article>
        <div className={styles.RouselField}>
          <div className={`${styles.GridOne} ${styles.RouselFieldElement} ${styles.RouselWrap}`}>
            <Image
              priority
              alt="Annex Investments Limited"
              src={TakeAwayTea}
              quality={100}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.RouselGridNumber} ${styles.RouselGridBg}`}>
              <Link href="/Dealership/Purchase">View Screen</Link>
            </div>
          </div>
          <div className={`${styles.RouselGridNumber} ${styles.RouselGridBg}`}>
            <Link href="/Dealership/Purchase">Modify Screen</Link>
          </div>
        </div>
      </article>

      {/* Second Image Display */}
      <article>
        <div className={styles.RouselField}>
          <div className={`${styles.GridOne} ${styles.RouselFieldElement} ${styles.RouselWrap}`}>
            <Image
              priority
              alt="Annex Investments Limited"
              src={TakeAwayTeaII}
              quality={100}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={`${styles.RouselGridNumber} ${styles.RouselGridBg}`}>
              <Link href="/Dealership/Purchase">View Screen</Link>
            </div>
          </div>
          <div className={`${styles.RouselGridNumber} ${styles.RouselGridBg}`}>
            <Link href="/Dealership/Purchase">Modify Screen</Link>
          </div>
        </div>
      </article>
    </section>
  );
}
