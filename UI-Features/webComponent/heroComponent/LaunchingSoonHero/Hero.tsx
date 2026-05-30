import styles from '@/styles/Legal/Home.module.css';
import Image from 'next/image';
import ServiceBg from '@/MyPotraits/GreenWhite/GreenX.jpg'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ServiceTitle from './Title';
import ServiceImage from './Image';
export default function LaunchingSoonHeroComponent() {
  return (
    <>
      <section className={styles.Herocontent}>
        <div className={styles.HeroModule}>
          <div className={styles.HeroGrid}>
           
            <div className={styles.HeroContentBg}>
              <div className={styles.HeroBackground}>
                <Image
                  priority
                  alt="Donate to House of Grace Foundation"
                  src={ServiceBg}
                  className={styles.HeroBackgroundImage}
                  quality={100}
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.GridedLaunchingHeroModule}>
                <div className={styles.LaunchingSoonContentModule}>
                <ServiceImage/>
                <ServiceTitle/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
