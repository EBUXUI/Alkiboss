"use client";

import { FC } from "react";
import styles from "@/styles/devOps/Desktop.module.css";


interface NewSubmitProps {
    handleUpload: () => Promise<void>;
    uploading: boolean;
  }
  
const NewSubmit: FC<NewSubmitProps> = ({ handleUpload, uploading }) => {
    return (
      <div className={styles.SubmitNavigateFlex}>
        <button
          onClick={handleUpload}
          disabled={uploading}
          className={styles.SubmitNavigateTitle}
        >
          {uploading ? "Your are important to us..."  : "Share The Love"}
        </button>
      </div>
    );
  };

export default NewSubmit;
