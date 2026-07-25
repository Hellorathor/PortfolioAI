import "./Skills.css";
import { getSkillIcon } from "../../utils/skillIcons"; // Adjust path if needed

function Skills({ profile }) {
  return (
    <section className="creative-skills" id="skills">
      <div className="skills-container">

        <div className="skills-heading">
          <span className="section-tag">My Skills</span>

          <h2>Technologies I Love Working With</h2>

          <p>
            I enjoy building modern, scalable and user-friendly
            applications using the latest technologies.
          </p>
        </div>

        {profile?.skills?.length > 0 ? (
          <div className="skills-grid">

            {profile.skills.map((skill, index) => {

              const Icon = getSkillIcon(skill);

              return (
                <div
                  key={index}
                  className="creative-skill-card"
                >

                  <div className="skill-icon">
                    {Icon ? <Icon /> : "⚡"}
                  </div>

                  <h3>{skill}</h3>

                </div>
              );

            })}

          </div>
        ) : (
          <div className="no-skills">
            <h3>No Skills Added</h3>
            <p>Skills will appear here after adding them.</p>
          </div>
        )}

      </div>
    </section>
  );
}

export default Skills;