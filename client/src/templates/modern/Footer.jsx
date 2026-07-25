import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-logo">
          PortfolioAI
        </h2>

        <p className="footer-text">
          Build. Showcase. Get Hired.
        </p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#">Back to Top ↑</a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} PortfolioAI. Built with ❤️ using MERN Stack.
        </p>

      </div>
    </footer>
  );
}

export default Footer;