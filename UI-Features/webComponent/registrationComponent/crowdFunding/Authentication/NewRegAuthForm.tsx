import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import ManagerCredentialSubmit from "@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/NewRegAuthSubmit";

export default function ManagerAuthForm() {
  const [Post, setPost] = useState(true);

  const Username = "Adminstrator";
  
  return (
    <>
      <div className={styles.ManagerLoginComponentAuth}>
        <form method="POST" className={styles.ManagerLoginFormAuth}>
          <article className={styles.ManagerUsernameGridAuth}>
            <label className={styles.ManagerUsernameTitle}>OTP Auth</label>
            <input
              className={styles.ManagerUsernameAuth}
              type="text"
              aria-label="Username"
              placeholder="Enter OTP Code"
            />
          </article>
          <ManagerCredentialSubmit/>
        </form>
      </div>
    </>
  );
}
