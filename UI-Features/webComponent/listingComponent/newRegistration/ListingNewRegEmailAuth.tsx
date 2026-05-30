import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import AuthenticationMigration from '@/UI-Features/webComponent/registrationComponent/Authentication/EmailAuth/NewRegEmailAuthMigration'
export default function ListingManagerEmailAuth(){
  return (
    <>
      <PageLoader>
       <AuthenticationMigration/>
      </PageLoader>     
    </>
  );
};

