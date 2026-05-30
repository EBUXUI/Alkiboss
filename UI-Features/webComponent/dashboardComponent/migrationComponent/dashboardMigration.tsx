import styles from '@/styles/Desktop.module.css';
import SideBarRousel from '@/UI-Features/webComponent/dashboardComponent/sidebarComponent/dashboardSidebar'
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader'
import SlidingRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/dashboardSlides'
import TopRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/dashboardBar'
import NavigationRousel from '@/UI-Features/webComponent/dashboardComponent/bannerComponent/DashboardBanner'
export default function SideMigration() {
  return (
    <>
      <section className={styles.SideBarcontent}>
        <div className={styles.SideBarhero}>
          <SideBarRousel/>
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