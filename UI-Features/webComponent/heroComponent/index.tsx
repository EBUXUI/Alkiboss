import styles from '@/styles/Moduled/Current/Home.module.css';
import Image from 'next/image';
import ServiceBg from '@/MyPotraits/GreenWhite/GreenX.jpg'
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
                  quality={100}
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
                <div className={styles.LaunchingSoonContentModule}>
                <ServiceTitle/>
                <ServiceImage/>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
