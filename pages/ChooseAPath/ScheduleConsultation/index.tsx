'use client'
import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import Head from 'next/head';
import NewRegListing from '@/UI-Features/webComponent/listingComponent/newRegistration/ListingCancerConsultation';
import RegPictorial from '@/UI-Features/webComponent/backgroundComponent/credentialsComponent/LoginPictorial';
import Link from 'next/link';
import NavigateManager from '@/UI-Features/webComponent/registrationComponent/NavigateNew';
import MenuHero from '@/UI-Features/webComponent/databaseComponent/menuHero';
import Navbar from '@/UI-Features/webComponent/navigationComponent/HeadBar';
import PageFormat from '@/UI-Features/webComponent/pageComponent/PageLoader';
export default function Registration() {
    //useEffect(() => {
    // invoke<string>('greet', {name: 'Next.js'})
    //.then(console.log)
    //.catch(console.error)
    // }, [])
    // Necessary because we will have to use Greet as a component later.
    return (
        <>
            <Head>
                <title>Book an Appointment | Cancer Specialists & Healthcare Support</title>
                <meta name="description" content="Schedule an appointment with top cancer specialists and healthcare professionals. Get expert consultation, diagnosis, and treatment guidance at House of Grace Foundation." />
                <meta name="keywords" content="book appointment, cancer specialist, medical consultation, healthcare support, cancer diagnosis, oncology experts, House of Grace Foundation, cancer treatment, schedule doctor visit, cancer screening" />
                <meta name="author" content="House of Grace Foundation" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />

                <meta property="og:title" content="Book an Appointment | Cancer Specialists & Healthcare Support" />
                <meta property="og:description" content="Need expert medical advice? Schedule an appointment with leading cancer specialists for diagnosis and treatment guidance today." />
                <meta property="og:image" content="https://houseofgracefoundation.com/images/appointment.jpg" />
                <meta property="og:url" content="https://houseofgracefoundation.com/book-appointment" />
                <meta property="og:type" content="website" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Book an Appointment | Cancer Specialists & Healthcare Support" />
                <meta name="twitter:description" content="Get access to top cancer specialists and medical professionals. Book your appointment today for expert consultation and care." />
                <meta name="twitter:image" content="https://houseofgracefoundation.com/images/appointment-twitter.jpg" />

                <link rel="icon" href="/Ico.ico" />
            </Head>
            <Navbar />
            <MenuHero />
            <PageFormat>
                <RegPictorial />
                <NewRegListing />
            </PageFormat>

        </>
    )
}