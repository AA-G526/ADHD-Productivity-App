import { Task } from "@/types";
import { Trash2 } from "lucide-react";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="flex justify-between items-center shadow-sm py-2 px-3 rounded-md outline bg-base-200 mb-3">
      <label className="flex gap-3 items-center cursor-pointer w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="checkbox mt-1 border-2"
        />
        <div className="flex flex-col flex-wrap">
          <span className={`text-base font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </span>
          <span className="text-sm font-medium text-gray-500">#{task.tag}</span>
        </div>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="ml-3 text-gray-500 hover:text-red-600 transition"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
}
