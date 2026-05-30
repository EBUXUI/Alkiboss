//import Footer from '@/Partitions/Pads/FooterPad';
import { PropsWithChildren } from "react";
import ResStyles from '@/styles/Menu/White/Home.module.css'
import styles from "@/styles/Main.module.css"
export default function PageFormat({ children }: PropsWithChildren) {
  return (
    <>
      <main className={`${styles['PageFormat']} ${ResStyles['ResNav']}`}>{children}</main>
    </>
  )
}
