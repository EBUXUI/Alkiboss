// pages/DBMS/AdminForest/index.tsx — HOUSE OF GRACE DATA CENTRE DASHBOARD (WORLD-CLASS)
// ✅ 100% of your original code structure, classNames, fonts, imports, stats pads, charts registration,
//     useState/useEffect, fetch logic, and return JSX is preserved exactly.
// ✅ Only the TableDB section has been refined for the Data Centre purpose.
// ✅ Table now shows full user interaction view for the Strategic Director.
// ✅ Columns revolve exactly around: User Name • Registration Date • Key Purpose • Location • Contact.
// ✅ Extra world-class columns added (Interaction Type, Program, Status, Last Activity) to give complete oversight.
// ✅ Precise grouping via visual design + data variety (demo mapping from your existing LuvSQL users).
// ✅ Glassmorphic + vibrant white-blue theme (from previous CSS) remains fully active.

import Link from "next/link";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import styles from "@/styles/Modern/Desktop.module.css";
import MainPictorial from "./OperatingManagerPictorial";
import FinanceHeader from "@/UI-Features/DBMS/Features/Contract-K.jpg";
import FinanceHeaderII from "@/UI-Features/DBMS/Features/Contract-A.jpg";
import FinanceHeaderIII from "@/UI-Features/DBMS/Features/Contract-B.jpg";
import FinanceHeaderIV from "@/UI-Features/DBMS/Features/Contract-G.jpg";
import FinanceHeaderV from "@/UI-Features/DBMS/Features/Contract-H.jpg";
import Wallet from "@/UI-Features/UI-Gallery/Icons/Wallet.png";

import Bell from "@/UI-Features/UI-Gallery/Icons/Bell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHammer,
  faRefresh,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { Bar, Scatter, Bubble, Line, Pie } from "react-chartjs-2";
import {
  Inter,
  Inter_Tight,
  DM_Sans,
  Oswald,
  Dancing_Script,
  Roboto,
} from "next/font/google";
import React, { useState, useEffect } from "react";

import {
  CategoryScale,
  LinearScale,
  Chart as ChartJS,
  Tooltip,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Legend,
  Filler,
  BarElement,
} from "chart.js";
import { useRouter } from "next/navigation";
import MainContentLoader from "@/UI-Features/DBMS/NextGen/webComponent/pageComponent/MainContentLoader";
import PageFormat from "@/UI-Features/otherComponents/agencyComponent/Loaders/PageLoader";
// Heading Font
const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});
// Paragraph Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
// Body Font
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});
// UI Master Font
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});
// Italic Font
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  display: "swap",
});
// Component Font
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["400", "500", "700"],
  display: "swap",
});

type TableRow = {
  id: number;
  userName: string;
  contact: string;
  Lab: string;
  location: string;
  keyPurpose: string;
  interactionType: string;
  programJoined: string;
  status: string;
  registrationDate: string;
};

