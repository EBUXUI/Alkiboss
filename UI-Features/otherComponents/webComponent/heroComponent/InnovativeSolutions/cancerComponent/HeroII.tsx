import styles from '@/styles/Moduled/Home.module.css';
import Image from 'next/image';
import ServiceBg from '@/UI-Features/UI-Gallery/WhiteBlue/WhiteBlueIX.jpg';
import ServiceTitle from './Title';
import ServiceImage from './Image';
export default function LaunchingSoonHeroComponent() {
  return (
    <>
      <section className={styles.Herocontent}>
        <div className={styles.RouselMainModule}>
          <div className={styles.HeroGrid}>
            <div className={styles.HeroContentBg}>
              <div className={styles.HeroBackground}>
                <Image
                  priority
                  alt="UIGem-AI | The First Worlds Best UI & UX AI Model"
                  src={ServiceBg}
                  className={styles.HeroBackgroundImage}
                   
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
                <div className={styles.LaunchingSoonContentModule}>
                <ServiceImage/>
                <ServiceTitle/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
