import { Task } from "@/types";

interface TaskCardProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({ task, onToggle, onDelete }: TaskCardProps) {
  return (
    <div className="flex justify-between items-start shadow-sm p-4 rounded-md outline-2 bg-base-300 mb-3">
      <label className="flex gap-3 items-center cursor-pointer w-full">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="checkbox mt-1 border-2"
        />
        <div className="flex flex-col">
          <span className={`text-base font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
            {task.title}
          </span>
          <span className="text-sm font-medium text-gray-500">#{task.tag}</span>
        </div>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-base btn btn-neutral hover:underline"
      >
        Delete
      </button>
    </div>
  );
}
