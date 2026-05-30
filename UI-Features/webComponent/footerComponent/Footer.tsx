import styles from '@/styles/Home.module.css'

import Image from 'next/image'
import Logo from '@/UI-Features/UI-Gallery/Logo/LogoTitle.png'
import LogoII from '@/UI-Features/UI-Gallery/Logo/LogoTitle.png'
import React from 'react'

export default function Footer() {
  return (
    <>
      <section className={styles.Footercontent}>
        <div className={styles.Footerhero}>
            <div className={styles.FooterGrid}>
              
              <div className={styles.FooterGridMainColumn}>
                <div className={styles.FooterGridColumnnI}>
                  <div className={` ${styles["FooterGridElementI"]} ${styles["FooterWrap"]}`}>
                    <Image
                      priority
                      src={Logo}
                      alt="Annex Investments Limited"
                      fill ={true}
                      quality={100}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <div className={`${styles["CompanyFooterLogo"]} ${styles["FooterGridElementI"]} ${styles["FooterWrap"]}`}>
                    <Image
                      priority
                      src={LogoII}
                      alt="Annex Investments Limited"
                      fill ={true}
                      quality={100}
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className={styles.FooterGridColumnnII}>
                  <div className={styles.FooterFirstColumn}>
                    <label className={styles.SocialMediaTitle}>Social Media Communication</label>
                    <label className={styles.FotoerLinkedIn}><a href="" className={styles.FooterLink}>LinkedIn</a></label>
                    <label className={styles.FooterYoutube}><a href="" className={styles.FooterLink}>Youtube</a></label>
                    <label className={styles.FooterQualityAfrica}><a href="" className={styles.FooterLink}>Quality Africa</a></label>
                    <label className={styles.FooterQualityAfrica}><a href="" className={styles.FooterLink}>ZippyTech Agency</a></label>
                  </div>
                  <div className={styles.FooterSecondColumn}>
                    <label className={styles.SocialMediaTitle}>Our Company</label>
                    <label className={styles.LinkedIn}><a href="" className={styles.FooterLink}>Product Catalouge</a></label>
                    <label className={styles.LinkedIn}><a href="" className={styles.FooterLink}>About Us</a></label>
                    <label className={styles.LinkedIn}><a href="" className={styles.FooterLink}>Dealership</a></label>
                    <label className={styles.LinkedIn}><a href="" className={styles.FooterLink}>Privacy Policy</a></label>
                  </div>
                  <div className={styles.FooterFirstColumn}>
                    <label className={styles.SocialMediaTitle}>Social Media Communication</label>
                    <label className={styles.FotoerLinkedIn}><a href="" className={styles.FooterLink}>LinkedIn</a></label>
                    <label className={styles.FooterYoutube}><a href="" className={styles.FooterLink}>Youtube</a></label>
                    <label className={styles.FooterQualityAfrica}><a href="" className={styles.FooterLink}>Quality Africa</a></label>
                    <label className={styles.FooterQualityAfrica}><a href="" className={styles.FooterLink}>ZippyTech Agency</a></label>
                  </div>
                  <div className={styles.FooterFirstColumn}>
                    <label className={styles.SocialMediaTitle}>Social Media Communication</label>
                    <label className={styles.FotoerLinkedIn}><a href="" className={styles.FooterLink}>LinkedIn</a></label>
                    <label className={styles.FooterYoutube}><a href="" className={styles.FooterLink}>Youtube</a></label>
                    <label className={styles.FooterQualityAfrica}><a href="" className={styles.FooterLink}>Quality Africa</a></label>
                    <label className={styles.FooterQualityAfrica}><a href="" className={styles.FooterLink}>ZippyTech Agency</a></label>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};
