import "./Hero.css";

const Hero = ({ profile }) => {
  return (
    <section className="dev-hero" id="home">

      <div className="dev-window">

        <div className="dev-titlebar">

          <div className="dev-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <div className="dev-filename">
            profile.js
          </div>

        </div>

        <div className="dev-body">

          <aside className="dev-sidebar">

            <h4>EXPLORER</h4>

            <ul>
              <li>📁 src</li>
              <li>📁 assets</li>
              <li>📁 components</li>
              <li>📁 pages</li>
              <li className="active">📄 profile.js</li>
            </ul>

          </aside>

          <div className="dev-editor">

            <pre>

<span className="keyword">const</span> <span className="variable">developer</span> = {"{"}

{"\n"}  <span className="property">name</span>: <span className="string">"{profile?.name}"</span>,

{"\n"}  <span className="property">role</span>: <span className="string">"{profile?.headline || profile?.designation}"</span>,

{"\n"}  <span className="property">location</span>: <span className="string">"{profile?.location}"</span>,

{"\n"}  <span className="property">status</span>: <span className="string">"{profile?.availability}"</span>

{"\n"}{"}"};

            </pre>

            <div className="dev-terminal">

              <p>
                <span>$</span> npm run hire-me
              </p>

              <p className="terminal-output">
                ✔ Ready for exciting opportunities...
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;