import styles from '@/styles/Desktop.module.css'

export default function ManagerCredEmailAuthTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Authenticating Client</h1>
            </div>
            <div className={styles.ManagerContentBgAuth}>
              <div className={styles.SystemTitleI}>
                <h2>Authentication Operations</h2>
              </div>
              <div className={styles.RestaurantAuthSubTitleI}>
                <h3>
                  An OTP Code Has Been Sent to Your Mobile Number.
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}