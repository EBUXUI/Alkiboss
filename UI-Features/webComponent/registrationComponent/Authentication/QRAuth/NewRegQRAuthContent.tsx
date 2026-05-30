import styles from "@/styles/Desktop.module.css";
import NewRegQRAuthTitle from "./NewRegQRAuthTitle";
import NewRegQRAuthForm from "./NewRegQRAuthForm";

export default function ManagerQRAuthContent() {
  return (
    <>
      <section className={styles.ManagerContentTitleAuth}>
        <div className={styles.ManagerTitleModuleAuth}>
          <NewRegQRAuthTitle/>
          <NewRegQRAuthForm/>
        </div>
      </section>
    </>
  );
}
