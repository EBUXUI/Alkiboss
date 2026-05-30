import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "@/UI-Features/webComponent/loadingComponent";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import ErrorHandler from "@/ErrorHandler";
import {
  Cormorant_Garamond,
  Cormorant_Infant,
  Outfit,
  Syne,
  Poppins,
  Dancing_Script,
  Raleway,
  Oswald,
  Anton,
} from "next/font/google";

// ── NEW WORLD-CLASS FONTS ──────────────────────────────────────────────────

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-ui",
  display: "swap",
});

// ── EXISTING FONTS (migrated from Google Fonts @import) ───────────────────

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dancing",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],        // Anton only has one weight
  variable: '--font-anton',
  display: 'swap',
})
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleStop = () => {
      //Finish the Bar Before Hiding It.
      setTimeout(() => setLoading(false), 300); //Delay to Allow Bar to Complete.
    };
    router.events.on("routeChangeStart", handleStart);
    router.events.off("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStart);

    return () => {
      router.events.on("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.on("routeChangeError", handleStart);
    };
  }, [router]);
  return (
    <>
      <div
        className={[
          cormorantGaramond.variable,
          cormorantInfant.variable,
          outfit.variable,
          syne.variable,
          poppins.variable,
          dancingScript.variable,
          raleway.variable,
          oswald.variable,
          anton.variable,     // ← add this
        ].join(" ")}
      >
        <ErrorHandler>
          <Component {...pageProps} />
          <Analytics />
        </ErrorHandler>
      </div>
    </>
  );
}
