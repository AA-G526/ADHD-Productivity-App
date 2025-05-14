import { LuBrain } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { Home, Timer } from "lucide-react";
import { CgProfile } from "react-icons/cg";
import Streak from "@/components/Profile/StreakCounter";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={18} /> },
    { name: "Focus", path: "/focus", icon: <Timer size={18} /> },
    { name: "Profile", path: "/profile", icon: <CgProfile size={18} /> },
  ];

  return (
    <div className="flex mb-12 w-full bg-base-100 px-5 pt-5 pb-2 z-20 fixed items-center 2xl:px-32 xl:px-12 justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <LuBrain className="size-8 sm:size-10" />
        <h1 className="text-[1.5em] sm:text-[1.8em] font-semibold">Focusnest</h1>
      </div>

      {/* Navigation links - only visible on lg screens and up */}
      <div className="flex gap-12">
        <div className="gap-8 lg:flex hidden">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-1 text-md font-medium transition ${
              location.pathname === item.path ? "text-accent" : "hover:text-neutral"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
        </div>
        {/* Streak counter */}
      <Streak />
      </div>

    </div>
  );
}
