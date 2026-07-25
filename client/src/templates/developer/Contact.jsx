import "./Contact.css";

const Contact = ({ profile }) => {
  const social = profile?.socialLinks || {};

  return (
    <section className="dev-contact" id="contact">

      <div className="contact-terminal">

        <div className="contact-header">

          <div className="contact-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>terminal</span>

        </div>

        <div className="contact-body">

          <div className="terminal-line">
            <span className="prompt">$</span>
            <span> whoami</span>
          </div>

          <p className="terminal-output">
            {profile?.name || "Developer"}
          </p>

          <div className="terminal-line">
            <span className="prompt">$</span>
            <span> cat contact.json</span>
          </div>

          <div className="contact-json">

            <p>
              <span className="key">"email"</span> :
              <span className="value">
                {" "}
                "{profile?.email || "Not Available"}"
              </span>
            </p>

            <p>
              <span className="key">"phone"</span> :
              <span className="value">
                {" "}
                "{profile?.phone || "Not Available"}"
              </span>
            </p>

            <p>
              <span className="key">"location"</span> :
              <span className="value">
                {" "}
                "{profile?.location || "Not Available"}"
              </span>
            </p>

            <p>
              <span className="key">"availability"</span> :
              <span className="value">
                {" "}
                "{profile?.availability || "Open to Work"}"
              </span>
            </p>

          </div>

          <div className="terminal-line">
            <span className="prompt">$</span>
            <span> ls social-links</span>
          </div>

          <div className="social-links">

            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            )}

            {social.website && (
              <a
                href={social.website}
                target="_blank"
                rel="noreferrer"
              >
                Website
              </a>
            )}

            {social.twitter && (
              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>
            )}

          </div>

          <div className="terminal-line">
            <span className="prompt">$</span>
            <span className="cursor">_</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;