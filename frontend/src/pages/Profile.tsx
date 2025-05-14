// src/pages/Profile.tsx
import { BarChart } from '@mui/x-charts';
import { useContainerWidth } from "@/hooks/useContainerWidth";
import Stats from '@/components/Profile/Stats';
import SessionHistory from '@/components/Profile/SessionHistory';
import BadgesDisplay from '@/components/Profile/BadgesDisplay';


const sessionData = [
    { day: "Thu", sessions: 2 },
    { day: "Fri", sessions: 4 },
    { day: "Sat", sessions: 1 },
    { day: "Sun", sessions: 3 },
    { day: "Mon", sessions: 5 },
    { day: "Tue", sessions: 2 },
    { day: "Wed", sessions: 3 },
  ];
  
  export default function Profile() {
    const { ref: containerRef, width } = useContainerWidth<HTMLDivElement>();

    return (
      <div className="lg:max-w-4xl max-w-2xl mx-auto px-6 pt-6 pb-16 bg-base-100">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:pt-4 sm:justify-between gap-4 mb-6">
        <div className="flex flex-col md:flex-row lg:gap-6 items-center gap-4">
            <div className="size-16 lg:size-20 bg-gray-300 rounded-full" />
            <div>
            <h2 className="text-xl font-bold">Username</h2>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Mood: Focused</p>
            </div>
        </div>
        <button className="btn btn-outline w-full sm:w-auto">Edit Profile</button>
        </div>

        {/* Stats */}
        <Stats/>
  
        {/* Bar Chart */}
            <div className="flex flex-col gap-5">
            <h3 className="text-lg font-semibold mb-2">7-Day Focus Sessions</h3>            
            <div ref={containerRef} className="w-full max-w-full h-[300px]">
                {width && (
                <BarChart
                    className='-translate-6'
                    width={Math.max(width, 340)}
                    height={300}
                    xAxis={[
                    {
                        id: "days",
                        data: sessionData.map((d) => d.day),
                        scaleType: "band",
                        label: "",
                        tickLabelStyle: { fill: "#9EADF5" },
                    },
                    ]}
                    yAxis={[
                    {
                        tickLabelStyle: { fill: "#9EADF5" },
                    },
                    ]}
                    series={[
                    {
                        data: sessionData.map((d) => d.sessions),
                        color: "#4631CD",
                    },
                    ]}
                    sx={{
                    "& .MuiChartsAxis-label, & .MuiChartsAxis-tickLabel": {
                        fill: "#9EADF5",
                    },
                    }}
                />
                )}
            </div>
            </div>
  
        {/* Recent Sessions */}
        <SessionHistory />        
  
        {/* Badges */}
        <BadgesDisplay />
      </div>
    );
  }
  