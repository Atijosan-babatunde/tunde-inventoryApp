import { useState } from "react";
import { Home, BarChart2, User, Settings } from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: <Home /> },
    { name: "Analytics", icon: <BarChart2 /> },
    { name: "Profile", icon: <User /> },
    { name: "Settings", icon: <Settings /> },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Inventory Application</h2>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-2 p-3 rounded-md cursor-pointer ${
              active === item.name ? "bg-blue-600" : "hover:bg-gray-700"
            }`}
          >
            {item.icon}
            {item.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
