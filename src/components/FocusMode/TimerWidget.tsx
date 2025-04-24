import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "@/types";

type TimerWidgetProps = {
  task?: Task;
  initialMode?: "work" | "break";
};

export default function TimerWidget({ task, initialMode = "work" }: TimerWidgetProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">(initialMode);
  const [secondsLeft, setSecondsLeft] = useState<number>(
    initialMode === "work" ? 25 * 60 : 5 * 60
  );
  const [showTimer, setShowTimer] = useState(false);

  const switchMode = () => {
    const nextMode = mode === "work" ? "break" : "work";
    setMode(nextMode);
    setSecondsLeft(nextMode === "work" ? 25 * 60 : 5 * 60);
    setIsRunning(false);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            switchMode();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60);
    const secsLeft = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${secsLeft
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="w-full text-center">
      <AnimatePresence>
        {showTimer && (
          <motion.div
            key="timer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-4 mb-6"
          >
            <h2 className="text-xl font-bold">
              {task ? `Focusing on: ${task.title}` : mode === "work" ? "Focus Time" : "Break Time"}
            </h2>
            <p className="text-6xl font-mono">{formatTime(secondsLeft)}</p>
            <div className="flex gap-4 mt-2">
              {!isRunning && (
                <button className="btn btn-primary" onClick={() => setIsRunning(true)}>
                  Start
                </button>
              )}
              {isRunning && (
                <button className="btn btn-warning" onClick={() => setIsRunning(false)}>
                  Pause
                </button>
              )}
              <button className="btn btn-outline" onClick={switchMode}>
                Skip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="btn btn-neutral text-xl w-full h-14"
        onClick={() => setShowTimer(!showTimer)}
      >
        {showTimer ? "Hide Pomodoro" : "Start Pomodoro"}
      </button>
    </div>
  );
}
