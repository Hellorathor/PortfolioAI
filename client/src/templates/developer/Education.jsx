import "./Education.css";

const Education = ({ education }) => {
  return (
    <section className="dev-education" id="education">

      <div className="edu-window">

        <div className="edu-header">

          <div className="edu-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>education</span>

        </div>

        <div className="edu-body">

          <aside className="edu-sidebar">

            <h4>EXPLORER</h4>

            <ul>

              {education?.length > 0 ? (

                education.map((item, index) => (

                  <li key={index}>
                    📄 {item.degree || "Education"}
                  </li>

                ))

              ) : (

                <li>📄 education.md</li>

              )}

            </ul>

          </aside>

          <div className="edu-content">

            {education?.length > 0 ? (

              education.map((item, index) => (

                <div className="edu-card" key={index}>

                  <h3>{item.degree}</h3>

                  <h4>{item.institution}</h4>

                  <p className="edu-field">
                    {item.fieldOfStudy}
                  </p>

                  {item.grade && (
                    <p className="edu-grade">
                      Grade : {item.grade}
                    </p>
                  )}

                  {item.description && (
                    <p className="edu-description">
                      {item.description}
                    </p>
                  )}

                </div>

              ))

            ) : (

              <p className="edu-empty">
                No education details available.
              </p>

            )}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;