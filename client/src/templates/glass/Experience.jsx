import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <section className="glass-experience" id="experience">
      <div className="glass-experience-container">

        <div className="glass-section-title">
          <span>EXPERIENCE</span>
          <h2>Professional Journey</h2>
          <p>
            My work experience, responsibilities and contributions throughout
            my career.
          </p>
        </div>

        {experience?.length > 0 ? (
          <div className="glass-timeline">

            {experience.map((item, index) => (
              <div
                className="glass-timeline-item"
                key={index}
              >

                <div className="glass-timeline-dot"></div>

                <div className="glass-experience-card">

                  <div className="glass-card-top">

                    <div>

                      <h3>{item.role}</h3>

                      <h4>{item.company}</h4>

                    </div>

                    <span className="glass-date">

                      {item.startDate
                        ? new Date(item.startDate).getFullYear()
                        : ""}

                      {" - "}

                      {item.currentlyWorking
                        ? "Present"
                        : item.endDate
                        ? new Date(item.endDate).getFullYear()
                        : "Present"}

                    </span>

                  </div>

                  <p className="glass-location">
                    📍 {item.location || "Location Not Available"}
                  </p>

                  <p className="glass-description">
                    {item.description}
                  </p>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <p className="glass-empty">
            No experience added yet.
          </p>
        )}

      </div>
    </section>
  );
};

export default Experience;