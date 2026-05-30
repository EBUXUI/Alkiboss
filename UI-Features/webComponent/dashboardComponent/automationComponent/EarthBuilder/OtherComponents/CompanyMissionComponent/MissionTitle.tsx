import styles from '@/styles/Desktop.module.css'

export default function ManagerTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>
                 Uplifting the <span className={styles.TitleWolf}>Vulnerable.</span>
               </h1>
            </div>
            <div className={styles.ManagerContentBg}>
              <div className={styles.SystemTitleI}>
                <h2>
                  Our mission is rooted in compassion 
                </h2>
              </div>
              <div className={styles.RestaurantSubTitleI}>
                <h3>
                  <span className={styles.TitleWolf}> Transforming lives of disabled children 
                  and women at risk of cancer through care, dignity, and access to essential support.</span>
                  
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}