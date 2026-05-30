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
  productCategory: "Product" | "Marketing" | "Software";
  productPrice: string;
  quantity: number;
  paymentStatus: "Pending" | "Pending" | "Refunded";
  dateTime: string;
  deliveryStatus: "Processing" | "Processing" | "Cancelled";
};

const data: TableRow[] = [
  {
    companyIndex: 1,
    companyName: "Kam Phamarcy",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-09 | 14:30",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 2,
    companyName: "Bateleur Fashion",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-09 | 14:30",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 3,
    companyName: "Jo's Restaurant",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-09 | 14:30",
    deliveryStatus: "Processing",
  },

  {
    companyIndex: 4,
    companyName: "Quickwrite Soln",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-09 | 14:30",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 5,
    companyName: "Guarant EA",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-08 | 10:15",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 6,
    companyName: "Vitality Fitness",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  {
    companyIndex: 7,
    companyName: "House of Grace",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-09 | 14:30",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 8,
    companyName: "Young Dragons",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-08 | 10:15",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 9,
    companyName: "CLPD KeMU",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 10,
    companyName: "Masco 316",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-09 | 14:30",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 11,
    companyName: "Kozi Suites",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-08 | 10:15",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 12,
    companyName: "AfriKa",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 13,
    companyName: "Hospital Management",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  {
    companyIndex: 14,
    companyName: "Curaad Travel",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  {
    companyIndex: 15,
    companyName: "Annex",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  {
    companyIndex: 16,
    companyName: "Kaprew",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 17,
    companyName: "Pastor Stephen",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 18,
    companyName: "Tamara",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 19,
    companyName: "Adana",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 20,
    companyName: "Cyber Management",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  
  {
    companyIndex: 20,
    companyName: "Jorozz Paints",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  {
    companyIndex: 22,
    companyName: "Air Ticketing",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  
  {
    companyIndex: 23,
    companyName: "Fort Apache",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  
  {
    companyIndex: 24,
    companyName: "BF Suma",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },
  
  {
    companyIndex: 25,
    companyName: "Writers Mindset",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  
  {
    companyIndex: 26,
    companyName: "Inmed Pharmaceuticals",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  
  {
    companyIndex: 27,
    companyName: "Isecure",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  },

  {
    companyIndex: 28,
    companyName: "Kamanza Law Firm",
    productName: "Website Development",
    productCategory: "Software",
    productPrice: "Ksh. 20,000.00",
    quantity: 1,
    paymentStatus: "Pending",
    dateTime: "2025-09-07 | 09:00",
    deliveryStatus: "Processing",
  }
  

];

export default function TableStats() {
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

  const financialData = [
    {
      month: "January",
      prevYear: 2024,
      countPrev: 100000,
      currentYear: 2025,
      countCurrent: 150000,
    },
    {
      month: "February",
      prevYear: 2024,
      countPrev: 500000,
      currentYear: 2025,
      countCurrent: 700000,
    },
    {
      month: "March",
      prevYear: 2024,
      countPrev: 800000,
      currentYear: 2025,
      countCurrent: 950000,
    },
    {
      month: "April",
      prevYear: 2024,
      countPrev: 100000,
      currentYear: 2025,
      countCurrent: 2000000,
    },
    {
      month: "May",
      prevYear: 2024,
      countPrev: 460000,
      currentYear: 2025,
      countCurrent: 180000,
    },
    {
      month: "June",
      prevYear: 2024,
      countPrev: 600000,
      currentYear: 2025,
      countCurrent: 780000,
    },
    {
      month: "July",
      prevYear: 2024,
      countPrev: 250000,
      currentYear: 2025,
      countCurrent: 300000,
    },
    {
      month: "August",
      prevYear: 2024,
      countPrev: 280000,
      currentYear: 2025,
      countCurrent: 350000,
    },
    {
      month: "September",
      prevYear: 2024,
      countPrev: 300000,
      currentYear: 2025,
      countCurrent: 400000,
    },
    {
      month: "October",
      prevYear: 2024,
      countPrev: 500000,
      currentYear: 2025,
      countCurrent: 600000,
    },
    {
      month: "November",
      prevYear: 2024,
      countPrev: 900000,
      currentYear: 2025,
      countCurrent: 950000,
    },
    {
      month: "December",
      prevYear: 2024,
      countPrev: 1000000,
      currentYear: 2025,
      countCurrent: 1050000,
    },
  ];

  return (
    <>
      <section
        className={` ${styles["MainDashboardPad"]} ${interTight.variable} ${inter.variable} ${dmSans.variable} ${oswald.variable} ${dancingScript.variable} ${roboto.variable}`}
      >
        <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
          <div className={styles.DashboardTitle}>
            <h1 className={`${styles["TheTitle"]} ${interTight.variable}`}>
              Financial Data
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
                Neat's Net Worth
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                $0.00
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
                Companies using Neat
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                0 Companies
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
                Return on Investments
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                $0.00
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
                Monetary Target
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                $100,000.00
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
                Sales Growth
              </Link>
              <Link
                href="#Profile-Information"
                className={styles.LinkPadLinkII}
              >
                $0.00
              </Link>
            </label>
          </article>
        </section>

        <section className={`${styles["TableDB"]} ${styles["Props"]}`}>
          <div className={styles.DashboardTitle}>Finanvra Transactions</div>
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
