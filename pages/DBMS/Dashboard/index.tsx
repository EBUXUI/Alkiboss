"use client";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Head from "next/head";
import MainPictorial from "@/UI-Features/webComponent/backgroundComponent/LoginPictorial";
import SidebarContent from "@/UI-Features/webComponent/listingComponent/dashboardComponent/dashboardListing";
import PageFormat from '@/UI-Features/otherComponents/agencyComponent/Loaders/PageLoader';
import MenuHeroII from '@/UI-Features/otherComponents/databaseComponent/menuHero';
import MenuHero from '@/UI-Features/webComponent/navigationComponent/DashboardBar';

export default function FinancialDashboard() {
    //useEffect(() => {
    // invoke<string>('greet', {name: 'Next.js'})
    //.then(console.log)
    //.catch(console.error)
    // }, [])
    // Necessary because we will have to use Greet as a component later.
    return (
        <>
            <Head>
                                  <title>Data Centre | Official Dashboard | Grace DBMS.</title>
                                  <meta name="description" content="House of Grace Foundation is a non-profit organization dedicated to supporting disabled children and individuals diagnosed with cancer. Founded in September 2015, we provide aid, resources, and hope to those in need." />
                                  <meta name="keywords" content="House of Grace Foundation, non-profit, disabled children, cancer support, charity, donations, aid, healthcare, community support, foundation for children, cancer patients help" />
                                  <meta name="author" content="House of Grace Foundation" />
                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                  <meta property="og:title" content="House of Grace Foundation | Supporting Disabled Children & Cancer Patients" />
                                  <meta property="og:description" content="Join House of Grace Foundation in making a difference for disabled children and cancer patients. Established in 2015, we provide essential support and care." />
                                  <meta property="og:image" content="https://houseofgracefoundation.com/images/og-image.jpg" />
                                  <meta property="og:url" content="https://houseofgracefoundation.com" />
                                  <meta property="og:type" content="website" />
                                  <meta name="twitter:card" content="summary_large_image" />
                                  <meta name="twitter:title" content="House of Grace Foundation | Supporting Disabled Children & Cancer Patients" />
                                  <meta name="twitter:description" content="Providing aid and support to disabled children and cancer-diagnosed individuals since 2015. Join House of Grace Foundation today." />
                                  <meta name="twitter:image" content="https://houseofgracefoundation.com/images/twitter-image.jpg" />
                                  <meta name="viewport" content="width=device-width, initial-scale=1" />
                                  <meta name="impact-site-verification" content="1e45aae5-c711-4dcb-9331-d829cf0f10f2"/>
                                  <link rel="icon" href="/Ico.ico" />
                              </Head>
            

      <MainPictorial />
      <MenuHero />
      <PageFormat>
        <SidebarContent />
      </PageFormat>
      <MenuHeroII />
    </>
  );
}
