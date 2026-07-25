import "./About.css";

function About({ profile }) {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>About Me</h2>

        <p>
          {profile.about || "No information available."}
        </p>

        <div className="about-info">
          <div>
            <strong>📍 Location</strong>
            <span>{profile.location || "N/A"}</span>
          </div>

          <div>
            <strong>💼 Availability</strong>
            <span>{profile.availability || "N/A"}</span>
          </div>

          <div>
            <strong>👨‍💻 Role</strong>
            <span>{profile.headline || "N/A"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;