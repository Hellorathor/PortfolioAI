import "./Education.css";

function Education({ education }) {
  return (
    <section className="creative-education" id="education">
      <div className="education-container">

        <div className="education-heading">
          <span className="section-tag">
            Education
          </span>

          <h2>Academic Journey</h2>

          <p>
            My educational background has helped me build a strong
            foundation in computer science and software development.
          </p>
        </div>

        {education?.length > 0 ? (

          <div className="education-grid">

            {education.map((item, index) => (

              <div
                className="education-card"
                key={item._id || index}
              >

                <div className="education-icon">
                  🎓
                </div>

                <span className="education-duration">
                  {item.startYear} - {item.endYear || "Present"}
                </span>

                <h3>
                  {item.degree}
                </h3>

                <h4>
                  {item.institution}
                </h4>

                {item.fieldOfStudy && (
                  <p className="field">
                    {item.fieldOfStudy}
                  </p>
                )}

                {item.grade && (
                  <div className="grade">
                    ⭐ {item.grade}
                  </div>
                )}

                {item.description && (
                  <p className="education-description">
                    {item.description}
                  </p>
                )}

              </div>

            ))}

          </div>

        ) : (

          <div className="no-education">

            <h3>No Education Added</h3>

            <p>
              Your education details will appear here.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Education;