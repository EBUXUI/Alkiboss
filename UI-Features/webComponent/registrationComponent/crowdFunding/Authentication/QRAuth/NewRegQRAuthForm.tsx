import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import QRAuthSubmit from "@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/QRAuth/NewRegQRAuthSubmit";
import Link from 'next/link';
export default function QRAuthFOrm() {
  const [Post, setPost] = useState(true);

  const Username = "Administrator";
  
  
  return (
    <>
      <div className={styles.ManagerLoginComponentAuth}>
        <form className={styles.ManagerLoginFormAuth}>
          <article className={styles.ManagerUsernameGridAuth}>
            <label className={styles.ManagerUsernameTitleAuth}><Link href="#" className={styles.Link}>New Code</Link></label>
            <label
              className={styles.ManagerUsernameQRAuth}   
            />
          </article>
          <article className={styles.ManagerUsernameGridAuth}>
            <label className={styles.ManagerUsernameTitle}>QR Auth</label>
            <input
              className={styles.ManagerUsernameAuth}
              type="text"
              aria-label="Username"
              placeholder="Enter the Code Sent"
            />
          </article>
          <QRAuthSubmit/>
        </form>
      </div>
    </>
  );
}
