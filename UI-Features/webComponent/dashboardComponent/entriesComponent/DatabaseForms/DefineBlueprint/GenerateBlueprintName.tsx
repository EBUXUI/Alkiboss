'use client';

import styles from "@/styles/White/Home.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import { ExecutionResult } from "@luvra/luvsql/intel/flow/disciplines/executor"; // Correct import path
import { toast } from 'react-toastify';

export type GenerateBlueprintProps = {
    onClick: () => void;
}

export default function GenerateBlueprintName(GenerateBlueprint: GenerateBlueprintProps){
    const [loading, setloading] = useState(false);
     return (
    <>
        <label className={styles.MainTitle} htmlFor="queryHotelName">
          <button
            className={styles.BookNow}
          >
            {loading ? "Venture in Progress" : "Generate Blueprint"}
          </button>
        </label>
    </>
  );
}
