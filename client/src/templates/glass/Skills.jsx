import "./Skills.css";
import { getSkillIcon } from "../../utils/skillIcons"; // Change path if needed

const Skills = ({ profile }) => {
  const skills = profile?.skills || [];

  return (
    <section className="glass-skills" id="skills">
      <div className="glass-skills-container">

        <div className="glass-section-title">
          <span>MY SKILLS</span>
          <h2>Technologies I Work With</h2>
          <p>
            My technical toolkit for building modern, scalable and
            high-performance web applications.
          </p>
        </div>

        <div className="glass-skills-grid">
          {skills.length > 0 ? (
            skills.map((skill, index) => {

              const Icon = getSkillIcon(skill);

              return (
                <div className="glass-skill-card" key={index}>

                  <div className="glass-skill-icon">
                    {Icon ? <Icon /> : "💻"}
                  </div>

                  <h3>{skill}</h3>

                  <div className="glass-progress">
                    <div
                      className="glass-progress-fill"
                      style={{
                        width: `${80 + (index % 5) * 4}%`,
                      }}
                    ></div>
                  </div>

                </div>
              );

            })
          ) : (
            <p className="glass-empty">
              No skills added yet.
            </p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;