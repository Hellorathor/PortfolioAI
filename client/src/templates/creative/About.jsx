import "./About.css";

function About({ profile }) {
  return (
    <section className="creative-about" id="about">
      <div className="about-container">

        <div className="about-left">

          <span className="section-tag">
            About Me
          </span>

          <h2>
            Passionate Developer Creating Modern Digital Experiences
          </h2>

          <p>
            {profile?.about ||
              "I enjoy building responsive, scalable and user-friendly applications using modern web technologies. I love solving real-world problems through clean code and beautiful user interfaces."}
          </p>

          <div className="about-details">

            {profile?.location && (
              <div className="detail">
                <span>📍</span>
                <div>
                  <h4>Location</h4>
                  <p>{profile.location}</p>
                </div>
              </div>
            )}

            {profile?.availability && (
              <div className="detail">
                <span>💼</span>
                <div>
                  <h4>Availability</h4>
                  <p>{profile.availability}</p>
                </div>
              </div>
            )}

          </div>

        </div>

        <div className="about-right">

          <div className="info-card">
            <h3>🚀 Mission</h3>

            <p>
              Build impactful applications that are fast,
              scalable and easy to use.
            </p>
          </div>

          <div className="info-card">
            <h3>💡 Passion</h3>

            <p>
              Learning new technologies, solving challenging
              problems and improving every day.
            </p>
          </div>

          <div className="info-card">
            <h3>🎯 Goal</h3>

            <p>
              Join an innovative company where I can contribute,
              learn and grow as a software engineer.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;