import styles from '@/styles/Desktop.module.css'

export default function ManagerEmailAuthTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Authenticating Client</h1>
            </div>
            <div className={styles.ManagerContentBg}>
              <div className={styles.SystemTitleI}>
                <h2>Authentication Operations</h2>
              </div>
              <div className={styles.RestaurantAuthSubTitleI}>
                <h3>
                 A Code has been sent to your Email Address
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}