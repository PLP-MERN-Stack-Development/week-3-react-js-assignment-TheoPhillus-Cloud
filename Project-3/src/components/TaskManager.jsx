import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "./Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [newTask, setNewTask] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleComplete = (id) =>
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const deleteTask = (id) =>
    setTasks(tasks.filter(task => task.id !== id));

  const filtered = tasks.filter(task =>
    filter === "all" ? true :
    filter === "active" ? !task.completed :
    task.completed
  );

  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="flex gap-2">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow border p-2 rounded"
          placeholder="Add a task..."
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex justify-center gap-2">
        {["all", "active", "completed"].map((f) => (
          <Button key={f} variant={filter === f ? "primary" : "secondary"} onClick={() => setFilter(f)}>
            {f}
          </Button>
        ))}
      </div>

      <ul className="space-y-2">
        {filtered.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center p-2 bg-gray-100 rounded dark:bg-gray-800"
          >
            <span
              onClick={() => toggleComplete(task.id)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>X</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}