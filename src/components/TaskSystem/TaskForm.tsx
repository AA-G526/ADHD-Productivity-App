import { useState } from "react";

interface TaskFormProps {
  onAdd: (title: string, tag: string) => void;
}

export default function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title, tag || "general");
    setTitle("");
    setTag("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 mt-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-bordered w-full text-base font-semibold"
        placeholder="Task title"
      />
      <input
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="input input-bordered w-full text-base font-medium"
        placeholder="Tag (e.g., school, chores)"
      />
      <button type="submit" className="btn btn-primary w-full">
        Add Task
      </button>
    </form>
  );
}
