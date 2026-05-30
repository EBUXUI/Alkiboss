import styles from "@/styles/Hero/Main.module.css";
import SuccessModule from './SuccessModule';
export default function WorkshopTitleI () {
    return (
      <>
       <section className={styles.HeroContent}>
        <div className={styles.GridedContentModule}>
          <div className={styles.HeroContentModule}>
            <SuccessModule/>
          </div>
        </div>
        </section>
      </>
    );
  }