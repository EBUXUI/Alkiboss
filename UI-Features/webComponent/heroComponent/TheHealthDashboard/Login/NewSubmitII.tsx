"use client";

import { FC } from "react";
import styles from "@/styles/devOps/Desktop.module.css";
import {useState} from 'react';

interface NewSubmitIIProps {
    onClick?: () => void;
  }

const [uploading, setUploading] = useState(false);

const NewSubmitII: FC<NewSubmitIIProps> = ({ //handleUpload,
    //uploading 
    }) => {
    return (
      <div className={styles.SubmitNavigateFlex}>
        <button
          //onClick={handleUpload}
          //disabled={uploading}
          className={styles.SubmitNavigateTitle}
          onClick={() => setUploading(!uploading)}
        >
          {uploading ? "Your journey is important to us..."  : "Use Number Instead"}
        </button>
      </div>
    );
  };

export default NewSubmitII;