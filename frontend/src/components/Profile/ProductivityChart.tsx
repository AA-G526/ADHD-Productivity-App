import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function ProductivityChart() {
  const data = [
    { day: 'Mon', sessions: 2 },
    { day: 'Tue', sessions: 3 },
    { day: 'Wed', sessions: 1 },
    { day: 'Thu', sessions: 4 },
    { day: 'Fri', sessions: 2 },
    { day: 'Sat', sessions: 0 },
    { day: 'Sun', sessions: 1 },
  ];

  return (
    <div className='pr-8'>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}  className="text-white">
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="sessions" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
