import styles from "@/styles/Hero/Main.module.css";
import Link from "next/link";
export default function CancerComponentButton() {
  return (
    <>
          <div className={styles.Button}>
              <div
                className={`${styles["MainProductGridNumberI"]} ${styles["MainProductGridBgI"]}`}
              >
                <Link href="">Add Above Component To Current Website</Link>
              </div>
            </div>
    </>
  );
};
