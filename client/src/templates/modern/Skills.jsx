import "./Skills.css";
import { getSkillIcon } from "../../utils/skillIcons"; // Change path if needed

function Skills({ profile }) {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <h2>Technical Skills</h2>

        <p className="skills-text">
          Technologies and tools I use to build modern applications.
        </p>

        <div className="skills-grid">
          {profile?.skills?.length > 0 ? (
            profile.skills.map((skill, index) => {
              const Icon = getSkillIcon(skill);

              return (
                <div
                  className="skill-chip"
                  key={index}
                >
                  <div className="skill-icon">
                    {Icon ? <Icon /> : "⚡"}
                  </div>

                  <span className="skill-name">
                    {skill}
                  </span>
                </div>
              );
            })
          ) : (
            <div className="no-skills">
              <h3>No Skills Added</h3>
              <p>Skills will appear here once they are added.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skills;