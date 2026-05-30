import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import RegMigration from '@/UI-Features/webComponent/backgroundComponent/credentialsComponent/crowdFunding/LoginMigration'

export default function CrowdFundingLogin() {
  return (
    <>
      <PageLoader>
      <RegMigration/>
      </PageLoader>     
    </>
  );
};

