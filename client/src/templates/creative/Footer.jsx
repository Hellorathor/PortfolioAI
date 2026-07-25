import "./Footer.css";

function Footer({ profile }) {
  const social = profile?.socialLinks || {};

  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="creative-footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-brand">

          <h2>
            {profile?.name || "Portfolio"}
          </h2>

          <p>
            {profile?.headline ||
              "Full Stack Developer"}
          </p>

        </div>

        {/* Center */}

        <div className="footer-links">

          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#projects">Projects</a>

          <a href="#experience">Experience</a>

          <a href="#education">Education</a>

          <a href="#contact">Contact</a>

        </div>

        {/* Right */}

        <div className="footer-social">

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

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {year} {profile?.name || "Portfolio"}.
          All Rights Reserved.
        </p>

        <p>
          Designed & Built with ❤️ using React
        </p>

      </div>

      <button
        className="scroll-top-btn"
        onClick={scrollToTop}
      >
        ↑
      </button>

    </footer>
  );
}

export default Footer;