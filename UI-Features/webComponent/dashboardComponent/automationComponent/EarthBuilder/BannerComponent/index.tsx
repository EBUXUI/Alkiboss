import styles from '@/styles/Builder-Dashboard/Hero/Home.module.css';
import Image from 'next/image';
import MedicalConsumablesBackgroundI from '@/MyPotraits/GreenWhite/GreenIX.png';
import InnovativeSolutionsTitle from './InnovativeSolutionsTitle';
import InnovativeSolutionsTitleI from './InnovativeSolutionsTitleI';
import InnovativeSolutionsTitleII from './InnovativeSolutionsTitleII';
import InnovativeSolutionsTitleIII from './InnovativeSolutionsTitleIII';

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


export default function WorkshopHero() {
  
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
    
        <section className={styles.MainHeroII}>
          <div className={styles.Herocontent}>
            <div className={styles.HeroContentBg}>
              <div className={styles.HeroBackground}>
                <Image
                  priority
                  alt="House of Grace Foundation"
                  src={MedicalConsumablesBackgroundI}
                  className={styles.HeroBackgroundImage}
                  quality={100}
                  fill ={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.GridedContentModule}>
                <div className={styles.FooterContentModule}>
               <InnovativeSolutionsTitle/>
              <InnovativeSolutionsTitleI/>
              <InnovativeSolutionsTitleII/>
              <InnovativeSolutionsTitleIII/>
                </div>
              </div>
            </div>
      </div>
        </section>

    </>
  );
};
