import { useState } from "react";
import TimerWidget from "@/components/FocusMode/TimerWidgetFocus";
import { Task } from "@/types";

export default function FocusMode() {
  const mockTasks: Task[] = [
    { id: "1", title: "Finish portfolio layout", tag: "Design", completed: false },
    { id: "2", title: "Write blog post", tag: "Writing", completed: false },
    { id: "3", title: "Study algorithms", tag: "Study", completed: false }
  ];

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  return (
    <div className="px-6 py-10 flex flex-col items-center min-h-screen">
      {!selectedTask ? (
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Select a task to focus</h1>
          <div className="flex flex-col gap-4">
            {mockTasks.map((task) => (
              <button
                key={task.id}
                onClick={() => setSelectedTask(task)}
                className="w-full p-4 rounded-lg outline outline-gray-300 dark:border-gray-700 hover:bg-neutral hover:text-white dark:hover:bg-zinc-800 duration-150 cursor-pointer"
              >
                <h2 className="text-md font-semibold">{task.title}</h2>
                <span className="text-sm text-gray-500">{task.tag}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">{selectedTask.title}</h1>
          <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 mb-4">
            {selectedTask.tag}
          </span>
          <div className="w-full max-w-sm">
            <TimerWidget task={selectedTask} />
          </div>

          <button
            onClick={() => setSelectedTask(null)}
            className="mt-6 text-md text-gray-500 underline"
          >
            ⬅️ Back to task selection
          </button>
        </div>
      )}
    </div>
  );
}
