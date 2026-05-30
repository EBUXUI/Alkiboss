import styles from "@/styles/Desktop.module.css";
import { useState } from "react";
import NewSubmit from "@/UI-Features/webComponent/registrationComponent/NewSubmit";

export default function ManagerForm() {
  const [Post, setPost] = useState(true);

  const Username = "Adminstrator";
  
 
  return (
    <>
      <div className={styles.ManagerLoginComponent}>
        <form method="POST" className={styles.ManagerLoginForm}>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>First Name</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="First-Name"
              name="First-Name"
              placeholder="Enter your First Name"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Surname</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Surname"
              name="Surname"
              placeholder="Enter your Surname"
            />
          </article>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Username</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="First-Name"
              name="First-Name"
              placeholder="Enter your Username"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Profession</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Surname"
              name="Surname"
              placeholder="Enter your Profession"
            />
          </article>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Date of Birth</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Date-of-Birth"
              name="Date-of-Birth"
              placeholder="Enter your Date of Birth"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Service</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Health-Service"
              name="Health-Service"
              placeholder="Pick a Health Care Service"
            />
          </article>
          <article className={styles.ManagerUsernameGrid}>
            <label className={styles.ManagerUsernameTitle}>Email</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Email-Address"
              name="Email-Address"
              placeholder="Enter your Email Address"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Phone Number</label>
            <input
              className={styles.ManagerUsername}
              type="text"
              aria-label="Surname"
              name="Surname"
              placeholder="Enter your Mobile Number"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Password</label>
            <input
              className={styles.ManagerPassword}
              type="password"
              aria-label="Password"
              name="Password"
              placeholder="Enter a Secure Password"
              content="hidden"
            />
          </article>
          <article className={styles.ManagerPasswordGrid}>
            <label className={styles.ManagerPasswordTitle}>Confirm Pass</label>
            <input
              className={styles.ManagerPassword}
              type="password"
              aria-label="Password"
              name="Password"
              placeholder="Confirm the Secure Password"
              content="hidden"
            />
          </article>
          <NewSubmit/>
        </form>
      </div>
    </>
  );
}
