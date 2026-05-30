import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import ManagerCredentialSubmit from "@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/EmailAuth/NewRegEmailAuthSubmit";

export default function ManagerEmailAuthForm() {
  const [Post, setPost] = useState(true);

  const Username = "Administrator";
  
 
  return (
    <>
      <div className={styles.ManagerLoginComponentAuth}>
        <form method="POST" className={styles.ManagerLoginFormAuth}>
          <article className={styles.ManagerUsernameGridAuth}>
            <label className={styles.ManagerUsernameTitle}>Email Auth</label>
            <input
              className={styles.ManagerUsernameAuth}
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
