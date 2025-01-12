import { useState } from "react";
import styles from "./singletaskcomponent.module.css";

export function SingleTaskComponent({ task, tasks, setTasks }) {
  const [editedInput, setEditedInput] = useState(task.todo);

  const handleEditBtn = (key) => {
    const edit = tasks.map((task) =>
      task.key === key ? { ...task, isEdit: !task.isEdit } : task
    );
    setTasks(edit);
  };

  const handleDoneBtn = (key) => {
    const edit = tasks.map((task) =>
      task.key === key
        ? { ...task, todo: editedInput, isEdit: !task.isEdit }
        : task
    );
    if (editedInput !== "") {
      setTasks(edit);
    }
  };

  const handleDeleteBtn = (key) => {
    setTasks(tasks.filter((task) => task.key !== key));
  };

  return (
    <div className={styles.tasksbox}>
      <h3 className={styles.tasks}>{task.todo}</h3>
      <div className={styles.buttons}>
        {task.isEdit ? (
          <span>
            <input
              className={styles.editInput}
              placeholder={task.todo}
              value={editedInput}
              onChange={(e) => setEditedInput(e.target.value)}
            />
            <button onClick={() => handleDoneBtn(task.key)}>Done</button>
          </span>
        ) : (
          <button onClick={() => handleEditBtn(task.key)}>Edit</button>
        )}
        <button onClick={() => handleDeleteBtn(task.key)}>Delete</button>
      </div>
    </div>
  );
}
