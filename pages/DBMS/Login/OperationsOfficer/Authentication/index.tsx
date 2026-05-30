'use client'
import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import Head from 'next/head';
import OperatingUserListing from '@/Partitions/MainListing/ListingUser';
import OperatingUserPictorial from '@/Partitions/OperatingUser/OperatingUserPictorial';
import NavigateUser from '@/Partitions/OperatingUser/NavigateUser';
//import Link from 'next/link';

export default function OperatingUserMainAuth() {
    //useEffect(() => {
       // invoke<string>('greet', {name: 'Next.js'})
        //.then(console.log)
        //.catch(console.error)
   // }, [])
    // Necessary because we will have to use Greet as a component later.
    return(
        <>
         <Head>
          <title>Welcome to Our Catalouge System - Greetings Manager </title>
          <meta name="description" content="Powered By Nale Ops." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/ico.ico"/>
        </Head>
         <OperatingUserPictorial/>
         <OperatingUserListing/>
         <NavigateUser/>
        </>
    )
}
