import "./Skills.css";

const Skills = ({ profile }) => {
  const skills = profile?.skills || [];

  return (
    <section className="dev-skills" id="skills">

      <div className="dev-skills-window">

        <div className="dev-skills-header">

          <div className="dev-skills-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>skills.js</span>

        </div>

        <div className="dev-skills-editor">

          <div className="dev-line-numbers">
            {Array.from({ length: 18 }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          <pre className="dev-code">

<span className="keyword">const</span>{" "}
<span className="variable">skills</span> = [

{skills.length > 0 ? (
  skills.map((skill, index) => (
    <span key={index}>
{"\n"}  <span className="string">"{skill}"</span>
      {index !== skills.length - 1 ? "," : ""}
    </span>
  ))
) : (
  <>
{"\n"}  <span className="string">"No Skills Added"</span>
  </>
)}

{"\n"}];

{"\n\n"}

<span className="keyword">export default</span>{" "}
<span className="variable">skills</span>;

          </pre>

        </div>

      </div>

    </section>
  );
};

export default Skills;