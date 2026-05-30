import styles from "@/styles/Desktop.module.css";
import ManagerTitle from "@/UI-Features/webComponent/registrationComponent/Authentication/NewRegAuthTitle";
import ManagerForm from "@/UI-Features/webComponent/registrationComponent/Authentication/NewRegAuthForm";

export default function ManagerCredEmailAuthContent() {
  return (
    <>
      <section className={styles.ManagerContentTitleAuth}>
        <div className={styles.ManagerTitleModuleAuth}>
          <ManagerTitle/>
          <ManagerForm/>
        </div>
      </section>
    </>
  );
}
