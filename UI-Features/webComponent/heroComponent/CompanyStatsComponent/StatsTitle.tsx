import styles from '@/styles/CurrentStats/Desktop.module.css'

export default function ManagerTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Creative Stats </h1>
            </div>
            <div className={styles.ManagerContentBg}>
              <div className={styles.SystemTitleI}>
                <h2>The Content Performance</h2>
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
