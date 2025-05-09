import { LuBrain } from "react-icons/lu";
// import { CgProfile } from "react-icons/cg";
import Streak from "@/components/Profile/StreakCounter";

export default function Navbar() {

  return (
    <div className="flex relative p-5 items-center justify-between">
      <div className="flex items-center gap-3">
      <LuBrain className="size-8 sm:size-10"/>
      <h1 className="text-3xl font-semibold">Focusnest</h1>
      </div>
    <Streak />
    </div>
  )
}