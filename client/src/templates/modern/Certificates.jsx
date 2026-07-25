import "./Contact.css";

function Contact({ profile }) {
  const social = profile?.socialLinks || {};

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>

        <p className="contact-text">
          Interested in working together? Feel free to connect with me through
          any of the platforms below.
        </p>

        <div className="contact-links">

          {social.github && (
            <a
              href={social.github}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>💻</span>
              <h3>GitHub</h3>
            </a>
          )}

          {social.linkedin && (
            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>💼</span>
              <h3>LinkedIn</h3>
            </a>
          )}

          {social.website && (
            <a
              href={social.website}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>🌐</span>
              <h3>Website</h3>
            </a>
          )}

          {social.twitter && (
            <a
              href={social.twitter}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>🐦</span>
              <h3>Twitter / X</h3>
            </a>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;