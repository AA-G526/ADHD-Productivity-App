import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Task } from "@/types";

interface TimerWidgetProps {
  task: Task;
}

export default function TimerWidget({ task }: TimerWidgetProps) {
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const [mode, setMode] = useState<"work" | "break">("work");
  const [secondsLeft, setSecondsLeft] = useState<number>(25 * 60);
  const [taskCompleted, setTaskCompleted] = useState<boolean>(task.completed);

  function switchMode() {
    const nextMode = mode === "work" ? "break" : "work";
    setMode(nextMode);
    setSecondsLeft(nextMode === "work" ? 25 * 60 : 5 * 60);
    setIsRunning(true);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (isRunning) {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            if (mode === "work") {
              setTaskCompleted(true);
            }
            switchMode();
            return 0;
          }
          return prev - 1;
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, mode]);

  function formatTime(secs: number): string {
    const mins = Math.floor(secs / 60);
    const secsLeft = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${secsLeft
      .toString()
      .padStart(2, "0")}`;
  }

  return (
    <motion.div
      key="timer"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex flex-col items-center gap-4 mb-6 w-full text-center"
    >
      <h2 className="text-xl font-bold">
        {taskCompleted ? "✅ Task Completed!" : (mode === "work" ? "Focus Time" : "Break Time")}
      </h2>
      <p className="text-6xl font-mono">{formatTime(secondsLeft)}</p>

      <div className="flex gap-4 mt-2">
        {isRunning ? (
          <button className="btn btn-warning" onClick={() => setIsRunning(false)}>
            Pause
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => setIsRunning(true)}>
            Resume
          </button>
        )}
        <button className="btn btn-outline" onClick={switchMode}>
          Skip
        </button>
      </div>
    </motion.div>
  );
}
