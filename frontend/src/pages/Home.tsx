import { useState } from "react";
import TimerWidget from "@/components/FocusMode/TimerWidget";
import TaskList from "@/components/TaskSystem/TaskList";
import { motion } from "framer-motion";

export default function Home() {
  const [goal, setGoal] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const [showTimer, setShowTimer] = useState<boolean>(false);

  const setGoalValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value);
  };

  const setCompletedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
  };

  return (
    <div className="min-h-[95vh] bg-base-100">
      <div className="px-4 sm:px-6 lg:px-12 py-6 mx-auto lg:max-w-7xl max-w-xl md:max-w-2xl">
        {/* Grid Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-12 gap-8 lg:gap-0">
          {/* Left Panel: Goal + Timer */}
          <div className="lg:border-r border-slate-700 sm:pt-6 lg:pt-0 lg:pr-12">
            {/* Goal */}
            <h2 className="text-xl sm:text-2xl mb-4 font-semibold">Today's Goal</h2>
            <div className="flex items-center gap-2 sm:gap-4 py-2 sm:py-3 pl-2 sm:pl-4 rounded-md border border-slate-600 opacity-90">
              <input 
                type="checkbox" 
                checked={completed}
                onChange={setCompletedValue}
                className="checkbox border-2"
              />
              <input 
                type="text" 
                placeholder="Add your main goal for today"
                value={goal}
                onChange={setGoalValue}
                className={`w-full border-none focus:outline-0 text-base sm:text-lg font-semibold ${completed ? "line-through" : ""}`}
              />
            </div>

            {/* Timer */}
            <div className="mt-8">
              {!showTimer && (
                <motion.h2 
                  key="timer"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="text-xl sm:text-2xl mb-6 font-semibold"
                >
                  Hey user,<br /> ready to focus?
                </motion.h2>
              )}
              <TimerWidget showTimer={showTimer} setShowTimer={setShowTimer} />
            </div>
          </div>

          {/* Right Panel: Task List */}
          <div className="mt-6 lg:mt-0 lg:pl-12 lg:border-l border-slate-700">
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}
