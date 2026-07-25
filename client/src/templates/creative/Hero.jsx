import "./Hero.css";

function Hero({ profile }) {
  return (
    <section className="creative-hero">
      {/* Background Effects */}
      <div className="creative-bg">
        <span className="blob blob-1"></span>
        <span className="blob blob-2"></span>
        <span className="blob blob-3"></span>
      </div>

      <div className="creative-container">
        {/* Left Content */}
        <div className="creative-left">
          <span className="creative-badge">
            👋 Welcome to my Portfolio
          </span>

          <h3>Hello, I'm</h3>

          <h1>
            {profile?.name || "Your Name"}
          </h1>

          <h2>
            {profile?.headline || "Full Stack Developer"}
          </h2>

          <p>
            {profile?.about ||
              "Passionate developer focused on building modern, scalable and user-friendly web applications."}
          </p>

          <div className="creative-info">
            {profile?.location && (
              <span>📍 {profile.location}</span>
            )}

            {profile?.availability && (
              <span className="available">
                🟢 {profile.availability}
              </span>
            )}
          </div>

          <div className="creative-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            {profile?.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Download Resume
              </a>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="creative-right">
          <div className="creative-image-card">
            <img
              src={
                profile?.avatar?.url ||
                "https://placehold.co/500x500?text=Profile"
              }
              alt={profile?.name || "Profile"}
            />
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <span>Scroll Down</span>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;