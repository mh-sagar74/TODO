import { useState } from "react";
import styles from "./footer.module.css";

const presentDate = new Date();
const presentYear = presentDate.getFullYear();

export function Footer() {
  const [year, setYear] = useState(presentYear);

  return (
    <div className={styles.footerBox}>
      <div className={styles.footer}>&#169;Mominul Haque {year}</div>
    </div>
  );
}
