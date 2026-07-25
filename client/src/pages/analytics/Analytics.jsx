import { useEffect, useState } from "react";
import {
  FaEye,
  FaUsers,
  FaClock,
  FaGlobe,
} from "react-icons/fa";
import { getMyPortfolio } from "../../services/portfolioService.js";
import { getAnalytics } from "../../services/analyticsService.js";
import "./Analytics.css";

const Analytics = () => {
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      // Get Logged-in Portfolio
      const portfolioData = await getMyPortfolio();

      if (!portfolioData?.portfolio) {
        return;
      }

      setPortfolio(portfolioData.portfolio);

      // Get Analytics
      const analyticsData = await getAnalytics(
        portfolioData.portfolio._id
      );

      setAnalytics(analyticsData.analytics);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="analytics-loading">
        Loading Analytics...
      </div>
    );
  }

  return (
    <div className="analytics-page">

      <div className="analytics-header">
        <h1>Portfolio Analytics</h1>
        <p>
          Track your portfolio performance and visitor insights.
        </p>
      </div>

      <div className="analytics-grid">

        <div className="analytics-card">
          <FaEye className="analytics-icon" />
          <h3>Total Views</h3>
          <h2>{analytics?.totalViews || 0}</h2>
        </div>

        <div className="analytics-card">
          <FaUsers className="analytics-icon" />
          <h3>Unique Visitors</h3>
          <h2>{analytics?.uniqueVisitors || 0}</h2>
        </div>

        <div className="analytics-card">
          <FaClock className="analytics-icon" />
          <h3>Last Viewed</h3>
          <h2>
            {analytics?.lastViewed
              ? new Date(
                  analytics.lastViewed
                ).toLocaleString()
              : "No Views Yet"}
          </h2>
        </div>

        <div className="analytics-card">
          <FaGlobe className="analytics-icon" />
          <h3>Portfolio Status</h3>
          <h2>
            {portfolio?.published
              ? "Published"
              : "Draft"}
          </h2>
        </div>

      </div>

    </div>
  );
};

export default Analytics;