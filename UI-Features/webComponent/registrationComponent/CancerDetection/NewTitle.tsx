import styles from '@/styles/Desktop.module.css'

export default function ManagerTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Consultation Schedule </h1>
            </div>
            <div className={styles.ManagerContentBg}>
              <div className={styles.SystemTitleI}>
                <h2>Cancer Care System</h2>
              </div>
              <div className={styles.RestaurantSubTitleI}>
                <h3>
                  The Home of Earnest Health Care & Protection
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}