//import Footer from '@/Partitions/Pads/FooterPad';

import { PropsWithChildren } from "react";
// components/LoadingBar.tsx
import React from 'react';
import styles from '@/styles/Desktop.module.css';

export default function SectionComponent({ children }: PropsWithChildren) {
  return (
    <>
      <section className={styles.sectionHolder}>{children}</section>
    </>
  )
}

