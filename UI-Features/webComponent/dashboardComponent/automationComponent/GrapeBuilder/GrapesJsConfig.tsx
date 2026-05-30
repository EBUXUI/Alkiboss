"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CSS/UX.module.css";
import grapesjs, { Editor } from "grapesjs";
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import 'grapesjs/dist/css/grapes.min.css'

const GrapesJsConfig = () => {
    return {
        container: '#gjs',
        storageManager: { autosave: false },
        components: '<h1> Hello World Component </h1>',
        height: "300px",
        width: "auto",
        panels: { defaults: [] },
        
    }
}

export default GrapesJsConfig