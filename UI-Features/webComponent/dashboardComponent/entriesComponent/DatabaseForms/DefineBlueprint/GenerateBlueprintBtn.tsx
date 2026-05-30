'use client';

import styles from "@/styles/White/Home.module.css";
import { useFormState } from "react-dom";
import { useState } from "react";
import { ExecutionResult } from "@luvra/luvsql/intel/flow/disciplines/executor"; // Correct import path
import { toast } from 'react-toastify';

interface Column {
  name: string;
  type: string;
  nullable: boolean;
}

interface GenerateBlueprintBtnProps {
  dbNameFromInput: string;
  columnsFromInput: Column[];
  onBlueprintCreated?: () => void;
  onClick: () => void;
}

export default function GenerateBlueprintBtn({
  dbNameFromInput,
  columnsFromInput,
  onBlueprintCreated,
}: GenerateBlueprintBtnProps) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true);
    try{
      const formData = new FormData();
      formData.set('dbName', dbNameFromInput);
      formData.set('columns', JSON.stringify(columnsFromInput));
      const { defineBlueprintAction } = await import ('@/UI-Features/SQLComponent/Actions/serverActions');
      const result = await defineBlueprintAction({
        success: false
      }, formData); //Call Directly, prevState might be Empty
      if (result.success){
        toast.success('Blueprint Created Successfully');
        console.log('Blueprint Defined: ', result);
        onBlueprintCreated?.();
      }
      else{
        toast.error(`Failed to create Blueprint: ${result.error} || ${result.message} || 'Unknown Error'`);
        console.error('Error', result.error);
      }
    } catch(Err){
      toast.error(`Unexpected error: ${(Err as Error)}.message`);
      console.error('Submission Error:', Err);
    } finally{
      setLoading(false);
    }
  }
  return (
    <>
        <label className={styles.MainTitle} htmlFor="queryHotelName">
          <button
            className={styles.BookNow}
            disabled={loading || !dbNameFromInput || columnsFromInput.length === 0}
            onClick={handleSubmit}
          >
            {loading ? "Venture in Progress" : "Generate Blueprint"}
          </button>
        </label>
    </>
  );
}