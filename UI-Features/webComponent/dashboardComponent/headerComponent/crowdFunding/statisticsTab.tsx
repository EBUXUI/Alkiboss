import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Desktop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHammer } from "@fortawesome/free-solid-svg-icons";
import FinanceHeader from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExamination.jpeg';
import FinanceHeaderII from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationI.jpeg';
import FinanceHeaderIII from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationII.jpeg';
import FinanceHeaderIV from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationIII.jpeg';
import FinanceHeaderV from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationIV.jpeg';
import { Bar, Line } from "react-chartjs-2";
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

export default function StatisticsTab() {
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
    PointElement
  );

  const dataII = [
    { Month: "Jan", Count: 290 },
    { Month: "Feb", Count: 255 },
    { Month: "Mar", Count: 260 },
    { Month: "Apr", Count: 190 },
    { Month: "May", Count: 155 },
    { Month: "Jun", Count: 160 },
    { Month: "Jul", Count: 260 },
    { Month: "Aug", Count: 285 },
    { Month: "Sep", Count: 165 },
    { Month: "Oct", Count: 340 },
    { Month: "Nov", Count: 385 },
    { Month: "Dec", Count: 420 },
  ];

  const data = [
    { year: 2023, count: 10 },
    { year: 2024, count: 120 },
    { year: 2025, count: 30 },
    { year: 2026, count: 140 },
    { year: 2027, count: 110 },
    { year: 2028, count: 260 },
  ];

  return (
    <>
      <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
        <div className={styles.DashboardTitle}>
          <h1 className={styles.TheTitle}>Financial Dashboard</h1>
        </div>
        <div className={styles.DashboardLayer}>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon className={styles.TimeRangeIcon} icon={faCalendar} />
            <h1 className={styles.BoldTitle}>Daily</h1>
          </div>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon className={styles.TimeRangeIcon} icon={faCalendar} />
            <h1 className={styles.BoldTitle}>Monthly</h1>
          </div>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon className={styles.TimeRangeIcon} icon={faHammer} />
            <h1 className={styles.BoldTitle}>Hammer</h1>
          </div>
        </div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>Overview</div>
        <div className={styles.DashboardHeader}>Feb 28, 2025</div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>
          <Link href="" className={`${styles["DashboardTab"]} ${styles["ActiveTab"]}`}>
            Overview
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href="" className={styles.DashboardTab}>
            Retention
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href="" className={styles.DashboardTab}>
            Efficiency
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href="" className={styles.DashboardTab}>
            Impact
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href="" className={styles.DashboardTab}>
            Sponsorship
          </Link>
        </div>
      </section>
      <section className={`${styles["StatsPad"]} ${styles["Props"]}`}>
        <article className={`${styles["TabPadCOD"]} ${styles["TabPadProp"]} ${styles["Active-First-Pad"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt="Financial Security - Dashboard Product"
              src={FinanceHeader}
              style={{ objectFit: "cover" }}
              quality={100}
              className={styles.TabFieldImage}
            />
          </label>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              Total Funds Raised
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
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
              quality={100}
              className={styles.TabFieldImage}
            />
          </label>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              Number of Donors
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
              0 Donors
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
              quality={100}
              className={styles.TabFieldImage}
            />
          </label>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              Fundraising ROI
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
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
              quality={100}
              className={styles.TabFieldImage}
            />
          </label>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              Total Beneficiaries
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
              0 Patients
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
              quality={100}
              className={styles.TabFieldImage}
            />
          </label>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              Donation Growth
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
              $0.00
            </Link>
          </label>
        </article>
      </section>
    </>
  );
}
