
import { useEffect, useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
export default function StreakCounter() {
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    // mock load
    setStreak(5);
  }, []);
  return (
    <div>      
    <span className="flex items-center gap-1 h-8 sm:h-12 bg-[#4A35D1] rounded-xl px-4 text-secondary">
    <p className="text-[1.7rem] sm:text-[2rem] font-bold">{streak}</p>
      <FaFireFlameCurved className="size-6  z-10 sm:size-7"/>
    </span></div>
  )
}