import styles from "./header.module.css";

export function Header() {
  return (
    <div className={styles.headerBox}>
      <div className={styles.heading}>My To-Do App</div>
    </div>
  );
}
