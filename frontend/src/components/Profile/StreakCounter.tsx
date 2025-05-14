
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
    <span className="flex items-center gap-1 h-8 sm:h-10 bg-[#4A35D1] rounded-full px-3 text-secondary">
    <p className="text-xl sm:text-[1.4em] font-bold">{streak}</p>
      <FaFireFlameCurved className="size-4  z-10 sm:size-5"/>
    </span></div>
  )
}