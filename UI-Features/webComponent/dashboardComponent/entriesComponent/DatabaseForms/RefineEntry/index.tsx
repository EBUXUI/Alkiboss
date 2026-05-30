import styles from "@/styles/White/Home.module.css";
import React from "react";
import RefineEntryTitle from "./RefineEntryTitle";
import UsingEntriesBtn from "./UsingEntriesBtn";
import { useState } from "react";
import UsingClausesBtn from "./UsingClausesBtn";
import DataEntrySearch from "./DataEntrySearch";
import RefineEntryBtn from "./RefineEntryBtn";
import DataClauseSearch from "./DataClauseSearch";

export default function SoftwareDevelopmentHero() {
  const [activePage, setActivePage] = useState<'UseClauses' | 'UseEntries'>('UseEntries')
  return (
    <>
      <div className={styles.MainHeroModule}>
        <article className={styles.MainHeroLayedOut}>
          <RefineEntryTitle/>
        </article>
        <div className={styles.EntryOptions}>
          <UsingEntriesBtn setActivePage={setActivePage}/>
          <UsingClausesBtn setActivePage={setActivePage}/>
        </div>
        {activePage === 'UseEntries' && (
          <DataEntrySearch/>
        )}
        {activePage === 'UseClauses' && (
          <DataClauseSearch/>
        )}
        <RefineEntryBtn/>
      </div>
    </>
  );
}
