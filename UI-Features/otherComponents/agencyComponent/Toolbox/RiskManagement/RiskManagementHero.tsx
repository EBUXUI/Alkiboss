import styles from '@/styles/Home.module.css';
import RiskManagementTitle from './RiskManagementTitle';
export default function RiskManagementHero() {
  return (
    <>
      <section className={styles.Herocontent}>
        <div className={styles.HeroModule}>
          <div className={styles.FooterContentModule}>
            <RiskManagementTitle />
            {/*<RiskManagementTitleI />*/}
          </div>
        </div>
      </section>
    </>
  );
};
