import Head from 'next/head';
import HeroSection from "./components/HeroSection";
import CollaboratedWith from "./components/CollaboratedWith";
import AboutSection from "./components/AboutSection";
import FeedbackSection from "./components/FeedbackSection";
import TikTokVideosSection from "./components/TikTokVideosSection";
import BrandAwarenessSection from "./components/BrandAwarenessSection";
import YouTubeSection from "./components/YouTubeSection";
import StatsSection from "./components/StatsSection";
import CTASection from "./components/CTASection";
import Navbar from '@/UI-Features/webComponent/navigationComponent/HeadBar';
import PageFormat from '@/UI-Features/webComponent/pageComponent/PageLoader';
import PageFormatII from '@/UI-Features/webComponent/pageComponent/PageLoaderII';
import Menu from '@/UI-Features/webComponent/menuComponent/Menu';
import MenuHero from '@/UI-Features/webComponent/databaseComponent/menuHero';
import SectionComponent from "@/UI-Features/webComponent/dashboardComponent/automationComponent/EarthBuilder/SectionComponent"
import { useEffect, useRef, useState } from "react";

interface StatItem {
  icon: React.ReactNode;
  value: string;
  label: string;
  sublabel?: string;
}

/**
 * Animated counter
 */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;

          const duration = 1600;
          const steps = 60;
          const increment = target / steps;

          let current = 0;

          const timer = setInterval(() => {
            current += increment;

            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
      const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const els = entry.target.querySelectorAll(".stat-anim");

            els.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
                el.classList.remove("opacity-0", "translate-y-10");
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats: StatItem[] = [
    {
      icon: "▶",
      value: "1OM+",
      label: "YOUTUBE",
      sublabel: "VIEWS",
    },
    {
      icon: "👥",
      value: "10+",
      label: "BRAND",
      sublabel: "COLLABORATIONS",
    },
    {
      icon: "⚡",
      value: "HIGH",
      label: "ENGAGEMENT",
      sublabel: "RATE",
    },
    {
      icon: "🌐",
      value: "MULTI",
      label: "PLATFORM",
      sublabel: "CREATOR",
    },
  ];
    return (
        <>
            <Head>
  {/* Primary SEO */}
  <title>
    Alkiboss Classic | Comedian, Entertainer, Content Creator & Digital Influencer
  </title>

  <meta
    name="description"
    content="Official website of Alkiboss Classic, comedian, entertainer, content creator and digital influencer. Explore viral comedy content, social media milestones, collaborations, videos, achievements and the journey behind one of East Africa's most recognized entertainment creators."
  />

  <meta
    name="robots"
    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
  />

  <meta
    name="author"
    content="Alkiboss Classic"
  />

  <meta
    name="creator"
    content="Alkiboss Classic"
  />

  <meta
    name="publisher"
    content="Alkiboss Classic"
  />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  />

  <meta
    name="theme-color"
    content="#000000"
  />

  {/* Canonical */}
  <link
    rel="canonical"
    href="https://alkiboss.vercel.app"
  />

  {/* Open Graph */}
  <meta
    property="og:locale"
    content="en_US"
  />

  <meta
    property="og:type"
    content="profile"
  />

  <meta
    property="og:title"
    content="Alkiboss Classic | Official Website"
  />

  <meta
    property="og:description"
    content="Official website of Alkiboss Classic featuring comedy, entertainment, viral content, creator milestones, collaborations and digital media."
  />

  <meta
    property="og:url"
    content="https://alkiboss.vercel.app"
  />

  <meta
    property="og:site_name"
    content="Alkiboss Classic"
  />

  <meta
    property="og:image"
    content="https://alkiboss.vercel.app/MyPortraits/MainC.jpg"
  />

  <meta
    property="og:image:width"
    content="1200"
  />

  <meta
    property="og:image:height"
    content="630"
  />

  <meta
    property="og:image:alt"
    content="Alkiboss Classic Official Portrait"
  />

  {/* Twitter / X */}
  <meta
    name="twitter:card"
    content="summary_large_image"
  />

  <meta
    name="twitter:title"
    content="Alkiboss Classic | Official Website"
  />

  <meta
    name="twitter:description"
    content="Comedy, entertainment, viral content, creator milestones and collaborations."
  />

  <meta
    name="twitter:image"
    content="https://alkiboss.vercel.app/MyPortraits/MainC.jpg"
  />

  {/* Mobile */}
  <meta
    name="apple-mobile-web-app-capable"
    content="yes"
  />

  <meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />

  <meta
    name="apple-mobile-web-app-title"
    content="Alkiboss Classic"
  />

  {/* Verification */}
  <meta
    name="impact-site-verification"
    content="1e45aae5-c711-4dcb-9331-d829cf0f10f2"
  />

  <link
    rel="icon"
    href="/Ico.ico"
  />
  {/* Profile Schema */}
              <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context":"https://schema.org",
      "@type":"ProfilePage",
      "@id":"https://alkiboss.vercel.app/#profile",
      name:"Alkiboss Classic Official Website",
      mainEntity:{
        "@id":"https://alkiboss.vercel.app/#person"
      }
    })
  }}
/>
  {/* Person Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Alkiboss Classic",
        alternateName: [
          "Alkiboss",
          "alkiboss_classic",
          "@alkiboss_classic",
          "@alkibossclassic"
        ],
        url: "https://alkiboss.vercel.app",
        image: "https://alkiboss.vercel.app/MyPortraits/MainC.jpg",
        description:
          "Comedian, entertainer, content creator, digital influencer and Urban Afro Fusion creator known for viral comedy and entertainment content.",
        jobTitle: [
          "Comedian",
          "Entertainer",
          "Content Creator",
          "Digital Influencer"
        ],
        sameAs: [
          "https://www.youtube.com/@alkibossclassic",
          "https://www.tiktok.com/@alkiboss_classic",
          "https://www.instagram.com/alkiboss_classic",
          "https://www.facebook.com/Alkiboss"
        ]
      })
    }}
  />

  {/* Brand Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Brand",
        name: "Alkiboss Classic",
        alternateName: "Alkiboss",
        url: "https://alkiboss.vercel.app",
        logo: "https://alkiboss.vercel.app/Ico.ico",
        image: "https://alkiboss.vercel.app/MyPortraits/MainC.jpg"
      })
    }}
  />

  {/* Website Schema */}
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Alkiboss Classic",
        url: "https://alkiboss.vercel.app",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://alkiboss.vercel.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })
    }}
  />
</Head>
            <PageFormat>
                <SectionComponent>
                          <section id="profile">
                            <HeroSection />
                          </section>
                          <CollaboratedWith />
                          <AboutSection />
                          <FeedbackSection />
                          <TikTokVideosSection />
                          <BrandAwarenessSection />
                          <YouTubeSection />
                          <StatsSection/>
                          <CTASection />
                </SectionComponent>
            </PageFormat>

        </>
    )
}
