import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import StatisticsTab from '@/UI-Features/webComponent/dashboardComponent/headerComponent/financialComponent/statisticsTab'

export default function dashboardBar() {
  return (
    <>
      <PageLoader>
       <StatisticsTab/>
      </PageLoader>     
    </>
  );
};