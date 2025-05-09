import {
  BarChart,
  Bar,
  XAxis as RawXAxis,
  YAxis as RawYAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const XAxis = RawXAxis as unknown as React.FC<any>;
const YAxis = RawYAxis as unknown as React.FC<any>;


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
    <div className="pr-8">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="day" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Bar dataKey="sessions" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
