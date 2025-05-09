import { FaMedal, FaFire, FaLock } from "react-icons/fa";

type Badge = {
  label: string;
  icon: React.ReactNode;
  unlocked: boolean;
};

export default function BadgesDisplay() {
  const badges: Badge[] = [
    { label: "First Session", icon: <FaMedal />, unlocked: true },
    { label: "7-Day Streak", icon: <FaFire />, unlocked: true },
    { label: "100 Sessions", icon: <FaLock />, unlocked: false },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-2">Badges</h3>
      <div className="flex flex-wrap gap-3">
        {badges.map((badge) => (
          <div
            key={badge.label}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-sm ${
              badge.unlocked
                ? "bg-yellow-200 text-yellow-800"
                : "bg-gray-200 text-gray-400"
            }`}
          >
            {badge.icon}
            {badge.label}
          </div>
        ))}
      </div>
    </div>
  );
}