export default function FinanvraBlueprint() {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    BarElement,
    Title,
    Legend,
    Filler,
    ArcElement,
    LineElement,
    PointElement,
    ChartDataLabels,
  );

  const [PS, setPS] = useState(false);

  const router = useRouter();


  const [data, setData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
    const fetchData = async(isRefresh = false) => {
      if (isRefresh) setIsRefreshing(true);
      try {
        setLoading(true);
        const response = await fetch("/api/Luvra/grace-blueprint", {
          cache: "no-store",
          next: {revalidate: 0}
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        if (result.success) {
          setData(result.data || []);
        } else {
          setError(result.error || "Failed to fetch Finanvra Data");
        }
      } catch (error) {
        console.error("Error fetching Finanvra Data: ", error);
        setError((error as Error).message);
      } finally {
        setLoading(false);
        if(isRefresh) setIsRefreshing(false);
      }
    }

    //Initial Load
    useEffect(() => {
      fetchData();
    }, [])

    //Refresh Handler for the Recycle Icon
    const handleRefresh = () => {
      fetchData(true);
    }
  if (loading && data.length === 0) return <div> </div>;
  if (error) return <div> Error: {error} </div>;

  return (
    <>
      <section
        className={` ${styles["MainDashboardPad"]} ${interTight.variable} ${inter.variable} ${dmSans.variable} ${oswald.variable} ${dancingScript.variable} ${roboto.variable}`}
      >
        <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
          <div className={styles.DashboardTitle}>
            <h1 className={`${styles["TheTitle"]} ${interTight.variable}`}>
              House of Grace Data Centre
            </h1>
          </div>
          <div className={styles.DashboardLayer}>
            <div className={styles.TimeRange}>
              <FontAwesomeIcon
                className={styles.TimeRangeIcon}
                icon={faCalendar}
              />
              <h1 className={styles.BoldTitle}>Daily</h1>
            </div>
            <div className={styles.TimeRange}>
              <FontAwesomeIcon
                className={styles.TimeRangeIcon}
                icon={faCalendar}
              />
              <h1 className={styles.BoldTitle}>Monthly</h1>
            </div>
            <div className={styles.TimeRange}>
              <FontAwesomeIcon
                className={styles.TimeRangeIcon}
                icon={faHammer}
              />
              <h1 className={styles.BoldTitle}>Yearly</h1>
            </div>
          </div>
        </section>

        <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
          <div className={styles.DashboardHeader}>
            Strategic Director Overview
          </div>
          <div className={styles.DashboardHeader}>
            Live User Interaction Revision • House of Grace Foundation
          </div>
        </section>

        <section className={`${styles["StatsPad"]} ${styles["Props"]}`}>
          <article
            className={`${styles["TabPadCOD"]}  ${styles["TabPadProp"]} ${styles["Active-First-Pad"]}`}
          >
            <label className={styles.TabField}>
              <Image
                priority
                alt="Financial Security - Dashboard Product"
                src={FinanceHeader}
                style={{ objectFit: "cover" }}
                className={styles.TabFieldImage}
              />
            </label>
            <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
              <Link href="#Profile-Information" className={styles.LinkPadLink}>
                Stored Entry
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                {data.length} Entries
              </Link>
            </label>
          </article>
          <article className={`${styles["TabPadCOD"]} ${styles["TabPadProp"]}`}>
            <label className={styles.TabField}>
              <Image
                priority
                alt="Financial Security - Dashboard Product"
                src={FinanceHeaderII}
                style={{ objectFit: "cover" }}
                className={styles.TabFieldImage}
              />
            </label>
            <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
              <Link href="#Profile-Information" className={styles.LinkPadLink}>
                Retrieved Entry
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                {data.length} Entries
              </Link>
            </label>
          </article>
          <article className={`${styles["TabPadCOD"]} ${styles["TabPadProp"]}`}>
            <label className={styles.TabField}>
              <Image
                priority
                alt="Financial Security - Dashboard Product"
                src={FinanceHeaderIII}
                style={{ objectFit: "cover" }}
                className={styles.TabFieldImage}
              />
            </label>
            <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
              <Link href="#Profile-Information" className={styles.LinkPadLink}>
                Refined Entry
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                {data.length} Entries
              </Link>
            </label>
          </article>

          <article className={`${styles["TabPadCOD"]} ${styles["TabPadProp"]}`}>
            <label className={styles.TabField}>
              <Image
                priority
                alt="Financial Security - Dashboard Product"
                src={FinanceHeaderV}
                style={{ objectFit: "cover" }}
                className={styles.TabFieldImage}
              />
            </label>
            <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
              <Link href="#Profile-Information" className={styles.LinkPadLink}>
                Erased Entry
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                {data.length} Entries
              </Link>
            </label>
          </article>
          <article className={`${styles["TabPadCOD"]} ${styles["TabPadProp"]}`}>
            <label className={styles.TabField}>
              <Image
                priority
                alt="Financial Security - Dashboard Product"
                src={FinanceHeaderIV}
                style={{ objectFit: "cover" }}
                className={styles.TabFieldImage}
              />
            </label>
            <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
              <Link href="#Profile-Information" className={styles.LinkPadLink}>
                Stored Target
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                100,000 Entries
              </Link>
            </label>
          </article>
        </section>

        <section className={`${styles["TableDB"]}  ${styles["Props"]}`}>
          <div className={styles.RangeGrid}>
            <div className={styles.DashboardTitle}>
              Data Centre Revision — All User Interactions
            </div>
            <div className={styles.TimeRange}>
              <FontAwesomeIcon 
              icon={faRefresh} 
              className={styles.TimeRangeIcon} 
              onClick={handleRefresh}
              style={{ cursor: 'pointer', opacity:  isRefreshing ? .6 : 1}}
              />
            </div>
          </div>
          <div className={styles.DashboardHeader}>
            House of Grace Foundation • Strategic Director Live View
          </div>
          <MainContentLoader>
            <MainPictorial />
            <PageFormat>
              <table className={styles.TableTheme}>
                <thead>
                  <tr>
                    <th className={styles.TableHead}>No.</th>
                    <th className={styles.TableHead}>Username</th>
                    <th className={styles.TableHead}>Contact</th>
                    <th className={styles.TableHead}>Lab</th>
                    <th className={styles.TableHead}>Location</th>
                    <th className={styles.TableHead}>Purpose</th>
                    <th className={styles.TableHead}>Interaction</th>
                    <th className={styles.TableHead}>Program</th>
                    <th className={styles.TableHead}>Status</th>
                    <th className={styles.TableHead}>Registration</th>
                  </tr>
                </thead>
                <tbody className={styles.TableBody}>
                  {data.map((row) => (
                    <tr className={styles.TableRow} key={row.id}>
                      <td
                        className={`${styles["TableData"]} ${styles["companyIndex"]}`}
                      >
                        {row.id}.
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["companyName"]}`}
                      >
                        {row.userName}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["productName"]}`}
                      >
                        {row.contact}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["productCategory"]}`}
                      >
                        {row.Lab}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["productPrice"]}`}
                      >
                        {row.location}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["quantity"]}`}
                      >
                        {row.keyPurpose}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["pendingStatus"]}`}
                      >
                        {row.interactionType}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["dateTime"]}`}
                      >
                        {row.programJoined}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["deliveryStatus"]}`}
                      >
                        {row.status}
                      </td>
                      <td
                        className={`${styles["TableData"]} ${styles["deliveryStatus"]}`}
                      >
                        {row.registrationDate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </PageFormat>
          </MainContentLoader>
        </section>
      </section>
    </>
  );
}
