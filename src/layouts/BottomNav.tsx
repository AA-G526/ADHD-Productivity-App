import { Link, useLocation } from "react-router-dom";
import { Home, Timer } from "lucide-react";

export default function BottomNav() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Focus", path: "/focus", icon: <Timer size={20} /> },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-base-200 outline-1 z-50">
      <div className="flex justify-around py-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex flex-col items-center text-sm ${
              location.pathname === item.path
                ? ""
                : "text-zinc-500"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
