import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import AuthenticationMigration from '@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication'
export default function ListingManagerAuth(){
  return (
    <>
      <PageLoader>
       <AuthenticationMigration/>
      </PageLoader>     
    </>
  );
};

