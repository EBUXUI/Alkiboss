import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import LoginMigration from '@/UI-Features/webComponent/backgroundComponent/credentialsComponent/CancerDetection/BloodCancerPlatform/LoginMigration'

export default function BloodCancerListing() {
  return (
    <>
      <PageLoader>
      <LoginMigration/>
      </PageLoader>     
    </>
  );
};

