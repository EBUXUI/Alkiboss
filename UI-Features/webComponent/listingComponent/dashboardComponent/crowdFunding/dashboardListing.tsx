import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import DashboardMigration from '@/UI-Features/webComponent/dashboardComponent/migrationComponent/crowdFunding/dashboardMigration'

export default function SideListing() {
  return (
    <>
      <PageLoader>
      <DashboardMigration/>
      </PageLoader>     
    </>
  );
};

