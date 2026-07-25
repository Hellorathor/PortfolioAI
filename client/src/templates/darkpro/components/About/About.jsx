import "./About.css";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaBriefcase,
} from "react-icons/fa";

const About = ({ profile, projects = [], experiences = [] }) => {
  const stats = [
    {
      value: experiences.length || "0",
      label: "Experience",
    },
    {
      value: projects.length || "0",
      label: "Projects",
    },
    {
      value: profile?.skills?.length || "0",
      label: "Skills",
    },
    {
      value: profile?.certificates?.length || "0",
      label: "Certificates",
    },
  ];

  return (
    <section className="dark-section" id="about">

      <h2 className="section-title">
        About Me
      </h2>

      <p className="section-subtitle">
        Get to know me better and explore my journey,
        experience, and technical expertise.
      </p>

      <div className="about-grid">

        <div className="about-card dark-card">

          <div className="about-avatar">

            {profile?.profileImage ? (
              <img
                src={profile.profileImage}
                alt="profile"
              />
            ) : (
              <FaUser />
            )}

          </div>

          <div className="about-content">

            <h3>{profile?.name}</h3>

            <p>
              {profile?.about ||
                "Passionate Full Stack Developer focused on building scalable and user-friendly applications."}
            </p>

          </div>

          <div className="info-grid">

            <div className="info-box">
              <FaMapMarkerAlt />
              <div>
                <span>Location</span>
                <strong>{profile?.location || "India"}</strong>
              </div>
            </div>

            <div className="info-box">
              <FaEnvelope />
              <div>
                <span>Email</span>
                <strong>{profile?.email}</strong>
              </div>
            </div>

            <div className="info-box">
              <FaBriefcase />
              <div>
                <span>Status</span>
                <strong>Open to Work</strong>
              </div>
            </div>

          </div>

        </div>

        <div className="stats-grid">

          {stats.map((item, index) => (

            <div className="stat-card dark-card" key={index}>

              <h2>{item.value}+</h2>

              <p>{item.label}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default About;