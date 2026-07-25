import React from "react";
import "./Experience.css";

const Experience = ({ profile }) => {
  if (!profile?.experience?.length) return null;
  

  return (
    <section className="experience section">
      <div className="container">

        <div className="section-title">
          <h2>Experience</h2>
          <p>Professional journey and work experience.</p>
        </div>

        <div className="timeline">

          {profile.experience.map((exp, index) => (

            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-content">

                <div className="timeline-header">

                  <h3>{exp.position}</h3>

                  {exp.current && (
                    <span className="current-badge">
                      Current
                    </span>
                  )}

                </div>

                <h4>{exp.company}</h4>

                <span className="timeline-date">

                  {exp.startDate
                    ? new Date(exp.startDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : ""}

                  {" - "}

                  {exp.current
                    ? "Present"
                    : exp.endDate
                    ? new Date(exp.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })
                    : ""}

                </span>

                {exp.description && (
                  <p>{exp.description}</p>
                )}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;