import styles from "@/styles/Desktop.module.css";
import NewTitle from "./NewTitle";
import NavigateNewForm from "./NavigateNewForm";

export default function ManagerLoginContent() {
  return (
    <>
      <section className={styles.ManagerContentTitle}>
        <div className={styles.ManagerTitleModule}>
          <NewTitle/>
          <NavigateNewForm/>
        </div>
      </section>
    </>
  );
}
