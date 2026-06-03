'use client'
import Head from 'next/head';
import HomePictorial from '@/UI-Features/webComponent/backgroundComponent/LoginPictorial';
import Navbar from '@/UI-Features/webComponent/navigationComponent/HeadBar';
import PageFormat from '@/UI-Features/webComponent/pageComponent/PageLoader';
import PageFormatII from '@/UI-Features/webComponent/pageComponent/PageLoaderII';
import Menu from '@/UI-Features/webComponent/menuComponent/Menu';
import MenuHero from '@/UI-Features/webComponent/databaseComponent/menuHero';
import ProgrammesModule from '@/UI-Features/webComponent/moduleComponent/programmesModule';
import ProgrammesModuleII from '@/UI-Features/webComponent/moduleComponent/programmesModuleII';
import DisabilityHero from '@/UI-Features/webComponent/heroComponent';
import MainHero from '@/UI-Features/webComponent/heroComponent/MainHero';
import Stats from "@/UI-Features/webComponent/heroComponent/CompanyStatsComponent/MainStatsComponent";
import HeroComponentII from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/HeroComponentII";
import FormComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/FormComponent";
import SectionComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/SectionComponent"
export default function Home() {
    return (
        <>
            <Head>
                <title>Adrien (Alkiboss) | Urban Afro Fusion Creator, Comedian & Entertainer</title>

                <meta
                    name="description"
                    content="Discover Adrien (Alkiboss), the Urban Afro Fusion creator captivating millions through comedy, storytelling, entertainment, and digital culture. Explore exclusive content, viral moments, and the journey behind the creator."
                />

                <meta
                    name="keywords"
                    content="Adrien, Alkiboss, Urban Afro Fusion, Afro Fusion Creator, African Content Creator, Comedy Creator, Entertainer, Viral Videos, TikTok Creator, YouTube Creator, Digital Creator, African Comedy, Content Creation, Social Media Influencer, Comedy Skits, Entertainment Platform, Creator Economy, Trending Creator"
                />

                <meta
                    name="author"
                    content="Adrien (Alkiboss)"
                />

                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Open Graph */}
                <meta
                    property="og:title"
                    content="Adrien (Alkiboss) | Urban Afro Fusion Creator & Entertainer"
                />

                <meta
                    property="og:description"
                    content="Step into the world of Adrien (Alkiboss), where comedy, culture, storytelling, and entertainment connect millions across digital platforms."
                />

                <meta
                    property="og:image"
                    content="https://alkiboss.vercel.app/MyPortraits/MainC.jpg"
                />

                <meta
                    property="og:url"
                    content="https://alkiboss.vercel.app"
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:site_name"
                    content="Adrien | Alkiboss"
                />

                {/* Twitter / X */}
                <meta
                    name="instagram:card"
                    content="summary_large_image"
                />

                <meta
                    name="instagram:title"
                    content="Adrien (Alkiboss) | Urban Afro Fusion Creator & Entertainer"
                />

                <meta
                    name="instagram:description"
                    content="Comedy, culture, creativity, and unforgettable entertainment. Explore the official world of Adrien (Alkiboss)."
                />

                <meta
                    name="instagram:image"
                    content="https://www.instagram.com/p/DXZHKjpDb2y/"
                />

                {/* Search Engine Identity */}
                <meta
                    name="application-name"
                    content="Adrien | Alkiboss"
                />

                <meta
                    name="apple-mobile-web-app-title"
                    content="Adrien"
                />

                <meta
                    name="theme-color"
                    content="#000000"
                />

                <meta
                    name="impact-site-verification"
                    content="1e45aae5-c711-4dcb-9331-d829cf0f10f2"
                />

                <link
                    rel="canonical"
                    href="https://alkiboss.vercel.app"
                />

                <link
                    rel="icon"
                    href="/Ico.ico"
                />
            </Head>
            <Navbar />
            <MenuHero />
            <PageFormat>
                <SectionComponent>
                    <MainHero />
                <div id="AllContent">
                    <HeroComponentII />
                </div>
                <div id="ContactUs">
                    <FormComponent />
                </div>
                <ProgrammesModule />
                <ProgrammesModuleII />
                <HomePictorial />
                <div id="BrandPartnerships">
                    <HeroComponentII />
                </div>

                <MainHero />
                </SectionComponent>
            </PageFormat>
            <PageFormatII>
                <MenuHero />
            </PageFormatII>

        </>
    )
}
