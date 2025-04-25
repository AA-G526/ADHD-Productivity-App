import { useState } from "react";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import { Task } from "@/types";
import { v4 as uuidv4 } from "uuid";

export default function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(false);

  function handleAdd(title: string, tag: string) {
    const newTask: Task = {
      id: uuidv4(),
      title,
      tag,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setShowForm(false);
  }

  function handleToggle(id: string) {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  }

  function handleDelete(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <div>
      <div className="flex justify-between items-center mt-6">
        <h2 className="text-2xl font-semibold">Your Tasks</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="text-base cursor-pointer flex items-center gap-1"
        >
          <span className="text-lg">＋</span> Add task
        </button>
      </div>

      {showForm && <TaskForm onAdd={handleAdd} />}

      <div className="mt-4">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
