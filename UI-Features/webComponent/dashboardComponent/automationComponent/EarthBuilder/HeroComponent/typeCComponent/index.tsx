import styles from '@/styles/Legal/Desktop.module.css';
import Image from 'next/image';
import ServiceBg from '@/MyPotraits/Orange-E.jpg';
import ComponentTitle from './ComponentTitle';
import ComponentProduct from './ComponentProduct';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";

import {  
  AEIF_CONTACTS,  
  AEIFCommandBar,
  AEIFComposePanel,
  AEIFEmail,
  AEIFEmailCarousel,
  AEIFEmailDetail,
  AEIFParticleCanvas,
  AEIFSidebar,
  AEIFStatsCanvas,
  AEIFWorkflowVisualizer,
  AEIF_THEMES, 
  buildInboxEmails,
  ThemeMode,
  EmailSection
} from "@/UI-Features/types/v1";
export default function typeCComponent() {
  
    const [theme, setTheme]               = useState<ThemeMode>("particle");
    const [activeSection, setSection]     = useState<EmailSection>("inbox");
    const [selectedEmail, setEmail]       = useState<AEIFEmail | null>(null);
    const [showWorkflow, setShowWorkflow] = useState(false);
    const [isFirstVisit]                  = useState(true);
    const cfg                             = AEIF_THEMES[theme];
  
    const emails = useMemo(() => {
      if (isFirstVisit && activeSection === "inbox") return buildInboxEmails();
      const section = activeSection === "campaigns" || activeSection === "analytics" ? "inbox" : activeSection;
      return buildInboxEmails().filter(e => e.section === section || activeSection === "inbox");
    }, [activeSection, isFirstVisit]);
  
  return (
    <>
      <section className={styles.Herocontent}>
        
            <div className={styles.HeroContentBg}>
              
              <div className={styles.HeroBackground}>
                <Image
                  priority
                  alt="Soriyo International Management Consultancy Services"
                  src={ServiceBg}
                  className={styles.HeroBackgroundImage}
                  quality={100}
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
                <AEIFParticleCanvas theme={theme} />
              </div>
              <div className={styles.GridedContentModule}>
                <div className={styles.FooterContentModule}>
                <ComponentTitle/>
                </div>
                <div className={styles.FooterContentModuleII}>
                  <ComponentProduct/>
                </div>
              </div>
            </div>
          
      </section>
    </>
  );
};
