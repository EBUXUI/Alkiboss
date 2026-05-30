import styles from '@/styles/Desktop.module.css'

export default function ManagerEmailAuthTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Authenticating Crowd Funder</h1>
            </div>
            <div className={styles.ManagerContentBgAuth}>
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