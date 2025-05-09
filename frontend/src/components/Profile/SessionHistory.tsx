export default function SessionHistory() {
  const sessions = [
    { date: "May 7", task: "Finish blog post", duration: "25m" },
    { date: "May 7", task: "Study algorithms", duration: "25m" },
    { date: "May 6", task: "Portfolio layout", duration: "25m" },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-4">Recent Sessions</h3>
      <ul className="space-y-2 flex flex-col gap-1">
        {sessions.map((session, index) => (
          <li
            key={index}
            className="p-3 rounded-md outline-2 bg-base-300 shadow-sm"
          >
            <div className="text-sm font-semibold dark:text-gray-100">{session.task}</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {session.date} • {session.duration}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
