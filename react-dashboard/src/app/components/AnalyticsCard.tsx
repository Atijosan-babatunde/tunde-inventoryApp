import { FC } from "react";

interface AnalyticsCardProps {
  title: string;
  value: string;
  icon: JSX.Element;
}

const AnalyticsCard: FC<AnalyticsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex items-center gap-3">
      <div className="text-blue-600">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default AnalyticsCard;
