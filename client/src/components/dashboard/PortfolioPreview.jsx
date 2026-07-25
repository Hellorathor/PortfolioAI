import {
  FaGlobe,
  FaEye,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
import "../../assets/css/dashboard/portfolioPreview.css";

function PortfolioPreview({ portfolio, onView }) {
  return (
    <div className="dashboard-card portfolio-preview">
      <div className="card-header">
        <div>
          <h3 className="preview-title">Portfolio Preview</h3>
        </div>
       </div>
      
      <div className="portfolio-preview-box">
        <div className="portfolio-image">
         {portfolio?.published ? (
        <iframe
         title="Portfolio Preview"
         src={`/portfolio/${portfolio.slug}`}
         className="portfolio-frame"
      />
     ) : (
     <div className="preview-placeholder">
      <FaGlobe />
      <p>Portfolio Preview</p>
      <span>Your portfolio will appear here after publishing.</span>
    </div>
  )}
</div>

        <div className="portfolio-info">

          <h4>
            {portfolio?.template || "Modern"}
          </h4>

          <div className="portfolio-status">

            {portfolio?.published ? (
              <>
                <FaCheckCircle className="published" />
                <span>Published</span>
              </>
            ) : (
              <>
                <FaClock className="draft" />
                <span>Draft</span>
              </>
            )}

          </div>

          <p className="portfolio-url">
            {portfolio?.slug
              ? `portfolioai.com/${portfolio.slug}`
              : "Portfolio not generated yet"}
          </p>

          {portfolio?.published && (
            <button
              className="preview-btn"
              onClick={onView}
            >
              <FaEye />
              View Portfolio
            </button>
          )}

        </div>
      </div>
    </div>
  );
}

export default PortfolioPreview;