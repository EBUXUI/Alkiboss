import styles from '@/styles/Legal/Desktop.module.css';
import Image from 'next/image';
import ServiceBg from '@/UI-Features/UI-Gallery/WhiteBlue/WhiteBlueVI.jpg';
import ComponentTitle from './ComponentTitle';
import ComponentProduct from './ComponentProduct';
import HeaderCSS from "@/styles/Stats/Home.module.css";
import SuccessTitle from "./SuccessTitle";
import SuccessComponent from "./SuccessComponent";
import SuccessComponentII from "./SuccessComponentII";
export default function ServiceHero() {
  return (
    <>
    
        <section className={HeaderCSS.HeaderTitle}>
          <div className={HeaderCSS.HeaderMainTitle}>
            <SuccessTitle/>
            </div>       
          </section>
      <section className={styles.Herocontent}>
       
            <div className={styles.HeroContentBg}>
              <div className={styles.HeroBackground}>
                <Image
                  priority
                  alt="Soriyo International Management Consultancy Services"
                  src={ServiceBg}
                  className={styles.HeroBackgroundImage}
                  quality={100}
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.GridedContentModule}>
                <div className={styles.FooterContentModule}>
                <SuccessComponent/>
                <SuccessComponentII/>
                </div>
                <div className={styles.FooterContentModuleII}>
                  <ComponentProduct/>
                </div>
              </div>
            </div>
          
      </section>
    </>
  );
};
