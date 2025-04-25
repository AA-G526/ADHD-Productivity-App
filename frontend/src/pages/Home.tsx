import { useState } from "react";
import TimerWidget from "@/components/FocusMode/TimerWidget";
import TaskList from "@/components/TaskSystem/TaskList";

export default function Home() {
  const [goal, setGoal] = useState<string>('');
  const [completed, setCompleted] = useState<boolean>(false);

  const setGoalValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value);
  };

  const setCompletedValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompleted(e.target.checked);
  };

  return (
    <div>
      <div className="pt-4 px-8">
        <h2 className="text-2xl mb-4 font-semibold">Today's Goal</h2>
        <div className="flex gap-2 sm:gap-3 items-center py-3 sm:py-4 pl-2 sm:pl-4 rounded-md outline-2 opacity-90">
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
            className={`text-base ${completed ? "line-through" : ""} font-semibold sm:text-xl w-full focus:outline-0 border-none`}
          />
        </div>

        <div className="mt-8">
          <h2 className="text-2xl mb-4 font-semibold">
            Welcome back,<br /> ready to focus?
          </h2>
          <TimerWidget />
        </div>

        <div className="mt-8">
          <TaskList />
        </div>
      </div>
    </div>
  );
}
