import * as CalendarHeatmapModule from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const CalendarHeatmap = CalendarHeatmapModule.default || CalendarHeatmapModule;

export default function GoalHeatmap() {
  const values = [
    { date: '2025-05-01', count: 1 },
    { date: '2025-05-02', count: 0 },
  ];

  return (
    <CalendarHeatmap
      startDate={new Date('2025-04-01')}
      endDate={new Date('2025-05-31')}
      values={values}
      classForValue={(v) =>
        v && v.count ? `bg-green-${Math.min(9, v.count)}00` : 'bg-gray-200'
      }
    />
  );
}
