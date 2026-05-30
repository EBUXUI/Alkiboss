import styles from "@/styles/Hero/Main.module.css";
import AboutUsModule from './AboutUsModule';
export default function WorkshopTitleI () {
    return (
      <>
       <section className={styles.HeroContent}>
        <div className={styles.GridedContentModule}>
          <div className={styles.HeroContentModule}>
            <AboutUsModule/>
          </div>
        </div>
        </section>
      </>
    );
  }
