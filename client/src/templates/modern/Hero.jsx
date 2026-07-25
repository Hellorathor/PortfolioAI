import "./Hero.css";

function Hero({ profile }) {
  return (
    <section className="hero">
      <div className="hero-left">

        <span className="hero-badge">
          👋 Welcome to my Portfolio
        </span>

        <h1>
          {profile.name || "Your Name"}
        </h1>

        <h2>
          {profile.headline || "Software Developer"}
        </h2>

        <p className="hero-description">
          {profile.about ||
            "Passionate developer focused on building modern, scalable and user-friendly web applications."}
        </p>

        <div className="hero-info">

          {profile.location && (
            <div className="info-item">
              📍 <span>{profile.location}</span>
            </div>
          )}

          {profile.availability && (
            <div className="info-item available">
              🟢 <span>{profile.availability}</span>
            </div>
          )}

        </div>

        <div className="hero-buttons">

          <a href="#contact" className="btn-primary">
            Contact Me
          </a>

          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              Download Resume
            </a>
          )}

        </div>

      </div>

      <div className="hero-right">

        <div className="hero-image">

          <img
            src={
              profile.avatar?.url ||
              "https://placehold.co/500x500?text=Profile"
            }
            alt={profile.name || "Profile"}
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;