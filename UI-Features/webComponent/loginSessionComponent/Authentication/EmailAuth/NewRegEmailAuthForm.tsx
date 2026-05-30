import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import ManagerCredentialSubmit from "@/UI-Features/webComponent/registrationComponent/Authentication/EmailAuth/NewRegEmailAuthSubmit";

export default function ManagerEmailAuthForm() {
  const [Post, setPost] = useState(true);

  const Username = "Administrator";
  
 
  return (
    <>
      <div className={styles.ManagerLoginComponent}>
        <form method="POST" className={styles.ManagerLoginForm}>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Email Auth</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Username"
              placeholder="Enter the Code Sent"
            />
          </article>
          <ManagerCredentialSubmit/>
        </form>
      </div>
    </>
  );
}
