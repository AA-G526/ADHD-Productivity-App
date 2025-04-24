import { useState } from "react";
import TimerWidget from "@/components/FocusMode/TimerWidget";
import { Task } from "@/types";

export default function FocusMode() {
  // Temporary mock task, later this comes from TaskList
  const mockTask: Task = {
    id: "1",
    title: "Finish portfolio layout",
    tag: "Design",
    completed: false
  };

  const [task] = useState<Task>(mockTask);

  return (
    <div className="px-6 py-10 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 text-center">{task.title}</h1>
      <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 mb-6">
        {task.tag}
      </span>

      <div className="w-full max-w-sm">
        <TimerWidget task={task} />
      </div>

      {/* Optional: add notes or break timer here */}
    </div>
  );
}
