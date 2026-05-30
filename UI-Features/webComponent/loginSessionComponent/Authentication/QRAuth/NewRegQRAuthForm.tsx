import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import QRAuthSubmit from "@/UI-Features/webComponent/registrationComponent/Authentication/QRAuth/NewRegQRAuthSubmit";
import Link from 'next/link';
export default function QRAuthFOrm() {
  const [Post, setPost] = useState(true);

  const Username = "Administrator";
  
  
  return (
    <>
      <div className={styles.ManagerLoginComponent}>
        <form className={styles.ManagerLoginForm}>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}><Link href="#" className={styles.Link}>New Code</Link></label>
            <label
              className={styles.ManagerUsernameQRAuth}   
            />
          </article>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Email Auth</label>
            <input
              className={styles.ManagerUsername}
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
