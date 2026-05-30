import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import ManagerCredentialSubmit from "@/UI-Features/webComponent/registrationComponent/Authentication/NewRegAuthSubmit";

export default function ManagerAuthForm() {
  const [Post, setPost] = useState(true);

  const Username = "Adminstrator";
  
  return (
    <>
      <div className={styles.ManagerLoginComponent}>
        <form method="POST" className={styles.ManagerLoginForm}>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>OTP Auth</label>
            <input
              className={styles.ManagerUsername}
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
