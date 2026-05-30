import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import LoginMigration from '@/UI-Features/webComponent/backgroundComponent/credentialsComponent/TheHealthDashboard/LoginMigration'

export default function TheHealthDashboardListing() {
  return (
    <>
      <PageLoader>
      <LoginMigration/>
      </PageLoader>     
    </>
  );
};

