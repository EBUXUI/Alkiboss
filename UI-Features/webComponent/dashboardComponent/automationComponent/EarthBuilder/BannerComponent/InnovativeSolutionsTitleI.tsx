import styles from "@/styles/Hero/Main.module.css";
import InnovativeSolutionsModule from './InnovativeSolutionsModule';
export default function WorkshopTitleI () {
    return (
      <>
       <section className={styles.HeroContent}>
        <div className={styles.GridedContentModule}>
          <div className={styles.HeroContentModule}>
            <InnovativeSolutionsModule/>
          </div>
        </div>
        </section>
      </>
    );
  }