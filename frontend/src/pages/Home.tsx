import { useState } from "react";
import TimerWidget from "@/components/FocusMode/TimerWidget";
import TaskList from "@/components/TaskSystem/TaskList";
import { motion } from "framer-motion";
import Navbar from "../layouts/Navbar"

export default function Home() {
  const [goal, setGoal] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);
  const [showTimer, setShowTimer] = useState<boolean>(false); // ⬅ lifted up

  const setGoalValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value);
  };

  const setCompletedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
  };

  return (
    <div>
    <Navbar />
      <div className="px-8 pt-4">
        <h2 className="text-xl sm:text-2xl mb-4 font-semibold">Today's Goal</h2>
        <div className="flex sm:gap-4 gap-1 font-light items-center py-2 sm:py-3 pl-2 sm:pl-4 rounded-md outline-slate-600 outline opacity-90">
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
            className={` ${completed ? "line-through" : ""} sm:text-lg font-semibold w-full focus:outline-0 border-none`}
          />
        </div>

        <div className="mt-8">
          {!showTimer && (
            <motion.h2 
            key="timer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-xl sm:text-2xl mb-6 font-semibold">
              Hey user,<br /> ready to focus?
            </motion.h2>
          )}
          <TimerWidget showTimer={showTimer} setShowTimer={setShowTimer} />
        </div>

        <div className="mt-8">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
