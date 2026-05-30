'use client';

import styles from "@/styles/White/Home.module.css";
import React from "react";
import ViewBlueprintTitle from "./BlueprintTitle";
import { useState } from "react";
import ViewBlueprintBtn from "./ViewBlueprint";
import BlueprintBar from "./BlueprintBar";
import GeneratedTitle from "./GeneratedTitle";
import DataCards from "./DataCards/DataCardsServer";
import FinanvraBlueprint from "../../../LuvUIComponent/FinanvraBlueprint";
import HouseofGraceBlueprint from "../../../LuvUIComponent/HouseofGraceBlueprint";
import ViewDefBlueprintBtn from "./ViewDefBlueprint";
import { ToastContainer } from 'react-toastify';
import { useRouter } from "next/navigation";



interface Column {
  name: string;
  type: string;
  nullable: boolean;
}

export default function SoftwareDevelopmentHero() {
  const [activePage, setActivePage] = useState<"" | "HouseofGrace" | "Finanvra">("");
  const [activeFunction, setActiveFunction] = useState<"" | "UseEntries" | "UseClauses">("");
  const [dbName, setDbName] = useState<string>('');
  const [columns, setColumns] = useState<Column[]>([]);
  
  const Router = useRouter();

  

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className={styles.MainHeroModule}>
        <article className={styles.MainHeroLayedOut}>
          {activePage === "Finanvra" && <FinanvraBlueprint />}
          {activePage === "HouseofGrace" && <HouseofGraceBlueprint />}
          {activeFunction === "UseEntries" && <></>}
          {activeFunction === "UseClauses" && <></>}
        </article>
      </div>
      <div className={styles.MainHeroModule}>
        <article className={styles.MainHeroLayedOut}>
          <ViewBlueprintTitle />
          <BlueprintBar setActivePage={setActiveFunction} onDbNameChange={setDbName} onColumnsChange={setColumns} />
          
        </article>
        <GeneratedTitle />
        <DataCards />
        <div className={styles.BlueprintGrid}>
          <ViewDefBlueprintBtn setActivePage={setActivePage} />
          <ViewBlueprintBtn setActivePage={setActivePage} />
        </div>
      </div>
    </>
  );
}