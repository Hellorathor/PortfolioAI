import "./Education.css";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).getFullYear();
};

const Education = ({ education = [] }) => {
  return (
    <section className="dark-section" id="education">

      <h2 className="section-title">
        Education
      </h2>

      <p className="section-subtitle">
        My academic background and educational achievements.
      </p>

      <div className="education-list">

        {education.length > 0 ? (

          education.map((item, index) => (

            <div
              className="education-card dark-card"
              key={index}
            >

              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-content">

                <h3>{item.degree}</h3>

                <h4>{item.school}</h4>

                <p>{item.field}</p>

                <span>
                  <FaCalendarAlt />
                  {formatDate(item.startDate)} -{" "}
                  {item.current
                    ? "Present"
                    : formatDate(item.endDate)}
                </span>

              </div>

            </div>

          ))

        ) : (

          <div className="education-empty dark-card">

            <FaGraduationCap />

            <h3>No Education Added</h3>

          </div>

        )}

      </div>

    </section>
  );
};

export default Education;