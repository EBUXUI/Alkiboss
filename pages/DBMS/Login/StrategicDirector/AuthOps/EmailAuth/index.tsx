'use client'
import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import Head from 'next/head';
import OperatingManagerListing from '@/Partitions/MainListing/ListingManagerEmailAuth';
import OperatingManagerPictorial from '@/Partitions/OperatingManager/OperatingManagerPictorial';
//import Link from 'next/link';
import NavigateManager from '@/Partitions/Migration/FloatingMigrationBarVI';

export default function OperatingManagerPassOpsEmailAuth() {
    //useEffect(() => {
       // invoke<string>('greet', {name: 'Next.js'})
        //.then(console.log)
        //.catch(console.error)
   // }, [])
    // Necessary because we will have to use Greet as a component later.
    return(
        <>
         <Head>
          <title>Your Credentials - Jos Restaurant </title>
          <meta name="description" content="Powered By Nale Ops." />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/ico.ico"/>
        </Head>
         <OperatingManagerPictorial/>
         <OperatingManagerListing/>
         <NavigateManager/>
        </>
    )
}
