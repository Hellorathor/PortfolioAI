import "./Skills.css";

import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

const iconMap = {
  React: <FaReact />,
  JavaScript: <SiJavascript />,
  NodeJS: <FaNodeJs />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  MySQL: <SiMysql />,
  AWS: <FaAws />,
  Git: <FaGitAlt />,
  Docker: <FaDocker />,
  Tailwind: <SiTailwindcss />,
};

const Skills = ({ profile }) => {
  const skills = profile?.skills || [];

  return (
    <section className="dark-section" id="skills">

      <h2 className="section-title">
        Skills & Technologies
      </h2>

      <p className="section-subtitle">
        Technologies I use to build modern, scalable and secure applications.
      </p>

      <div className="skills-grid">

        {skills.length > 0 ? (
          skills.map((skill, index) => {

            const level =
              skill.level ||
              Math.floor(Math.random() * 20) + 80;

            return (
              <div className="skill-card dark-card" key={index}>

                <div className="skill-top">

                  <div className="skill-icon">
                    {iconMap[skill.name] || "💻"}
                  </div>

                  <div className="skill-info">

                    <h3>{skill.name}</h3>

                    <span>{level}%</span>

                  </div>

                </div>

                <div className="progress">

                  <div
                    className="progress-fill"
                    style={{
                      width: `${level}%`,
                    }}
                  ></div>

                </div>

              </div>
            );
          })
        ) : (
          <div className="skills-empty dark-card">

            <h3>No Skills Added</h3>

            <p>
              Add your skills from the dashboard to display them here.
            </p>

          </div>
        )}

      </div>

    </section>
  );
};

export default Skills;