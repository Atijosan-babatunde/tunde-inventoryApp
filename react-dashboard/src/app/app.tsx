import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import AnalyticsCard from "./components/AnalyticsCard";
import ActivityTable from "./components/ActivityTable";
import UserProfile from "./components/UserProfile";
import { BarChart, Users, CheckCircle } from "lucide-react";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <Header />
        <div className="grid grid-cols-3 gap-4 mt-6">
          <AnalyticsCard title="Users" value="1,230" icon={<Users />} />
          <AnalyticsCard title="Revenue" value="$15,500" icon={<BarChart />} />
          <AnalyticsCard title="Tasks Completed" value="87%" icon={<CheckCircle />} />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <UserProfile />
          <div className="col-span-2">
            <ActivityTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
