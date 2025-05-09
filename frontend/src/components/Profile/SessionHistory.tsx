// src/components/Profile/SessionHistory.tsx
export default function SessionHistory() {
  // TODO: map over real sessions
  const mockSessions = [
    { date: "2025-05-01", task: "Read chapters", count: 2 },
    { date: "2025-05-02", task: "Code feature", count: 3 },
  ];

  return (
    <ul className="space-y-2">
      {mockSessions.map((s) => (
        <li key={s.date} className="p-2 bg-white rounded shadow">
          <strong>{s.date}</strong>: {s.task} — {s.count} session(s)
        </li>
      ))}
    </ul>
  );
}
