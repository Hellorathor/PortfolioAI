import "./Education.css";

function Education({ profile }) {
  if (!profile?.education?.length) return null;

  return (
    <section className="education">
      <div className="container">

        <div className="section-title">
          <h2>Education</h2>
          <p>My academic journey and qualifications.</p>
        </div>

        <div className="education-grid">

          {profile.education.map((edu, index) => (
            <div className="education-card" key={index}>

              <h3>{edu.degree}</h3>

              <h4>{edu.institution}</h4>

              <p className="education-field">
                {edu.fieldOfStudy}
              </p>

              <span className="education-year">
                {edu.startYear} - {edu.endYear || "Present"}
              </span>

              {edu.grade && (
                <div className="education-grade">
                  Grade / CGPA : {edu.grade}
                </div>
              )}

              {edu.description && (
                <p className="education-description">
                  {edu.description}
                </p>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;