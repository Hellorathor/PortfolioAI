import { useEffect, useState } from "react";
import "../../assets/css/pages/portfolio/Portfolio.css";

import {
  generatePortfolio,
  publishPortfolio,
  getMyPortfolio,
} from "../../services/portfolioService";

function Portfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [generating, setGenerating] = useState(false);
  const [publishing, setPublishing] = useState(false);

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const data = await getMyPortfolio();
      setPortfolio(data.portfolio);
    } catch (error) {
      console.log(error);
      setPortfolio(null);
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = async () => {
    try {
      setGenerating(true);

      await generatePortfolio();

      await fetchPortfolio();
    } catch (error) {
      console.log(error);
      alert("Failed to generate portfolio.");
    } finally {
      setGenerating(false);
    }
  };

  const handlePublish = async () => {
    try {
      setPublishing(true);

      await publishPortfolio();

      await fetchPortfolio();

      alert("Portfolio published successfully.");
    } catch (error) {
      console.log(error);
      alert("Failed to publish portfolio.");
    } finally {
      setPublishing(false);
    }
  };

  const handlePreview = () => {
    if (!portfolio?.slug) return;

    window.open(`/portfolio/${portfolio.slug}`, "_blank");
  };

  const handleCopy = async () => {
    if (!portfolio?.slug) return;

    const link = `${window.location.origin}/portfolio/${portfolio.slug}`;

    await navigator.clipboard.writeText(link);

    alert("Portfolio link copied.");
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="portfolio-page">

      <div className="portfolio-header">

        <h1>Portfolio Management</h1>

        <p>
          Generate, publish and share your professional portfolio.
        </p>

      </div>

      <div className="portfolio-card">

        <div className="portfolio-info">

          <div className="info-box">
            <span>Status</span>

            <h3>
              {portfolio?.published ? "Published" : "Draft"}
            </h3>
          </div>

          <div className="info-box">
            <span>Template</span>

            <h3>
              {portfolio?.template || "Modern"}
            </h3>
          </div>

          <div className="info-box">
            <span>Portfolio URL</span>

            <h3>
              {portfolio?.slug
                ? `/portfolio/${portfolio.slug}`
                : "Not Generated"}
            </h3>
          </div>

        </div>

        <div className="portfolio-actions">

          <button
            onClick={handleGenerate}
            disabled={generating}
          >
            {generating
              ? "Generating..."
              : "Generate Portfolio"}
          </button>

          {portfolio?.slug && (
            <>
              <button onClick={handlePreview}>
                Preview
              </button>

              <button
                onClick={handlePublish}
                disabled={publishing}
              >
                {publishing
                  ? "Publishing..."
                  : "Publish"}
              </button>

              <button onClick={handleCopy}>
                Copy Link
              </button>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Portfolio;