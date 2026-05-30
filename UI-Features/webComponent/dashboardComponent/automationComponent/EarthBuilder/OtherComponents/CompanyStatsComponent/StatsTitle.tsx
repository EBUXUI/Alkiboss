import styles from '@/styles/Desktop.module.css'

export default function ManagerTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Company Stats </h1>
            </div>
            <div className={styles.ManagerContentBg}>
              <div className={styles.SystemTitleI}>
                <h2>The Company Performance</h2>
              </div>
              <div className={styles.RestaurantSubTitleI}>
                <h3>
                  The Numbers dont lie.
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}