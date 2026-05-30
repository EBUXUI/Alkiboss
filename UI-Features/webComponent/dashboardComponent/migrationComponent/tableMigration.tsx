import styles from '@/styles/Modern/Desktop.module.css';
import SideBarRousel from '@/UI-Features/webComponent/dashboardComponent/sidebarComponent/dashboardSidebar'
import HeroGridLoader from '@/UI-Features/webComponent/pageComponent/HeroGridLoader'
import SlidingRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/dashboardSlides'
import TableStats from '@/UI-Features/webComponent/dashboardComponent/tableComponent/TableStatsIV'
import NavigationRousel from '@/UI-Features/webComponent/dashboardComponent/bannerComponent/DashboardBanner'
import Navbar from '@/UI-Features/webComponent/navigationComponent/HeadBar'
export default function SideMigration() {
  return (
    <>
      <section className={styles.SideBarcontent}>
        
        <div className={styles.SideBarhero}>
          <SideBarRousel/>
          <HeroGridLoader>
           <TableStats/>
           <NavigationRousel/>
           <SlidingRousel/>
          </HeroGridLoader>
        </div>
      </section>
    </>
  );
};