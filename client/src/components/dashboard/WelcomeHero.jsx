import { FaArrowRight, FaChartLine, FaMagic } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../assets/css/dashboard/welcomeHero.css";

function WelcomeHero({ completion = 0 }) {
  return (
    <section className="welcome-hero">

      <div className="hero-bg-circle circle-1"></div>
      <div className="hero-bg-circle circle-2"></div>

      <div className="welcome-content">

        <div className="welcome-top">

          <span className="welcome-badge">
            🚀 PortfolioAI Workspace
          </span>

          <div className="completion-pill">
            <FaChartLine />
            <span>{completion}% Complete</span>
          </div>

        </div>

        <h2>
          Welcome Back 👋
        </h2>

        <p>
          Build, customize and publish your AI-powered portfolio from one
          dashboard. Complete your profile to unlock every feature and create a
          portfolio that stands out.
        </p>

        <div className="progress-section">

          <div className="progress-top">
            <span>Portfolio Completion</span>
            <strong>{completion}%</strong>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completion}%` }}
            />
          </div>

        </div>

        <div className="hero-tip">
          <FaMagic />
          <span>
            AI Tip: Complete your profile to generate better portfolio content.
          </span>
        </div>

      </div>

      <div className="welcome-action">

        <Link
          to="/profile"
          className="continue-btn"
        >
          Continue Building
          <FaArrowRight />
        </Link>

      </div>

    </section>
  );
}

export default WelcomeHero;