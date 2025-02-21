const ActivityTable = () => {
    const activities = [
      { id: 1, user: "Alice", action: "Logged in", time: "2 hours ago" },
      { id: 2, user: "Bob", action: "Updated profile", time: "3 hours ago" },
      { id: 3, user: "Charlie", action: "Added a new post", time: "5 hours ago" },
    ];
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">User</th>
              <th className="p-2">Action</th>
              <th className="p-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity.id} className="border-t">
                <td className="p-2">{activity.user}</td>
                <td className="p-2">{activity.action}</td>
                <td className="p-2">{activity.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ActivityTable;
  