import Navbar from "@/layouts/Navbar";
import StreakCounter from "@/components/Profile/StreakCounter";
import SessionHistory from "@/components/Profile/SessionHistory";
import ProductivityChart from "@/components/Profile/ProductivityChart";
import BadgesDisplay from "@/components/Profile/BadgesDisplay";
import GoalHeatmap from "@/components/Profile/GoalHeatmap";

export default function Profile() {
  return (
    <div className="min-h-screen dark:bg-zinc-900">
      <Navbar/>
      <main className="p-6 max-w-3xl mx-auto space-y-8">

        <section>
          <h2 className="text-xl font-semibold mb-2">📋 Session History</h2>
          <SessionHistory/>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📈 Weekly Productivity</h2>
           <ProductivityChart/> 
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🏅 Badges</h2>
          <BadgesDisplay/>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">📅 Goal Heatmap</h2>
         {/* <GoalHeatmap/>*/}
        </section>
      </main>
    </div>
  );
}
