import { SingleTaskComponent } from "./SingleTaskComponent";
import styles from "./taskbox.module.css";

export function TasksBox({ tasks, setTasks }) {
  return (
    <div className={styles.taskbox}>
      {tasks.map((task) => (
        <span key={task.key}>
          <SingleTaskComponent task={task} tasks={tasks} setTasks={setTasks} />
        </span>
      ))}
    </div>
  );
}
