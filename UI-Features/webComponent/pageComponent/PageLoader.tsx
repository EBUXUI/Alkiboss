//import Footer from '@/Partitions/Pads/FooterPad';
import { PropsWithChildren } from "react";
import styles from "@/styles/Main.module.css"
export default function PageFormat({ children }: PropsWithChildren) {
  return (
    <>
      <main className={styles.PageFormat}>{children}</main>
    </>
  )
}
