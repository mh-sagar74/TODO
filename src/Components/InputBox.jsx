import styles from "./inputbox.module.css";

export function InputBox({ input, handleAddBtn, setInput }) {
  return (
    <div className={styles.inputboxcontainer}>
      <form className={styles.inputbox}>
        <input
          placeholder="Add your task here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAddBtn}>+ Add</button>
      </form>
    </div>
  );
}
