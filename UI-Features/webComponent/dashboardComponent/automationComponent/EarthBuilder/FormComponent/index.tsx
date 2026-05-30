import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/devOps/Desktop.module.css";
import NewDerivative from "@/UI-Features/UI-Gallery/CancerDetection/Doctor.jpg";
import NewLoginContent from "./NewLoginContent";
//import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function FormComponent() {
  return (
    <>
         
          <div className={styles.OperatingManagerComponent}>
              <NewLoginContent />
          </div>
    </>
  );
}
