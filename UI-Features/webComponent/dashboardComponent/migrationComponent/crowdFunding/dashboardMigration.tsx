import styles from '@/styles/Desktop.module.css';
import SideBarRousel from '@/UI-Features/webComponent/dashboardComponent/sidebarComponent/dashboardSidebar'
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader'
import SlidingRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/crowdFunding/dashboardSlides'
import TopRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/crowdFunding/dashboardBar'
import NavigationRousel from '@/UI-Features/webComponent/dashboardComponent/bannerComponent/crowdFunding/DashboardBanner'
import ProgrammesModuleII from '@/UI-Features/webComponent/dashboardComponent/moduleComponent/crowdFunding/programmesModuleII'
export default function SideMigration() {
  return (
    <>
      <section className={styles.SideBarcontent}>
        <div className={styles.SideBarhero}>
          <SideBarRousel/>
          <MainContentLoader>
           <TopRousel/>
           <ProgrammesModuleII/>
           <NavigationRousel/>
           <SlidingRousel/>
          </MainContentLoader>
        </div>
      </section>
    </>
  );
};