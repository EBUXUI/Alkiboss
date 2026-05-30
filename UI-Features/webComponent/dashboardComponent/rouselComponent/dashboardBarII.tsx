import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import StatisticsTab from '@/UI-Features/webComponent/dashboardComponent/headerComponent/statisticsTabII'
import styles from '@/styles/BuilderDashboard/Desktop.module.css'

export default function dashboardBar() {
  return (
    <>
      <PageLoader>
        <section className={styles.MainDashboard}>
          <StatisticsTab/>
        </section>
      </PageLoader>     
    </>
  );
};