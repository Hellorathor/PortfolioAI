import "./Footer.css";

const Footer = ({ profile }) => {
  const social = profile?.socialLinks || {};

  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="glass-footer">

      <div className="glass-footer-container">

        <div className="glass-footer-brand">

          <h2>{profile?.name || "Portfolio"}</h2>

          <p>
            {profile?.headline ||
              profile?.designation ||
              "Full Stack Developer"}
          </p>

          <span>
            Building modern, scalable and beautiful web experiences.
          </span>

        </div>

        <div className="glass-footer-links">

          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="glass-footer-social">

          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}

          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          )}

          {social.website && (
            <a
              href={social.website}
              target="_blank"
              rel="noreferrer"
            >
              Website
            </a>
          )}

          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
          )}

        </div>

      </div>

      <div className="glass-footer-bottom">

        <p>
          © {currentYear} {profile?.name || "Portfolio"} • Built with ❤️ using
          PortfolioAI
        </p>

        <button
          className="glass-top-btn"
          onClick={scrollToTop}
        >
          ↑
        </button>

      </div>

    </footer>
  );
};

export default Footer;