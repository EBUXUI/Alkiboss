'use client'
import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import Head from 'next/head';
import MainPictorial from '@/UI-Features/webComponent/backgroundComponent/MainPictorial';
import DashboardListing from '@/UI-Features/webComponent/listingComponent/dashboardComponent/dashboardListing'
import Navbar from '@/UI-Features/webComponent/navigationComponent/DashboardBar';
import PageFormat from '@/UI-Features/webComponent/pageComponent/PageLoader';
import MenuHero from '@/UI-Features/webComponent/databaseComponent/menuHeroDashboard';
import Link from 'next/link';

export default function webBuilderDashboard() {
    //useEffect(() => {
    // invoke<string>('greet', {name: 'Next.js'})
    //.then(console.log)
    //.catch(console.error)
    // }, [])
    // Necessary because we will have to use Greet as a component later.
    return (
        <>
            <Head>
                <title> Music Catalog | My Albums | My Singles</title>
                <meta name="description" content="Earth Speed is a organization dedicated to supporting software development and individuals diagnosed with software. Founded in September 2015, we provide aid, resources, and hope to those in need." />
                <meta name="keywords" content="Earth Speed Builder, software development, software support, charity, donations, aid, healthcare, community support, foundation for children, software patients help" />
                <meta name="author" content="Earth Speed Builder" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content="Earth Speed Builder | Supporting software development & software Patients" />
                <meta property="og:description" content="Join Earth Speed Builder in making a difference for software development and software patients. Established in 2015, we provide essential support and care." />
                <meta property="og:image" content="https://houseofgracefoundation.com/images/og-image.jpg" />
                <meta property="og:url" content="https://houseofgracefoundation.com" />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Earth Speed Builder | Supporting software development & software Patients" />
                <meta name="twitter:description" content="Providing aid and support to software development and software-diagnosed individuals since 2015. Join Earth Speed Builder today." />
                <meta name="twitter:image" content="https://houseofgracefoundation.com/images/twitter-image.jpg" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/Ico.ico" />
            </Head>
            <Navbar />
            <MainPictorial />
            <MenuHero />
            <PageFormat>
                <DashboardListing />
            </PageFormat>
            <MenuHero />

        </>
    )

}
