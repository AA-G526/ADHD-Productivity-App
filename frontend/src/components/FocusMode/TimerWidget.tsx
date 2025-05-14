import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Task } from "@/types";

type TimerWidgetProps = {
  task?: Task;
  initialMode?: "work" | "break";
  showTimer: boolean;
  setShowTimer: (val: boolean) => void;
};

export default function TimerWidget({ task, initialMode = "work", showTimer, setShowTimer }: TimerWidgetProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<"work" | "break">(initialMode);
  const [secondsLeft, setSecondsLeft] = useState<number>(
    initialMode === "work" ? 25 * 60 : 5 * 60
  );

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
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col items-center gap-3 sm:gap-4 mb-6"
          >
            <h2 className="text-2xl sm:text-4xl font-bold">
              {task ? `Focusing on: ${task.title}` : mode === "work" ? "Focus Time" : "Break Time"}
            </h2>
            <p className="text-5xl sm:text-7xl font-mono font-semibold duration-150">{formatTime(secondsLeft)}</p>
            <div className="flex gap-4 sm:gap-8">
              {!isRunning && (
                <button className="btn btn-primary px-5 sm:px-7" onClick={() => setIsRunning(true)}>
                  Start
                </button>
              )}
              {isRunning && (
                <button className="btn btn-warning px-5 sm:px-7" onClick={() => setIsRunning(false)}>
                  Pause
                </button>
              )}
              <button className="btn btn-outline px-5 sm:px-7" onClick={switchMode}>
                Skip
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="btn btn-neutral text-base h-10 sm:text-lg sm:h-12 w-full"
        onClick={() => setShowTimer(!showTimer)}
      >
        {showTimer ? "Hide Pomodoro" : "Start Pomodoro"}
      </button>
    </div>
  );
}
