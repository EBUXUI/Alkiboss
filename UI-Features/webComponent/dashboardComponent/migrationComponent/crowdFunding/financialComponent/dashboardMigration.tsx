import styles from '@/styles/Desktop.module.css';
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader'
import SlidingRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/crowdFunding/financialComponent/dashboardSlides'
import TopRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/crowdFunding/financialComponent/dashboardBar'
import NavigationRousel from '@/UI-Features/webComponent/dashboardComponent/bannerComponent/crowdFunding/DashboardBanner'
export default function SideMigration() {
  return (
    <>
      <section className={styles.FinanceBarcontent}>
        <div className={styles.FinanceBarhero}>
          <MainContentLoader>
           <TopRousel/>
           <NavigationRousel/>
           <SlidingRousel/>
          </MainContentLoader>
        </div>
      </section>
    </>
  );
};