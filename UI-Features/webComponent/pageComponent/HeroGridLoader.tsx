//import Footer from '@/Partitions/Pads/FooterPad';
import styles from '@/styles/Modern/Desktop.module.css';
import { PropsWithChildren } from "react";

export default function HeroGridLoader({ children }: PropsWithChildren) {
  return (
    <>
      <main className={styles.HeroGridLoader}>{children}</main>
    </>
  )
}
