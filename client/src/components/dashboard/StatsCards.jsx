import {
  FaUser,
  FaFolderOpen,
  FaRobot,
  FaGlobe,
} from "react-icons/fa";
import "../../assets/css/dashboard/statsCards.css";

function StatsCards({ dashboard }) {
  const stats = [
    {
      title: "Profile",
      value: `${dashboard.profileCompletion}%`,
      subtitle: "Completion",
      icon: <FaUser />,
      color: "blue",
    },
    {
      title: "Projects",
      value: dashboard.totalProjects,
      subtitle: "Total Projects",
      icon: <FaFolderOpen />,
      color: "green",
    },
    {
      title: "AI",
      value: dashboard.aiGenerations,
      subtitle: "AI Generations",
      icon: <FaRobot />,
      color: "purple",
    },
    {
      title: "Portfolio",
      value: dashboard.portfolioStatus,
      subtitle: "Current Status",
      icon: <FaGlobe />,
      color: "orange",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item) => (
        <div className="stats-card" key={item.title}>
          <div className={`stats-icon ${item.color}`}>
            {item.icon}
          </div>

          <div className="stats-content">
            <span>{item.title}</span>

            <h2>{item.value}</h2>

            <small>{item.subtitle}</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;