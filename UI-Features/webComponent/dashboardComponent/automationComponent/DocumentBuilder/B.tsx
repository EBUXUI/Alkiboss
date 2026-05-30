"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CSS/UX.module.css";
import grapesjs, { Editor } from "grapesjs";
import gjsPresetWebpage from 'grapesjs-preset-webpage'

export default function GrapeBuilder() {

    const heroRef = useRef<HTMLElement>(null);
    const [cssValues, setCssValues] = useState({
        minWidth: "",
        maxWidth: "",
        minHeight: "",
        maxHeight: "",
        margin: "",
        padding: "",
    });

    const [jseditor, setjsEditor] = useState<Editor | null>(null);

    useEffect(() => {
        const editor = grapesjs.init({
            container: '#editor',
            storageManager: { autoload: false },
            // Enable the built-in panels
            panels: { defaults: [] },
            plugins: [gjsPresetWebpage],
            pluginsOpts: {
                gjsPresetWebpage: {}
            }
        });
        setjsEditor(editor);
    }, [])

    useEffect(() => {
        if (heroRef.current) {
            const computed = getComputedStyle(heroRef.current);
            setCssValues({
                minWidth: computed.minWidth,
                maxWidth: computed.maxWidth,
                minHeight: computed.minHeight,
                maxHeight: computed.maxHeight,
                margin: computed.margin,
                padding: computed.padding,
            });
        }
    }, []);

    return (
        <section ref={heroRef} className={styles.hero}>
            
            <div id='editor' className={`${styles['annotationTopLeft']} ${styles['annotationBg']}`}>

            </div>
        </section>
    );
}
