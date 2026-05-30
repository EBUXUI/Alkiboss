import PageLoader from '@/UI-Features/webComponent/pageComponent/PageLoader'
import NewMigration from '@/UI-Features/webComponent/registrationComponent/NewMigration'

export default function ListingManager(){
  return (
    <>
      <PageLoader>
       <NewMigration/>
      </PageLoader>     
    </>
  );
};

