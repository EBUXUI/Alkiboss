'use client';
import styles from "@/styles/Modern/Desktop.module.css";
import SideBarRousel from "@/UI-Features/webComponent/dashboardComponent/sidebarComponent/LuvUISidebar";
import MainContentLoader from "@/UI-Features/webComponent/pageComponent/MainContentLoader";
import SlidingRousel from "@/UI-Features/webComponent/dashboardComponent/rouselComponent/dashboardSlides";
import FinanvraBlueprint from "@/UI-Features/webComponent/dashboardComponent/LuvUIComponent/FinanvraBlueprint";
import HouseofGraceBlueprint from "@/UI-Features/webComponent/dashboardComponent/LuvUIComponent/HouseofGraceBlueprint";
import DatabaseEntry from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseEntries";
import TableStats from "@/UI-Features/webComponent/dashboardComponent/tableComponent/TableStats";
import DefineBlueprint from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseForms/DefineBlueprint";
import StoreEntry from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseForms/StoreEntry";
import RetreiveEntry from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseForms/RetrieveEntry";
import RefineEntry from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseForms/RefineEntry";
import EraseEntry from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseForms/EraseEntry";
import NavigationRousel from "@/UI-Features/webComponent/dashboardComponent/bannerComponent/DashboardBanner";
import { useState, useEffect } from "react";
import DataEntries from "../entriesComponent/DataEntries";
import ImportData from "../entriesComponent/DataEntries/ImportData";
import ExportData from "../entriesComponent/DataEntries/ExportData";

export default function LuvUIMigration() {
  const [activePage, setActivePage] = useState<
    | "Blueprint"
    | "Blueprint/Define"
    | "Entries"
    | "Entries/Store"
    | "Entries/Retrieve"
    | "Entries/Refine"
    | "Entries/Erase"
    | "Data"
    | "Data/Import"
    | "Data/Export"
    | "HouseofGrace"
    | "Finanvra"
  >("Blueprint");

  return (
    <>
      <section className={styles.SideBarcontent}>
        <div className={styles.SideBarhero}>
          <SideBarRousel setActivePage={setActivePage} />
          <MainContentLoader>
            {activePage === "Blueprint" && (
              <section className={styles.FinanvraBlueprint}>
                <FinanvraBlueprint />
                <NavigationRousel />
                <SlidingRousel />
              </section>
            )}
            {activePage === "Blueprint/Define" && (
              <section className={styles.FinanvraBlueprint}>
                <DefineBlueprint />
              </section>
            )}
            {activePage === "HouseofGrace" && (
              <section className={styles.FinanvraBlueprint}>
                <HouseofGraceBlueprint />
              </section>
            )}
            {activePage === "Finanvra" && (
              <section className={styles.FinanvraBlueprint}>
                <FinanvraBlueprint />
              </section>
            )}
            {activePage === "Entries" && (
              <section className={styles.FinanvraBlueprint}>
                <DatabaseEntry />
              </section>
            )}
            {activePage === "Entries/Store" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <StoreEntry />
                </section>
              </>
            )}
            {activePage === "Entries/Retrieve" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <RetreiveEntry />
                </section>
              </>
            )}
            {activePage === "Entries/Refine" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <RefineEntry />
                </section>
              </>
            )}
            {activePage === "Entries/Erase" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <EraseEntry />
                </section>
              </>
            )}
            {activePage === "Data" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <DataEntries />
                </section>
              </>
            )}
            {activePage === "Data/Import" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <ImportData />
                </section>
              </>
            )}
            {activePage === "Data/Export" && (
              <>
                <section className={styles.FinanvraBlueprint}>
                  <ExportData />
                </section>
              </>
            )}
          </MainContentLoader>
        </div>
      </section>
    </>
  );
}
