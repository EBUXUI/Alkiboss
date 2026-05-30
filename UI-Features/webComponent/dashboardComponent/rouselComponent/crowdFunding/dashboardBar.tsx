import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import StatisticsTab from '@/UI-Features/webComponent/dashboardComponent/headerComponent/crowdFunding/statisticsTab'

export default function dashboardBar() {
  return (
    <>
      <PageLoader>
       <StatisticsTab/>
      </PageLoader>     
    </>
  );
};