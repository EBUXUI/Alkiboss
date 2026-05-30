import Link from "next/link";
import ChartDataLabels from "chartjs-plugin-datalabels";
import Image from "next/image";
import styles from "@/styles/Desktop.module.css";
import FinanceHeader from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExamination.jpeg';
import FinanceHeaderII from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationI.jpeg';
import FinanceHeaderIII from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationII.jpeg';
import FinanceHeaderIV from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationIII.jpeg';
import FinanceHeaderV from '@/UI-Features/UI-Gallery/CancerDetection/SelfExamination/SelfExaminationIV.jpeg';
import Wallet from '@/UI-Features/UI-Gallery/Icons/Wallet.png';
import Bell from '@/UI-Features/UI-Gallery/Icons/Bell.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHammer, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Bar, Scatter, Bubble, Line, Pie } from "react-chartjs-2";
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
export default function statisticsTab() {
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

  const financialData = [
    { month: "January", prevYear: 2024, countPrev: 100000, currentYear: 2025, countCurrent: 150000 },
    { month: "February", prevYear: 2024, countPrev: 500000, currentYear: 2025, countCurrent: 700000 },
    { month: "March", prevYear: 2024, countPrev: 800000, currentYear: 2025, countCurrent: 950000 },
    { month: "April", prevYear: 2024, countPrev: 100000, currentYear: 2025, countCurrent: 120000 },
    { month: "May", prevYear: 2024, countPrev: 460000, currentYear: 2025, countCurrent: 180000 },
    { month: "June", prevYear: 2024, countPrev: 600000, currentYear: 2025, countCurrent: 780000 },
    { month: "July", prevYear: 2024, countPrev: 250000, currentYear: 2025, countCurrent: 300000 },
    { month: "August", prevYear: 2024, countPrev: 280000, currentYear: 2025, countCurrent: 350000 },
    { month: "September", prevYear: 2024, countPrev: 300000, currentYear: 2025, countCurrent: 400000 },
    { month: "October", prevYear: 2024, countPrev: 500000, currentYear: 2025, countCurrent: 600000 },
    { month: "November", prevYear: 2024, countPrev: 900000, currentYear: 2025, countCurrent: 950000 },
    { month: "December", prevYear: 2024, countPrev: 1000000, currentYear: 2025, countCurrent: 1050000 },
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
        <div className={styles.DashboardHeader}>
          Overview
        </div>
        <div className={styles.DashboardHeader}>
          Feb 28, 2025.
        </div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>
          <Link href='' className={`${styles['DashboardTab']} ${styles['ActiveTab']}`}>
            Overview
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href='' className={styles.DashboardTab}>
            Retention
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href='' className={styles.DashboardTab}>
            Efficiency
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href='' className={styles.DashboardTab}>
            Impact
          </Link>
        </div>
        <div className={styles.DashboardHeader}>
          <Link href='' className={styles.DashboardTab}>
            Sponsorship
          </Link>
        </div>
      </section>
      <section className={`${styles["StatsPad"]} ${styles["Props"]}`}>
        <article
          className={`${styles["TabPadCOD"]}  ${styles["TabPadProp"]} ${styles["Active-First-Pad"]}`}
        >
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={FinanceHeader}
              style={{ objectFit: 'cover' }}
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
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderII}
              style={{ objectFit: 'cover' }}
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
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderIII}
              style={{ objectFit: 'cover' }}
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
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderIV}
              style={{ objectFit: 'cover' }}
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
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderV}
              style={{ objectFit: 'cover' }}
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
      <section className={`${styles["StatsPadII"]} ${styles["Props"]}`}>
        <article className={`${styles["wallPadCODI"]} ${styles["TabPadProp"]} ${styles["Active-First-Pad"]}`}>
          <label className={`${styles["First-Pad"]} ${styles["walletPad"]}`}>
            <Link href="#Profile-Information" className={styles.walletPadLink}>
              Wallet Balance
            </Link>
            <Link href="#Profile-Information" className={styles.TimeRangeLink}>
              <div className={styles.TimeRangeStats}>
                $0.00
              </div>
              <div className={styles.TimeRangeRatio}>
                <p className={styles.TimeRangeValue}>
                  0%
                </p>
                <FontAwesomeIcon className={styles.TimeRangeLinkIcon}icon={faArrowUp} />
              </div>
            </Link>
          </label>
        </article>
        <article className={`${styles["wallPadCODI"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={Wallet}
              style={{ objectFit: 'cover' }}
              quality={100}
              className={styles.TabFieldImageI}
            />
          </label>
        </article>
        <article className={`${styles["wallPadCODI"]} ${styles["TabPadProp"]}`}>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.wallPadLink}>
              Transfer Funds
            </Link>
          </label>
        </article>
        <article className={`${styles["wallPadCODI"]} ${styles["TabPadProp"]}`}>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.wallPadLink}>
              Withdraw Funds
            </Link>
          </label>
        </article>
        <article className={`${styles["wallPadCODI"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={Bell}
              style={{ objectFit: 'cover' }}
              quality={100}
              className={styles.TabFieldImageII}
            />
          </label>
        </article>
      </section>
      <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
        <div className={styles.DashboardTitle}>
          <h1 className={styles.TheTitle}>
            Total Funds Raised
          </h1>
        </div>
        <div className={styles.DashboardLayer}>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon
              className={styles.TimeRangeIcon}
              icon={faCalendar}
            />
            <h1 className={styles.BoldTitle}>
              Daily
            </h1>
          </div>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon
              className={styles.TimeRangeIcon}
              icon={faCalendar}
            />
            <h1 className={styles.BoldTitle}>
              Monthly
            </h1>
          </div>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon
              className={styles.TimeRangeIcon}
              icon={faHammer}
            />
            <h1 className={styles.BoldTitle}>
              Hammer
            </h1>
          </div>
        </div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardSubtitle}>
          <span className={styles.TheBlink}>
          . International Evaluation
          </span>
        </div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>
          Overview
        </div>
        <div className={styles.DashboardHeader}>
          Feb 28, 2025.
        </div>
      </section>
      <section className={`${styles["StatsTabPad"]} ${styles["Props"]}`}>
        <div className={`${styles["StatsTabPadCOD"]} ${styles["TabPadProp"]}`}>
          <article
            className={`${styles["Second-Pad"]} ${styles["StatsLinkPad"]}`}
          >
            <label className={styles.StatsLinkPadLink}>
              <Bar
                data={{
                  labels: financialData.map((row) => row.month),
                  datasets: [
                    {
                      label: `Donations in ${financialData[0].prevYear}`,
                      data: financialData.map((row) => row.countPrev),
                      backgroundColor: 'rgba(0, 123, 255, 0.89)',
                    },
                    {
                      label: `Donations in ${financialData[0].currentYear}`,
                      data: financialData.map((row) => row.countCurrent),
                      backgroundColor: 'rgb(7, 93, 184)',
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins:{
                    title:{
                      display:true,
                      text: `Total Donations (${financialData[0].prevYear} vs ${financialData[0].currentYear})`,
                    },
                    legend:{
                      display: true,
                      position: 'top'
                    },
                    datalabels: {
                      anchor: 'end',
                      align: 'top',
                      formatter: (value: number) =>{
                        if(value >= 1000000){
                          return  `Ksh. ${(value / 1000000).toFixed(1).replace('.0', '')}M`;
                        } else if (value >= 1000){
                          return `Ksh. ${(value / 1000).toFixed(0)}K`
                        } else{
                          return `Ksh. ${value}`
                        }
                      }, //`Ksh. ${value.toLocaleString()}`,
                      font: {
                        weight: 'bold',
                        size: 9,
                      },
                      color: '#333'
                    }
                    
                  },
                  scales: {
                    x: {
                      grid:{
                        display: false,
                      },
                    },
                    y: {
                      grid:{
                        display: false,
                      },
                      beginAtZero: true,
                      max: 1200000,
                      ticks: {
                        callback: (value) => `Ksh. ${value.toLocaleString()}`,
                      }
                    }
                  }
                }}
                
              />
            </label>
          </article>
        </div>

      </section>
      <section className={`${styles["FinancePadII"]} ${styles["Props"]}`}>
        <div className={styles.DashboardTitle}>
          <h1 className={styles.TheTitle}>
            Revenue Distribution
          </h1>
        </div>
        <div className={styles.DashboardLayer}>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon
              className={styles.TimeRangeIcon}
              icon={faCalendar}
            />
            <h1 className={styles.BoldTitle}>
              Daily
            </h1>
          </div>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon
              className={styles.TimeRangeIcon}
              icon={faCalendar}
            />
            <h1 className={styles.BoldTitle}>
              Monthly
            </h1>
          </div>
          <div className={styles.TimeRange}>
            <FontAwesomeIcon
              className={styles.TimeRangeIcon}
              icon={faHammer}
            />
            <h1 className={styles.BoldTitle}>
              Hammer
            </h1>
          </div>
        </div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>
          <span className={styles.TheBlink}>
          . International Evaluation
          </span>
        </div>
      </section>
      <section className={`${styles["FinancePad"]} ${styles["Props"]}`}>
        <div className={styles.DashboardHeader}>
          Overview
        </div>
        <div className={styles.DashboardHeader}>
          Feb 28, 2025.
        </div>
      </section>
      <section className={`${styles["RevenuePad"]} ${styles["Props"]}`}>
        <article className={`${styles["RevenuePadCOD"]}  ${styles["TabPadProp"]} ${styles["Active-First-Pad"]}`}
        >
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={FinanceHeader}
              style={{ objectFit: 'cover' }}
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
        <article className={`${styles["RevenuePadCOD"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderII}
              style={{ objectFit: 'cover' }}
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
        <article className={`${styles["RevenuePadCOD"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderIII}
              style={{ objectFit: 'cover' }}
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
        <article className={`${styles["RevenuePadCOD"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderIV}
              style={{ objectFit: 'cover' }}
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
        <article className={`${styles["RevenuePadCOD"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <Image
              priority
              alt='Financial Security - Dashboard Product'
              src={FinanceHeaderV}
              style={{ objectFit: 'cover' }}
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
