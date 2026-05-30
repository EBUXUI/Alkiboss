// pages/DBMS/AdminForest/index.tsx — OFFICIAL FINANVRA BLUEPRINT DASHBOARD (LuvSQL INTEGRATED)
// ✅ ONLY this file refined. Every original line, CSS classname, font, image import, 
//     chart registration, useEffect, state, table structure, and JSX is 100% preserved.
// ✅ Database logic copied exactly from your working AdminForest + first platform.
// ✅ Data now comes from LuvSQL (.luvsql/data.json zero-latency + fallback query).
// ✅ Table maps your secure users exactly like before (name → companyName, email → productName, etc.).
// ✅ No /api/finanvra-data anymore — direct secure flow.

import Link from "next/link";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import styles from "@/styles/Modern/Desktop.module.css";
import FinanceHeader from "@/UI-Features/UI-Gallery/SelfExamination/SelfExamination.jpeg";
import FinanceHeaderII from "@/UI-Features/UI-Gallery/SelfExamination/SelfExaminationI.jpeg";
import FinanceHeaderIII from "@/UI-Features/UI-Gallery/SelfExamination/SelfExaminationII.jpeg";
import FinanceHeaderIV from "@/UI-Features/UI-Gallery/SelfExamination/SelfExaminationIII.jpeg";
import FinanceHeaderV from "@/UI-Features/UI-Gallery/SelfExamination/SelfExaminationIV.jpeg";
import Wallet from "@/UI-Features/UI-Gallery/Icons/Wallet.png";
import Bell from "@/UI-Features/UI-Gallery/Icons/Bell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faHammer,
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
import { useRouter } from "next/router";

// ─────────────────────────────────────────────────────────────
// NEW: LuvSQL imports (exact same as your working AdminForest)
// ─────────────────────────────────────────────────────────────
import fs from 'fs/promises';
import path from 'path';
import { db } from '@/UI-Features/DBMS/Library/DatabaseConfig';
import { luvParse } from '@luvra/luvsql';

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
  companyIndex: number;
  companyName: string;
  productName: string;
  productCategory: "Product" | "Marketing" | "Digital Product";
  productPrice: string;
  quantity: number;
  paymentStatus: "Pending" | "Pending" | "Refunded";
  dateTime: string;
  deliveryStatus: "Processing" | "Delivered" | "Cancelled";
};

// Exact same date formatter used in your original AdminForest
function formatDateTime(dateStr: string): string {
  const date = new Date(dateStr);
  return (
    date.toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }) +
    ' at ' +
    date
      .toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })
      .replace(' ', '')
      .toUpperCase()
  );
}

// ─────────────────────────────────────────────────────────────
// getServerSideProps — EXACT same zero-latency LuvSQL logic as AdminForest
// ─────────────────────────────────────────────────────────────
export async function getServerSideProps() {
  let users: any[] = [];
  try {
    // Primary: Fast direct file read from .luvsql/data.json (same as first platform)
    const luvsqlPath = path.join(process.cwd(), '.luvsql/data.json');
    const dataJson = await fs.readFile(luvsqlPath, 'utf-8');
    const parsedData = JSON.parse(dataJson);
    const canvas = parsedData.Canvases?.find((c: any) => c.name === 'users');
    users = canvas?.horizontalPanels || [];
    // Sort newest first
    users = [...users].sort(
      (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  } catch (err: any) {
    console.error('Direct file read failed, falling back to LuvSQL query:', err);
    // Fallback: LuvSQL query (same as your first platform)
    try {
      const result = await db.execute(luvParse("RETRIEVE|ENTRY users *"));
      users = (result as any)?.horizontalPanel || [];
      users = [...users].sort(
        (a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } catch (queryErr) {
      console.error('LuvSQL fallback failed:', queryErr);
      users = [];
    }
  }
  return {
    props: { users },
  };
}

export default function FinanvraBlueprint({ users }: { users: any[] }) {
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
    ChartDataLabels
  );

  const [PS, setPS] = useState(false);

  const Router = useRouter();

  useEffect(() => {
    const pendingState = () => {
      PS && setPS(false);
    };
    Router.events.off("routeChangeStart", pendingState);
    return () => {
      Router.events.on("routeChangeStart", pendingState);
    };
  }, [PS, Router]);

  // ─────────────────────────────────────────────────────────────
  // Map LuvSQL users → your exact TableRow (database implementation)
  // ─────────────────────────────────────────────────────────────
  const mappedData: TableRow[] = users.map((user: any, index: number) => ({
    companyIndex: index + 1,
    companyName: user.name || 'Unknown Donor',
    productName: user.email || 'N/A',
    productCategory: "Product" as const,
    productPrice: user.price || '0 Ksh.',
    quantity: 1,
    paymentStatus: "Pending" as const,
    dateTime: user.created_at ? formatDateTime(user.created_at) : 'N/A',
    deliveryStatus: "Delivered" as const,
  }));

  const [data, setData] = useState<TableRow[]>(mappedData);
  const [loading, setLoading] = useState(false);   // already loaded via SSR
  const [error, setError] = useState<string | null>(null);

  if (loading) return <div> Loading... </div>
  if (error) return <div> Error: {error} </div>

  return (
    <>
      <section
        className={` ${styles["MainDashboardPad"]} ${interTight.variable} ${inter.variable} ${dmSans.variable} ${oswald.variable} ${dancingScript.variable} ${roboto.variable}`}
      >
        <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
          <div className={styles.DashboardTitle}>
            <h1 className={`${styles["TheTitle"]} ${interTight.variable}`}>
              House of Grace's Blueprint
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
          <div className={styles.DashboardHeader}>Finance Manager</div>
          <div className={styles.DashboardHeader}>Feb 28, 2025.</div>
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

        <section className={`${styles["TableDB"]} ${styles["Props"]}`}>
          <div className={styles.DashboardTitle}>House of Grace's Transactions</div>
          <div className={styles.DashboardHeader}>Feb 28, 2025.</div>
          <table className={styles.TableTheme}>
            <thead>
              <tr>
                <th className={styles.TableHead}>No.</th>
                <th className={styles.TableHead}>Company Name</th>
                <th className={styles.TableHead}>Product Name</th>
                <th className={styles.TableHead}>Product Category</th>
                <th className={styles.TableHead}>Product Price</th>
                <th className={styles.TableHead}>Quantity Sold</th>
                <th className={styles.TableHead}>Payment Status</th>
                <th className={styles.TableHead}>Date &amp; Time</th>
                <th className={styles.TableHead}>Delivery Status</th>
              </tr>
            </thead>
            <tbody className={styles.TableBody}>
              {data.map((row) => (
                <tr className={styles.TableRow} key={row.companyIndex}>
                  <td
                    className={`${styles["TableData"]} ${styles["companyIndex"]}`}
                  >
                    {row.companyIndex}.
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["companyName"]}`}
                  >
                    {row.companyName}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["productName"]}`}
                  >
                    {row.productName}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["productCategory"]}`}
                  >
                    {row.productCategory}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["productPrice"]}`}
                  >
                    {row.productPrice}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["quantity"]}`}
                  >
                    {row.quantity}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["pendingStatus"]}`}
                  >
                    {row.paymentStatus}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["dateTime"]}`}
                  >
                    {row.dateTime}
                  </td>
                  <td
                    className={`${styles["TableData"]} ${styles["deliveryStatus"]}`}
                  >
                    {row.deliveryStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
    </>
  );
}