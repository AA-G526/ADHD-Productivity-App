// src/components/Profile/BadgesDisplay.tsx
export default function BadgesDisplay() {
  // TODO: fetch real earned badges
  const badges = ["First Session", "7-Day Streak"];

  return (
    <div className="flex flex-wrap gap-4">
      {badges.map((b) => (
        <div key={b} className="px-3 py-1 bg-yellow-200 rounded-full font-medium">
          {b}
        </div>
      ))}
    </div>
  );
}
