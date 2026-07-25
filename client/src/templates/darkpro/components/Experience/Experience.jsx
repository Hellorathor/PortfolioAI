import "./Experience.css";
import { FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";

const formatDate = (date) => {
  if (!date) return "Present";

  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
};

const Experience = ({ experiences = [] }) => {
  return (
    <section className="dark-section" id="experience">

      <h2 className="section-title">
        Experience
      </h2>

      <p className="section-subtitle">
        My professional journey and the companies where I've contributed to
        impactful projects.
      </p>

      <div className="timeline">

        {experiences.length > 0 ? (
          experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-card dark-card">

                <div className="timeline-header">

                  <div className="company-logo">
                    {exp.company?.charAt(0) || "C"}
                  </div>

                  <div>

                    <h3>{exp.position}</h3>

                    <h4>{exp.company}</h4>

                    <span>
                      {formatDate(exp.startDate)} -{" "}
                      {exp.current
                        ? "Present"
                        : formatDate(exp.endDate)}
                    </span>

                  </div>

                </div>

                {exp.location && (
                  <p className="timeline-location">
                    <FaMapMarkerAlt />
                    {exp.location}
                  </p>
                )}

                {exp.description && (
                  <p className="timeline-description">
                    {exp.description}
                  </p>
                )}

                {exp.technologies?.length > 0 && (

                  <div className="tech-stack">

                    {exp.technologies.map((tech, i) => (
                      <span key={i}>
                        {tech}
                      </span>
                    ))}

                  </div>

                )}

              </div>

            </div>
          ))
        ) : (
          <div className="timeline-empty dark-card">

            <FaBriefcase />

            <h3>No Experience Added</h3>

            <p>
              Add your professional experience to showcase your career journey.
            </p>

          </div>
        )}

      </div>

    </section>
  );
};

export default Experience;