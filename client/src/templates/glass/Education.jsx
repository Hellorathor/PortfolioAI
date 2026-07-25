import "./Education.css";

const Education = ({ education }) => {
  return (
    <section className="glass-education" id="education">
      <div className="glass-education-container">

        <div className="glass-section-title">
          <span>EDUCATION</span>
          <h2>Academic Background</h2>
          <p>
            My educational journey and the qualifications that built my
            technical foundation.
          </p>
        </div>

        {education?.length > 0 ? (
          <div className="glass-education-grid">

            {education.map((item, index) => (
              <div
                className="glass-education-card"
                key={index}
              >
                <div className="glass-edu-icon">
                  🎓
                </div>

                <h3>{item.degree}</h3>

                <h4>{item.institution}</h4>

                <p className="glass-field">
                  {item.fieldOfStudy}
                </p>

                {item.grade && (
                  <div className="glass-grade">
                    Grade : {item.grade}
                  </div>
                )}

                {item.description && (
                  <p className="glass-edu-description">
                    {item.description}
                  </p>
                )}
              </div>
            ))}

          </div>
        ) : (
          <p className="glass-empty">
            No education details available.
          </p>
        )}

      </div>
    </section>
  );
};

export default Education;