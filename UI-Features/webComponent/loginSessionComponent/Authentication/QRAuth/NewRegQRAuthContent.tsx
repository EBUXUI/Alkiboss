import styles from "@/styles/Desktop.module.css";
import NewRegQRAuthTitle from "./NewRegQRAuthTitle";
import NewRegQRAuthForm from "./NewRegQRAuthForm";

export default function ManagerQRAuthContent() {
  return (
    <>
      <section className={styles.ManagerContentTitle}>
        <div className={styles.ManagerTitleModule}>
          <NewRegQRAuthTitle/>
          <NewRegQRAuthForm/>
        </div>
      </section>
    </>
  );
}
