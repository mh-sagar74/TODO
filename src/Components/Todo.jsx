import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TasksBox } from "./TasksBox";
import { InputBox } from "./InputBox";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Todo() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddBtn = (e) => {
    e.preventDefault();
    if (input !== "") {
      setTasks([
        ...tasks,
        { todo: input, key: uuidv4(), isEdit: false, isDelete: false },
      ]);
    }
    setInput("");
  };

  return (
    <div>
      <Header />
      <InputBox input={input} handleAddBtn={handleAddBtn} setInput={setInput} />
      <TasksBox tasks={tasks} setTasks={setTasks} />
      <Footer />
    </div>
  );
}
