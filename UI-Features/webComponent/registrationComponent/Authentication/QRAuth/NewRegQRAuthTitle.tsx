import styles from '@/styles/Desktop.module.css'

export default function ManagerQRAuthTitle(){
    return(
        <>
        <div className={styles.ManagerTitleModuleII}>
            <div className={styles.RestaurantTitleI}>
              <h1>Authentication Client</h1>
            </div>
            <div className={styles.ManagerContentBgAuth}>
              <div className={styles.SystemTitleI}>
                <h2>Authentication Operations</h2>
              </div>
              <div className={styles.RestaurantAuthSubTitleI}>
                <h3>
                  Scan the below QR Code to receive a One-time OTP
                </h3>
              </div>
            </div>
          </div>
        </>
    )
}