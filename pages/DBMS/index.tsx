"use client";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Head from "next/head";
import LoginListing from "@/Partitions/MainListing/LoginListing";
import LoginPictorial from "@/Partitions/OperatingManager/OperatingManagerPictorial";
import FloatingMigrationBar from "@/Partitions/OperatingSupervisor/NavigateSupervisor";
import PageFormat from '@/UI-Features/webComponent/pageComponent/PageLoader';
import PageFormatII from '@/UI-Features/webComponent/pageComponent/PageLoaderII';
import MenuHero from '@/UI-Features/webComponent/databaseComponent/menuHero';
import Navbar from '@/UI-Features/webComponent/navigationComponent/HeadBar';
export default function HouseofGraceDBMS() {
  return (
    <>
      
      <Head>
                      <title>Data Centre Board | Grace DBMS.</title>
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
      <PageFormat>
        <LoginPictorial />
        <LoginListing />
        <FloatingMigrationBar />
      </PageFormat>
    </>
  );
}
