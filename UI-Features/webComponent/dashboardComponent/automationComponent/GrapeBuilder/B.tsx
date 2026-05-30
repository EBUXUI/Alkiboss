"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CSS/UX.module.css";
import grapesjs, { Editor } from "grapesjs";
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import gjsBlocksBasic from "grapesjs-blocks-basic";
import grapesCss from '@/styles/CSS/Grapes.module.css'
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
            canvas: {
                styles: [
                    'body { background: var(--Dark-Space); color: #f0f0f0; }',
                    '.gjs-frame { background: var(--Dark-Space) !important; }',
                ],
            },
            styleManager: {
                sectors: [
                    {
                        name: "General",
                        properties: [
                            { name: "color" },
                            { name: "background-color" },
                            { name: "font-family" },
                            { name: "font-size" },
                        ],
                    },
                ]
            },
            plugins: [gjsPresetWebpage, gjsBlocksBasic],
            pluginsOpts: {
                gjsPresetWebpage: {},
                gjsBlocksBasic: {},
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
        <section ref={heroRef} className={grapesCss.hero}>

            <div id='editor' className={`${grapesCss['annotationTopLeft']} ${grapesCss['gjs-blocks']} ${grapesCss['annotationBg']}`}>

            </div>
        </section>
    );
}
