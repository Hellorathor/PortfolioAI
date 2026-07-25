import "./Hero.css";

const Hero = ({ profile }) => {
  return (
    <section className="glass-hero">
      <div className="glass-bg">
        <span className="blob blob1"></span>
        <span className="blob blob2"></span>
        <span className="blob blob3"></span>
      </div>

      <div className="glass-hero-container">

        <div className="glass-left">

          <span className="glass-badge">
            👋 Welcome to my Portfolio
          </span>

          <h1>
            Hi, I'm <span>{profile?.name || "Your Name"}</span>
          </h1>

          <h2>
            {profile?.headline || profile?.designation || "MERN Stack Developer"}
          </h2>

          <p>
            {profile?.about ||
              "Passionate developer building modern web applications using the MERN Stack."}
          </p>

          <div className="glass-info">
            <span>📍 {profile?.location || "India"}</span>
            <span>💼 {profile?.availability || "Open to Work"}</span>
          </div>

          <div className="glass-buttons">
            {profile?.resumeUrl && (
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Download Resume
              </a>
            )}

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

        </div>

        <div className="glass-right">

          <div className="glass-image-card">

            <img
              src={
                profile?.avatar?.url ||
                "https://via.placeholder.com/350"
              }
              alt={profile?.name}
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;