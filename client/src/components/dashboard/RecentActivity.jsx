import {
  FaUserEdit,
  FaFolderPlus,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";
import "../../assets/css/dashboard/recentActivity.css";

function RecentActivity() {
  const activities = [
    {
      icon: <FaUserEdit />,
      title: "Profile Updated",
      description: "Your profile information was updated.",
      time: "Today",
    },
    {
      icon: <FaFolderPlus />,
      title: "Project Added",
      description: "A new project was added to your portfolio.",
      time: "Yesterday",
    },
    {
      icon: <FaRobot />,
      title: "AI Content Generated",
      description: "AI generated your About section.",
      time: "2 days ago",
    },
    {
      icon: <FaGlobe />,
      title: "Portfolio Published",
      description: "Your portfolio is now live.",
      time: "3 days ago",
    },
  ];

  return (
    <div className="dashboard-card">
      <div className="card-header">
        <div>
          <h3>Recent Activity</h3>
          <p>Your latest updates</p>
        </div>
      </div>

      <div className="activity-list">
        {activities.map((item, index) => (
          <div className="activity-item" key={index}>
            <div className="activity-icon">
              {item.icon}
            </div>

            <div className="activity-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>

            <span className="activity-time">
              {item.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivity;