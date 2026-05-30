import styles from '@/styles/BuilderDashboard/Desktop.module.css';
import SideBarRousel from '@/UI-Features/webComponent/dashboardComponent/sidebarComponent/dashboardSidebar';
import MainContentLoader from '@/UI-Features/webComponent/pageComponent/MainContentLoader';
import TopRousel from '@/UI-Features/webComponent/dashboardComponent/rouselComponent/dashboardBar';
import EarthBuilder from '@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder';
import BuilderCanvas from '@/UI-Features/webComponent/dashboardComponent/automationComponent/BuilderCanvas';
export default function SideMigration() {
  return (
    <>
      <section className={styles.SideBarcontent}>
        <div className={styles.SideBarhero}>
          <SideBarRousel/>
          <MainContentLoader>
           <TopRousel/>
           </MainContentLoader>
        </div>
      </section>
    </>
  );
};