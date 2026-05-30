"use client";
import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Head from "next/head";
import OperatingSupervisorListing from "@/Partitions/MainListing/ListingSupervisorUserOpsEmailAuth";
import OperatingSupervisorPictorial from "@/Partitions/OperatingSupervisor/OperatingSupervisorPictorial";
//import Link from 'next/link';
import NavigateSupervisor from "@/Partitions/Migration/FloatingMigrationBarIII";

export default function OperatingSupervisorUserOpsEmailAuth() {
  //useEffect(() => {
  // invoke<string>('greet', {name: 'Next.js'})
  //.then(console.log)
  //.catch(console.error)
  // }, [])
  // Necessary because we will have to use Greet as a component later.
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Username Email Auth | Supervisor Auth |Finanvra Recovery </title>
        <meta
          name="description"
          content="Finanvra is a secure and intelligent financial management platform that simplifies fund registration, transfers, withdrawals, investments, and portfolio monitoring. Built on advanced automation protocols and bank-grade security, Finanvra empowers Supervisors, supervisors, and users with seamless control of their finances."
        />
        <meta
          name="keywords"
          content="Finanvra, financial management platform, secure fund transfers, automated investing, online wealth management, fintech solutions, portfolio tracking, secure banking software, financial automation, investment platform, money management system"
        />
        <meta name="author" content="Finanvra" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="theme-color" content="#0f172a" />
        <meta
          name="subject"
          content="Financial Management & Secure Fund Automation"
        />
        <meta name="rating" content="general" />
        <link rel="canonical" href="https://finandra.com/" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Finanvra | Secure Financial Management Platform"
        />
        <meta
          property="og:description"
          content="Experience secure, automated financial management with Finanvra. From fund registration to investment growth, Finanvra provides the tools to manage your money with confidence."
        />
        <meta
          property="og:image"
          content="https://finandra.com/images/og-finandra.jpg"
        />
        <meta property="og:url" content="https://finandra.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Finanvra" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Finanvra | The Future of Secure Financial Management"
        />
        <meta
          name="twitter:description"
          content="Finanvra is redefining financial security and automation. Register, transfer, withdraw, invest, and view funds seamlessly with our intelligent fintech platform."
        />
        <meta
          name="twitter:image"
          content="https://finandra.com/images/twitter-finandra.jpg"
        />
        <meta name="twitter:site" content="@FinanvraOfficial" />
        <meta name="twitter:creator" content="@FinanvraOfficial" />

        {/* Apple/Windows Device Enhancements */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Finanvra" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Finanvra",
              url: "https://finandra.com",
              logo: "https://finandra.com/icons/logo.png",
              description:
                "Finanvra is a secure, automated financial management platform offering fund registration, transfers, withdrawals, investments, and portfolio monitoring.",
              sameAs: [
                "https://www.facebook.com/FinanvraOfficial",
                "https://www.linkedin.com/company/finandra",
                "https://twitter.com/FinanvraOfficial",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Global Financial Center",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10001",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-0199",
                contactType: "Customer Support",
                areaServed: "Worldwide",
                availableLanguage: ["English", "Spanish", "French"],
              },
            }),
          }}
        />
      </Head>
      <OperatingSupervisorPictorial />
      <OperatingSupervisorListing />
      <NavigateSupervisor />
    </>
  );
}
