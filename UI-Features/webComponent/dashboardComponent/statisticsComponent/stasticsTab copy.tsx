import Link from "next/link";
import styles from "@/styles/Desktop.module.css";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    PointElement
  );

  const dataII = [
    {
      Month: "Jan",
      Count: 290,
    },
    {
      Month: "Feb",
      Count: 255,
    },
    {
      Month: "Mar",
      Count: 260,
    },
    {
      Month: "Apr",
      Count: 190,
    },
    {
      Month: "May",
      Count: 155,
    },
    {
      Month: "Jun",
      Count: 160,
    },
    {
      Month: "Jul",
      Count: 260,
    },
    {
      Month: "Aug",
      Count: 285,
    },
    {
      Month: "Sep",
      Count: 165,
    },
    {
      Month: "Oct",
      Count: 340,
    },
    {
      Month: "Nov",
      Count: 385,
    },
    {
      Month: "Dec",
      Count: 420,
    },
  ];

  const data = [
    {
      year: 2023,
      count: 10,
    },
    {
      year: 2024,
      count: 120,
    },
    {
      year: 2025,
      count: 30,
    },
    {
      year: 2026,
      count: 140,
    },
    {
      year: 2027,
      count: 110,
    },
    {
      year: 2028,
      count: 260,
    },
  ];
  return (
    <>
      <section className={`${styles["TabPad"]} ${styles["Props"]}`}>
        <article
          className={`${styles["TabPadCOD"]}  ${styles["TabPadProp"]} ${styles["Active-First-Pad"]}`}
        >
          <label className={styles.TabField}>
            <FontAwesomeIcon
              className={styles.TabFieldIcon}
              icon={solid("drumstick-bite")}
            />
          </label>
          <label className={`${styles["First-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              Delicacies
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
              200
            </Link>
          </label>
        </article>
        <article className={`${styles["TabPadCOD"]} ${styles["TabPadProp"]}`}>
          <label className={styles.TabField}>
            <FontAwesomeIcon
              className={styles.TabFieldIcon}
              icon={solid("martini-glass-citrus")}
            />
          </label>
          <label className={`${styles["Second-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Ammendments" className={styles.LinkPadLink}>
              Modifications
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLinkII}>
              860,000
            </Link>
          </label>
        </article>
        <article className={`${styles["TabPadCOD"]} ${styles["TabPad-Prop"]}`}>
          <label className={styles.TabField}>
            <FontAwesomeIcon
              className={styles.TabFieldIcon}
              icon={solid("apple-whole")}
            />
          </label>
          <label className={`${styles["Third-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Enterprise" className={styles.LinkPadLink}>
              Updates
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              20,000
            </Link>
          </label>
        </article>
        <article className={`${styles["TabPadCOD"]} ${styles["TabPad-Prop"]}`}>
          <label className={styles.TabField}>
            <FontAwesomeIcon
              className={styles.TabFieldIcon}
              icon={solid("champagne-glasses")}
            />
          </label>
          <label className={`${styles["Fourth-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Modifications" className={styles.LinkPadLink}>
              Reviews
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              80,000
            </Link>
          </label>
        </article>
        <article className={`${styles["TabPadCOD"]} ${styles["TabPad-Prop"]}`}>
          <label className={styles.TabField}>
            <FontAwesomeIcon
              className={styles.TabFieldIcon}
              icon={solid("wheat-awn")}
            />
          </label>
          <label className={`${styles["Fifth-Pad"]} ${styles["Link-Pad"]}`}>
            <Link href="#Sessions" className={styles.LinkPadLink}>
              Notifications
            </Link>
            <Link href="#Profile-Information" className={styles.LinkPadLink}>
              8
            </Link>
          </label>
        </article>
      </section>
      <section className={`${styles["StatsTabPad"]} ${styles["Props"]}`}>
        <div className={`${styles["StatsTabPadCOD"]} ${styles["TabPadProp"]}`}>
          <article className={styles.StatsTabField}>
            <FontAwesomeIcon
              className={styles.StatsTabFieldIcon}
              icon={solid("martini-glass-citrus")}
            />
          </article>
          <article
            className={`${styles["Second-Pad"]} ${styles["StatsLinkPad"]}`}
          >
            <Link href="/Content/Example" className={styles.StatsLinkPadLink}>
              Graphical Competition
            </Link>
            <label className={styles.StatsLinkPadLink}>
              <Bar
                data={{
                  labels: data.map((row) => row.year),
                  datasets: [
                    {
                      label: "Champion",
                      data: data.map((row) => row.count),
                      backgroundColor: "Blue",
                    },
                  ],
                }}
              />
            </label>
          </article>
        </div>
        <div className={`${styles["StatsTabPadCOD"]} ${styles["TabPad-Prop"]}`}>
          <article className={styles.StatsTabField}>
            <FontAwesomeIcon
              className={styles.StatsTabFieldIcon}
              icon={solid("apple-whole")}
            />
          </article>
          <article
            className={`${styles["Third-Pad"]} ${styles["StatsLinkPad"]}`}
          >
            <Link href="#Enterprise" className={styles.StatsLinkPadLink}>
              Graphical Ranking
            </Link>
            <label className={styles.StatsLinkPadLink}>
              <Bar
                data={{
                  labels: data.map((row) => row.year),
                  datasets: [
                    {
                      label: "Champion",
                      data: data.map((row) => row.count),
                      backgroundColor: "Blue",
                    },
                  ],
                }}
              />
            </label>
          </article>
        </div>
        <div className={`${styles["StatsTabPadCOD"]} ${styles["TabPad-Prop"]}`}>
          <article className={styles.StatsTabField}>
            <FontAwesomeIcon
              className={styles.StatsTabFieldIcon}
              icon={solid("champagne-glasses")}
            />
          </article>
          <article
            className={`${styles["Fourth-Pad"]} ${styles["StatsLinkPad"]}`}
          >
            <Link href="#Modifications" className={styles.StatsLinkPadLink}>
              Graphical Summary
            </Link>
            <label className={styles.StatsLinkPadLink}>
              <Bar
                data={{
                  labels: data.map((row) => row.year),
                  datasets: [
                    {
                      label: "Champion",
                      data: data.map((row) => row.count),
                      backgroundColor: "Blue",
                    },
                  ],
                }}
              />
            </label>
          </article>
        </div>
        <div
          className={`${styles["StatsTabPadCOD"]} ${styles["TabPad-Prop"]}`}
        >
          <article className={styles.StatsTabField}>
            <FontAwesomeIcon
              className={styles.StatsTabFieldIcon}
              icon={solid("wheat-awn")}
            />
          </article>
          <article className={`${styles["Fifth-Pad"]} ${styles["StatsLinkPad"]}`}>
            <Link href="#Sessions" className={styles.StatsLinkPadLink}>
              Ranking Artwork
            </Link>
            <label className={styles.StatsLinkPadLink}>
                  <Bar 
                   data = {{
                    labels: data.map(row => row.year),
                    datasets:[
                      {
                        label: 'Champion',
                        data: data.map(row => row.count),
                        backgroundColor: "Blue"
                      }
                    ]
                   }}
                   />
                   
                </label>
          </article>
        </div>
      </section>
    </>
  );
}
