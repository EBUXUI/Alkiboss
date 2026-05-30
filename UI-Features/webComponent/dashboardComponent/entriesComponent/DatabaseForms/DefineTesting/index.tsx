"use client";

import styles from "@/styles/Search/Home.module.css";

import CSS from "@/styles/White/Home.module.css";
import React, { useState, useEffect } from "react";
import ImageCss from "@/styles/White/Main.module.css";
import Link from "next/link";

/*----- Server Actions ------*/
import { Router, useRouter } from "next/router";
import { useRouter as navRouter } from "next/navigation";
import PrintingAccessories from "@/UI-Features/UI-Gallery/Luvra/RefineEntry.jpg";
import Image from "next/image";
import {toast} from "react-toastify"
import { LuvSQLResult } from "@/UI-Features/webComponent/dashboardComponent/entriesComponent/DatabaseServer/LuvSQLServer";

export default function defineTesting({onSubmit}: {onSubmit: (action: string, dbName: string, columns: string) => Promise<LuvSQLResult> }) {
  const [dbName, setDbName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [columns, setColumns] = useState<string>("name TEXT age INTEGER active BOOLEAN")

  const imageData = [
    {
      src: PrintingAccessories,
      bg: PrintingAccessories,
      alt: "Finanvra",
      title: "Import Data",
      link: "/LaunchingSoon",
      preview: "/LaunchingSoon",
      button: "/LaunchingSoon",
      buttonRef: "Import Data",
    },
  ];
  const ImageCard = ({bg, alt, title, link, preview, button, buttonRef}: any) => (
    <div className={`${ImageCss.MainProductElementImage}`}>
      <Image
        priority
        alt={alt}
        src={bg}
        quality={100}
        fill={true}
        className={ImageCss.MainProductElementImage}
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  //Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setOutput("");

    if (!dbName.trim()) {
      setError("Database name is required.");
      setLoading(false);
      return;
    }

    //For Now, just display the name (Baby Step)
    setOutput(`Blueprint Name Submitted: ${dbName}`);

    setLoading(false);
  };
  //Handle Auto-Generate Name
  const handleAutoGenerate = () => {
    const generatedName = `Blueprint_${Math.random().toString(36).substring(7)}`;
    setDbName(generatedName);
    setError('');
    setOutput('');
  }
  //Generating the actual blueprint
  const handleGenerateBlueprint = async () => {
    setLoading(true);
    setError("");
    setOutput("");

    if(!dbName.trim()){
      setError("Database Name is Required.");
      setLoading(false);
      toast.error("Database Name is Required");
      return;
    }

    if(!columns.trim()){
      setError("Columns are Required.");
      setLoading(false);
      toast.error("Columns are Required.");
      return;
    }

    try{
      const result = await onSubmit('defineBlueprint', dbName, columns); // Call Server Side Function.
      if (result.success){
        setOutput(JSON.stringify(result, null, 2));
        toast.success("Blueprint Created Successfully")
      }
    else{
      setError(result.message || "Failed to Create Blueprint");
      toast.error(result.message || "Failed to Create Blueprint");
    }
    }
    catch(error){
      setError((error as Error).message);
      toast.error((error as Error).message);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.DefineBlueprint}>
        <label className={`${CSS["ClauseTitle"]}`} htmlFor="queryHotelName">
          <div
            className={`${ImageCss.LuvProductElement} ${ImageCss.MainProductElementAnime} ${ImageCss.MainProductElementIsometric} ${ImageCss.MainProductElementStackSlide} ${ImageCss.Wrap}`}
          >
            {imageData.map((image, index) => (
              <ImageCard key={index} {...image} />
            ))}
          </div>
          <button className={styles.BookNow}>
            <Link 
            href="" 
            className={styles.BookBtn}
            onClick={handleAutoGenerate}
            >
              Auto-Generate A Name
            </Link>
          </button>
        </label>
        <div className={styles.GridPropertyX}>
          <input
            className={styles.DefineBlueprintSearch}
            placeholder="Enter a Name For Your DB"
            name="DefiningBlueprint"
            id="DefiningBlueprint"
            aria-label="DefiningBlueprint"
            value={dbName}
            onChange={(e) => setDbName(e.target.value)}
          />
          <textarea
          className={styles.DefineBlueprintSearch}
          placeholder="Enter Columns (e.g. name TEXT age INTEGER active BOOLEAN)"
          value={columns}
          onChange={(e) => setColumns(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
           <label 
           className={styles.MainTitle} 
           htmlFor="BlueprintDefinition">
          <button 
          className={styles.BookNow} 
          type="submit" 
          onClick={handleGenerateBlueprint}
          disabled={loading}>
            {loading ? "Venture in Progress" : "Generate Blueprint"}
          </button>
          
        </label>
        </div>
      </div>
      <div className={styles.DefineBlueprint}>
        {output && (
         <div className={styles.Title}>
              <h3>Output:</h3> 
              <pre>{output}</pre>
         </div>
        )}
      </div>
      
    </>
  );
}
