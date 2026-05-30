import Link from "next/link";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import styles from "@/styles/Modern/Desktop.module.css";
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


  const [data, setData] = useState<TableRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  async function fetchData(){
    try{
      const response = await fetch('/api/Luvra/grace-blueprint', {cache: 'no-store'});
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      if(result.success){
        setData(result.data);
      } else {
        setError(result.error ||'Failed to fetch Finanvra Data');
      }
    } catch(error){
      console.error('Error fetching Finanvra Data: ', error);
      setError((error as Error).message);
    } finally{
      setLoading(false);
    }
  }
  fetchData();
},[]);

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
