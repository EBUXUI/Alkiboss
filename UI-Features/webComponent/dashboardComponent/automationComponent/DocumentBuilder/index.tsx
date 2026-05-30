"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CSS/UX.module.css";
import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";
import { presetPrintable, canvasFullSize } from '@grapesjs/studio-sdk-plugins';

export default function DocumentBuilder() {
    const heroRef = useRef<HTMLElement>(null);

    const [cssValues, setCssValues] = useState({
        minWidth: "",
        maxWidth: "",
        minHeight: "",
        maxHeight: "",
        margin: "",
        padding: "",
    });

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
            <StudioEditor
                options={{
                    licenseKey: process.env.NEXT_PUBLIC_GRAPESJS_LICENSE_KEY!, // put your valid license key
                    theme: 'dark',
                    identity: {
                        id: 'user-12345-unique-id', // make this dynamic per user
                    },
                    project: {
                        type: 'document',
                        default: {
                            pages: [
                                {
                                    name: 'Invoice',
                                    component: `<!DOCTYPE html>
<html>
  <body style="padding:40px;font-family: Arial, Helvetica, sans-serif;">
    <h1>New Document</h1>
    <p>Content of the document.</p>
  </body>
</html>`,
                                },
                            ],
                        },
                    },
                    layout: {
                        default: {
                            type: 'row',
                            height: '100%',
                            children: [
                                {
                                    type: 'sidebarLeft',
                                    children: { type: 'panelLayers', header: { label: 'Layers', collapsible: false, icon: 'layers' } }
                                },
                                {
                                    type: 'canvasSidebarTop',
                                    sidebarTop: {
                                        rightContainer: {
                                            buttons: ({ items }) => [
                                                {
                                                    id: 'print',
                                                    icon: '<svg viewBox="0 0 24 24"><path d="M18 3H6v4h12m1 5a1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1 1 1 0 0 1-1 1m-3 7H8v-5h8m3-6H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3Z"/></svg>',
                                                    onClick: ({ editor }) => editor.runCommand('presetPrintable:print')
                                                },
                                                ...items.filter(item => !['showImportCode', 'fullscreen'].includes(item.id))
                                            ]
                                        }
                                    }
                                },
                                { type: 'sidebarRight' }
                            ]
                        }
                    },

                    assets: {
                        storageType: 'self',
                    },
                    storage: {
                        type: 'self',
                        autosaveChanges: 100,
                        autosaveIntervalMs: 10000,
                    },
                    plugins: [presetPrintable, canvasFullSize],
                }}
            />

        </section>
    );
}


