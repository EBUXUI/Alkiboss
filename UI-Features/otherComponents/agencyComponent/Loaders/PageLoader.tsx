//import Footer from '@/Partitions/Pads/FooterPad';
import { PropsWithChildren } from "react";

export default function PageFormat({ children }: PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
