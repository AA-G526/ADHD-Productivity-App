import * as CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import 'react-calendar-heatmap/dist/styles.css';

export default function GoalHeatmap() {
  const CH = CalendarHeatmap as any;

  const values = [
    { date: '2025-05-01', count: 1 },
    { date: '2025-05-02', count: 0 },
    // ...
  ];

  return (
    <CH
      startDate={new Date('2025-04-01')}
      endDate={new Date('2025-05-31')}
      values={values}
      classForValue={(v:any) =>
        v.count ? `bg-green-${Math.min(9, v.count)}00` : 'bg-gray-200'
      }
    />
  );
}
