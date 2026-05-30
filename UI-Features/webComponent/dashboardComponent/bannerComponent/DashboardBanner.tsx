import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import DashboardBanner from '@/UI-Features/webComponent/dashboardComponent/bannerComponent/DashboardPad'

export default function DashboardBannerComponent() {
  return (
    <>
      <PageLoader>
       <DashboardBanner/>
      </PageLoader>     
    </>
  );
};