import styles from "@/styles/BuilderDashboard/Desktop.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/*------ Pages Entity ------*/
import HomePage from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/PagesComponent/homepageComponent";
import ToolBoxPage from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/PagesComponent/toolboxComponent";
import RiskManagementPage from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/PagesComponent/riskManagementComponent";
import InstallEarthPage from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/PagesComponent/installEarthComponent";
import ProductBuilderPage from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/PagesComponent/productBuilderComponent";
import EarthBlogPage from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/PagesComponent/earthBlogComponent";
/*------ Pages Entity ------*/

/*------ Components Entity ------*/
import TheEntireWebFlow from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/WebFlowComponent";
import NavigationComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/NavigationComponent";
import HeroComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/HeroComponent";
import ProductComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/ProductComponent";
import BannerComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/BannerComponent";
import FormComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/FormComponent";
import FooterComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/FooterComponent";
import OtherComponents from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/EntityComponent/OtherComponents";
/*------ Components Entity ------*/

const pageTitle = {
  homePage: "HomePage",
  toolboxPage: "TheToolboxPage",
  riskmanagementPage: "RiskManagementPage",
  installearthPage: "InstallEarthBuilderPage",
  productbuilderPage: "ProductBuilderPage",
  earthblogPage: "EarthBlogPage",
};

const componentTitle = {
  theEntireWebflow: "TheEntireWebFlow",
  navigationComponent: "NavigationComponent",
  heroComponent: "HeroComponent",
  productComponent: "ProductComponent",
  bannerComponent: "BannerComponent",
  formComponent: "FormComponent",
  footerComponent: "FooterComponent",
  otherComponents: "otherComponents",
};

type PageKeys = keyof typeof pageTitle;
type ComponentKeys = keyof typeof componentTitle;

export default function DashboardHeader() {
  const [activePage, setActivePage] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const resetPage = () => setActivePage(null);
    router.events.on("routeChangeStart", resetPage);
    return () => router.events.off("routeChangeStart", resetPage);
  }, [router]);

  const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActivePage(e.target.value);
  };

  const setComponent = (component: string) => {
    setActivePage(component);
  };


  return (
    <>
      {/* Header Title */}
      <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
        <div className={styles.DashboardTitle}>
          <div className={styles.TheTitle}>
            Software Management - <span className={styles.TitleWolf}>Name of Website</span>
          </div>
        </div>
      </section>

      {/* Page Selector */}
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>Current Page -</div>
        <div className={styles.DashboardHeader}>
          <select className={styles.PageSelector} onChange={handlePageChange} value={activePage || ""}>
            <option value="">Select Page</option> 
            <option value={pageTitle.homePage}>Home Page</option>
            <option value={pageTitle.toolboxPage}>ToolBox Page</option>
            <option value={pageTitle.riskmanagementPage}>Risk Management Page</option>
            <option value={pageTitle.installearthPage}>Install Earth Speed Page</option>
            <option value={pageTitle.productbuilderPage}>Product Builder Page</option>
            <option value={pageTitle.earthblogPage}>Earth's Blog Page</option>
          </select>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>
          <label 
          onClick={() => setComponent(componentTitle.theEntireWebflow)} 
          className={`${styles["DashboardTab"]} ${styles["ActiveTab"]}`}>
            The Entire Web Flow
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
           onClick={() => setComponent(componentTitle.navigationComponent)}
          className={styles.DashboardTab}>
            Navigation Component
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
         onClick={() =>  setComponent(componentTitle.heroComponent)} 
          className={styles.DashboardTab}>
            Hero Component
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
          onClick={() =>  setComponent(componentTitle.productComponent)}
          className={styles.DashboardTab}>
            Product Component
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
          onClick={() => setComponent(componentTitle.bannerComponent)} 
          className={styles.DashboardTab}>
            Banner Component
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
          onClick={() => setComponent(componentTitle.formComponent)}
          className={styles.DashboardTab}>
            Form Component
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
          onClick={() => setComponent(componentTitle.footerComponent)}
          className={styles.DashboardTab}>
            Footer Component
          </label>
        </div>
        <div className={styles.DashboardHeader}>
          <label 
          onClick={() => setComponent(componentTitle.otherComponents)}
          className={styles.DashboardTab}>
            Other Components
          </label>
        </div>
      </section>

      
      {/* Conditional Rendering - Components */}
      {activePage === componentTitle.theEntireWebflow && <TheEntireWebFlow />}
      {activePage === componentTitle.navigationComponent && <NavigationComponent />}
      {activePage === componentTitle.heroComponent && <HeroComponent />}
      {activePage === componentTitle.productComponent && <ProductComponent />}
      {activePage === componentTitle.bannerComponent && <BannerComponent />}
      {activePage === componentTitle.formComponent && <FormComponent />}
      {activePage === componentTitle.footerComponent && <FooterComponent />}
      {activePage === componentTitle.otherComponents && <OtherComponents />}

      {/* Conditional Page Rendering */}
      {activePage === pageTitle.homePage && <HomePage />}
      {activePage === pageTitle.toolboxPage && <ToolBoxPage />}
      {activePage === pageTitle.riskmanagementPage && <RiskManagementPage />}
      {activePage === pageTitle.installearthPage && <InstallEarthPage />}
      {activePage === pageTitle.productbuilderPage && <ProductBuilderPage />}
      {activePage === pageTitle.earthblogPage && <EarthBlogPage />}

      
    </>
  );
}
