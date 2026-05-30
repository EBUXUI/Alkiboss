"use client";

import { useEffect, useRef, useState } from "react";
import styles from "@/styles/CSS/UX.module.css";
import StudioEditor from "@grapesjs/studio-sdk/react";
import "@grapesjs/studio-sdk/style";

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
                    licenseKey: process.env.NEXT_PUBLIC_GRAPESJS_LICENSE_KEY!,
                    theme: 'dark',
                    identity: {
                        // TODO: replace with a unique id for your end users. e.g. an uuid
                        id: 'UNIQUE_END_USER_ID'
                    },
                    assets: {
                        storageType: 'self'
                    },
                    storage: {
                        type: 'self',
                        autosaveChanges: 100,
                        autosaveIntervalMs: 10000
                    },
                    project: {
                        type: "email",
                        id: 'UNIQUE_PROJECT_ID',
                        default: {
                            pages: [
          { component: '<mjml><mj-body><mj-section><mj-column><mj-text>My email</mj-text></mj-column></mj-section></mj-body></mjml>' },
        ]
                        },
                    },
                }}
            />
        </section>
    );
}


