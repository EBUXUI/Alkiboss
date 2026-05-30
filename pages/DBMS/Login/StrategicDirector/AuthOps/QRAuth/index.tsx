'use client'
import { useEffect } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import Head from 'next/head';
import OperatingManagerListing from '@/Partitions/MainListing/ListingManagerQRAuth';
import OperatingManagerPictorial from '@/Partitions/OperatingManager/OperatingManagerPictorial';
//import Link from 'next/link';
import NavigateManager from '@/Partitions/Migration/FloatingMigrationBarVI';

export default function OperatingManagerPassOpsQRAuth() {
    //useEffect(() => {
       // invoke<string>('greet', {name: 'Next.js'})
        //.then(console.log)
        //.catch(console.error)
   // }, [])
    // Necessary because we will have to use Greet as a component later.
    return(
        <>
         
         <OperatingManagerPictorial/>
         <OperatingManagerListing/>
         <NavigateManager/>
        </>
    )
}
