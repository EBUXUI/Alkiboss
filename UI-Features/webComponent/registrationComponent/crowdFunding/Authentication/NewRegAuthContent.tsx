import styles from "@/styles/Desktop.module.css";
import ManagerTitle from "@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/NewRegAuthTitle";
import ManagerForm from "@/UI-Features/webComponent/registrationComponent/crowdFunding/Authentication/NewRegAuthForm";

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
