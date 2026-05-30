import styles from '@/styles/Desktop.module.css'

export default function ManagerTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Contact Us </h1>
            </div>
            <div className={styles.ManagerContentBg}>
              <div className={styles.SystemTitleI}>
                <h2>Reach Out To Our Support Team</h2>
              </div>
              <div className={styles.RestaurantSubTitleI}>
                <h3>
                  We will Respond with Immediate Effect.
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}