import { Home, Timer, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
  { to: "/focus", label: "Focus", icon: <Timer className="w-5 h-5" /> },
  { to: "/profile", label: "Profile", icon: <User className="w-5 h-5" /> },
];

export default function DesktopSidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-56 h-screen border-r border-border p-4fixed">
      <h1 className="text-2xl font-bold mb-6">Focusnest</h1>
      <nav className="flex flex-col gap-2">
        {navItems.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={cn(
              "flex items-center gap-3 p-2 rounded-md hover:bg-muted transition",
              location.pathname === to && "bg-muted font-semibold"
            )}
          >
            {icon}
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
