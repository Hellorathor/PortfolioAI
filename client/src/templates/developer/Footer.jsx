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
    <footer className="dev-footer">

      <div className="footer-terminal">

        <div className="footer-header">

          <div className="footer-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>terminal</span>

        </div>

        <div className="footer-body">

          <p>
            <span className="prompt">$</span> portfolio --version
          </p>

          <p className="success">
            PortfolioAI v1.0.0
          </p>

          <p>
            <span className="prompt">$</span> whoami
          </p>

          <p className="output">
            {profile?.name || "Developer"}
          </p>

          <p>
            <span className="prompt">$</span> echo "Thanks for visiting!"
          </p>

          <p className="output">
            Feel free to connect with me.
          </p>

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

          <div className="footer-bottom">

            <p>
              © {currentYear} {profile?.name || "Developer"} • Compiled Successfully ✔
            </p>

            <button
              className="scroll-top-btn"
              onClick={scrollToTop}
            >
              ↑
            </button>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;