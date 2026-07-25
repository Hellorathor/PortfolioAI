import "./Experience.css";

function Experience({ experience }) {
  return (
    <section className="creative-experience" id="experience">
      <div className="experience-container">

        <div className="experience-heading">
          <span className="section-tag">
            Experience
          </span>

          <h2>Professional Journey</h2>

          <p>
            My professional experience, projects and the companies
            where I've contributed and grown as a developer.
          </p>
        </div>

        {experience?.length > 0 ? (

          <div className="timeline">

            {experience.map((exp, index) => (

              <div
                className="timeline-item"
                key={exp._id || index}
              >

                <div className="timeline-dot"></div>

                <div className="timeline-card">

                  <span className="timeline-date">
                    {exp.startDate || "Start"} - {exp.endDate || "Present"}
                  </span>

                  <h3>
                    {exp.position}
                  </h3>

                  <h4>
                    {exp.company}
                  </h4>

                  {exp.location && (
                    <p className="location">
                      📍 {exp.location}
                    </p>
                  )}

                  <p>
                    {exp.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-experience">

            <h3>No Experience Added</h3>

            <p>
              Add your work experience to showcase your journey.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Experience;