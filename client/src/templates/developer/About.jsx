import "./About.css";

const About = ({ profile }) => {
  const languages = profile?.languages || [];

  return (
    <section className="dev-about" id="about">

      <div className="dev-about-window">

        <div className="dev-about-header">

          <div className="dev-about-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>about.js</span>

        </div>

        <div className="dev-about-editor">

          <div className="line-numbers">
            {Array.from({ length: 15 }, (_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          <pre className="code-block">
<span className="keyword">const</span> <span className="variable">aboutMe</span> = {"{"}

{"\n"}  <span className="property">name</span>: <span className="string">"{profile?.name}"</span>,

{"\n"}  <span className="property">designation</span>: <span className="string">"{profile?.designation || profile?.headline}"</span>,

{"\n"}  <span className="property">location</span>: <span className="string">"{profile?.location}"</span>,

{"\n"}  <span className="property">availability</span>: <span className="string">"{profile?.availability}"</span>,

{"\n"}  <span className="property">languages</span>: [

{languages.length > 0
  ? languages.map((lang, index) => (
      <span key={index}>
{"\n"}    <span className="string">"{lang}"</span>{index !== languages.length - 1 ? "," : ""}
      </span>
    ))
  : (
      <>
{"\n"}    <span className="string">"English"</span>
      </>
    )}

{"\n"}  ],

{"\n"}  <span className="property">about</span>: <span className="string">`{profile?.about || "No information available."}`</span>

{"\n"}{"}"};

          </pre>

        </div>

      </div>

    </section>
  );
};

export default About;