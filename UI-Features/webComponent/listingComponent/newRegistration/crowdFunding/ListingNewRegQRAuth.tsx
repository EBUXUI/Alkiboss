import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import AuthenticationMigration from '@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/QRAuth/NewRegQRAuthMigration'
export default function ListingNewRegQRAuth(){
  return (
    <>
      <PageLoader>
       <AuthenticationMigration/>
      </PageLoader>     
    </>
  );
};

