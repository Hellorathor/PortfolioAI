import "./About.css";

const About = ({ profile }) => {
  return (
    <section className="glass-about" id="about">
      <div className="glass-about-container">

        <div className="glass-about-card">

          <div className="glass-about-header">
            <span>ABOUT ME</span>
            <h2>Know Me Better</h2>
          </div>

          <p className="glass-about-text">
            {profile?.about ||
              "I am a passionate full stack developer who enjoys building modern, scalable and user-friendly web applications using the latest technologies."}
          </p>

          <div className="glass-about-details">

            <div className="glass-detail-card">
              <h4>📍 Location</h4>
              <p>{profile?.location || "Not Available"}</p>
            </div>

            <div className="glass-detail-card">
              <h4>💼 Availability</h4>
              <p>{profile?.availability || "Open to Opportunities"}</p>
            </div>

            <div className="glass-detail-card">
              <h4>💻 Role</h4>
              <p>{profile?.designation || profile?.headline}</p>
            </div>

            <div className="glass-detail-card">
              <h4>🌐 Languages</h4>
              <p>
                {profile?.languages?.length
                  ? profile.languages.join(", ")
                  : "English"}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;