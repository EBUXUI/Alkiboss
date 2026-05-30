import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import LoginMigration from '@/UI-Features/webComponent/backgroundComponent/credentialsComponent/LoginMigration'

export default function SideListing() {
  return (
    <>
      <PageLoader>
      <LoginMigration/>
      </PageLoader>     
    </>
  );
};

