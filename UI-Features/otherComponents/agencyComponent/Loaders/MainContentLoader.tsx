//import Footer from '@/Partitions/Pads/FooterPad';

import { PropsWithChildren } from "react";

export default function MainContentLoader({ children }: PropsWithChildren) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
