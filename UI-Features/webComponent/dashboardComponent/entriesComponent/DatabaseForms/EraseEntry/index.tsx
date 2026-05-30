import styles from "@/styles/White/Home.module.css";
import SoftwareDevelopmentTitle from "./EraseEntryTitle";
import React from "react";
import RetrieveEntryTitle from "./EraseEntryTitle";
import UsingEntriesBtn from "./UsingEntriesBtn";
import { useState } from "react";
import UsingClausesBtn from "./UsingClausesBtn";
import DataEntrySearch from "./DataEntrySearch";
import RetrieveEntryBtn from "./EraseEntryBtn";
import DataClauseSearch from "./DataClauseSearch";

export default function SoftwareDevelopmentHero() {
  const [activePage, setActivePage] = useState<'UseClauses' | 'UseEntries'>('UseEntries')
  return (
    <>
      <div className={styles.MainHeroModule}>
        <article className={styles.MainHeroLayedOut}>
          <RetrieveEntryTitle/>
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
        <RetrieveEntryBtn/>
      </div>
    </>
  );
}
