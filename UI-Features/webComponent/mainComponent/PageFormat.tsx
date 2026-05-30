import Head from 'next/head';
import Footer from '@/UI-Features/webComponent/footerComponent/Footer';
import React from 'react';

export default function PageFormat({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer/>
    </>
  )
}
