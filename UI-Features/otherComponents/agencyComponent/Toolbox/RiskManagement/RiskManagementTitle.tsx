import Head from "next/head";
import styles from "@/styles/Home.module.css";
import StrategicRiskCatalog from '@/UI-Features/otherComponents/agencyComponent/Toolbox/RiskManagement/StrategicRisks/RiskManagementSectionTitle';
import StrategicRiskRousel from "@/UI-Features/otherComponents/agencyComponent/Toolbox/RiskManagement/StrategicRisks/GlobalParticipationHero";

export default function RiskManagementTitle() {
  return (
    <>
      <div className={styles.FooterContentTitle}>
        <div className={styles.SingleGridedModule}>
          <StrategicRiskRousel/>
        </div>
        <div className={styles.SingleGridedModule}>
            <StrategicRiskCatalog/>
        </div>
      </div>
    </>
  );
}
