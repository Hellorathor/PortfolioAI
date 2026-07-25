import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import WelcomeHero from "../../components/dashboard/WelcomeHero";
import StatsCards from "../../components/dashboard/StatsCards";
import PortfolioPreview from "../../components/dashboard/PortfolioPreview";
import RecentActivity from "../../components/dashboard/RecentActivity";

import { getDashboard } from "../../services/dashboardService";

import {
  generatePortfolio,
  publishPortfolio,
  getMyPortfolio,
} from "../../services/portfolioService";

import "../../assets/css/dashboard/dashboard.css";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);
  const [portfolio, setPortfolio] = useState(null);

  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    fetchDashboard();
    fetchPortfolio();
  }, []);

  const fetchDashboard = async () => {
    try {
      const data = await getDashboard();
      setDashboard(data.dashboard);
    } catch (error) {
      toast.error("Failed to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPortfolio = async () => {
    try {
      const data = await getMyPortfolio();
      setPortfolio(data.portfolio);
    } catch (error) {
      if (error.response?.status === 404) {
        setPortfolio(null);
      } else {
        console.error(error);
      }
    }
  };

  const handleGeneratePortfolio = async () => {
    try {
      setGenerating(true);

      const data = await generatePortfolio();

      setPortfolio(data.portfolio);
      fetchDashboard();

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Generation Failed");
    } finally {
      setGenerating(false);
    }
  };

  const handlePublishPortfolio = async () => {
    try {
      setPublishing(true);

      const data = await publishPortfolio();

      setPortfolio(data.portfolio);
      fetchDashboard();

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || "Publish Failed");
    } finally {
      setPublishing(false);
    }
  };

  const handleViewPortfolio = () => {
    if (!portfolio?.slug) return;

    window.open(`/portfolio/${portfolio.slug}`, "_blank");
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <h2>Loading Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <WelcomeHero completion={dashboard.profileCompletion} />

      <StatsCards dashboard={dashboard} />

      <div className="dashboard-grid">
        <PortfolioPreview
          portfolio={portfolio}
          onView={handleViewPortfolio}
        />
        <RecentActivity />
      </div>

      <div className="portfolio-actions">
        <button
          className="generate-btn"
          onClick={handleGeneratePortfolio}
          disabled={generating}
        >
          {generating ? "Generating..." : "Generate Portfolio"}
        </button>

        <button
          className="publish-btn"
          onClick={handlePublishPortfolio}
          disabled={publishing || !portfolio}
        >
          {publishing ? "Publishing..." : "Publish Portfolio"}
        </button>

        {portfolio?.published && (
          <button
            className="view-btn"
            onClick={handleViewPortfolio}
          >
            View Portfolio
          </button>
        )}
      </div>
    </div>
  );
}

export default Dashboard;