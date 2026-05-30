import styles from "@/styles/Desktop.module.css";
import NewRegEmailAuthTitle from "./NewRegEmailAuthTitle";
import NewRegEmailAuthForm from "./NewRegEmailAuthForm";

export default function ManagerEmailAuthContent() {
  return (
    <>
      <section className={styles.ManagerContentTitle}>
        <div className={styles.ManagerTitleModule}>
          <NewRegEmailAuthTitle/>
          <NewRegEmailAuthForm/>
        </div>
      </section>
    </>
  );
}
