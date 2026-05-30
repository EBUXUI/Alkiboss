import styles from '@/styles/Hero/Home.module.css';
import Image from 'next/image';
import MedicalConsumablesBackgroundI from '@/UI-Features/UI-Gallery/WhiteBlue/WhiteBlueVI.jpg';
import MainStatsComponent from '@/UI-Features/webComponent/heroComponent/CompanyStatsComponent/MainStatsComponent';


export default function WorkshopHero() {
  return (
    <>
      <section className={styles.Herocontent}>
        <div className={styles.HeroModule}>
          <div className={styles.HeroGrid}>
            <div className={styles.HeroContentBg}>
              <div className={styles.HeroBackground}>
                <Image
                  priority
                  alt="House of Grace Foundation"
                  src={MedicalConsumablesBackgroundI}
                  className={styles.HeroBackgroundImage}
                  quality={100}
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.GridedContentModule}>
                <div className={styles.FooterContentModule}>
               <MainStatsComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
