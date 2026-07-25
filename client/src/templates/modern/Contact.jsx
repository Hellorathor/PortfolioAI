import "./Contact.css";

function Contact({ profile }) {
  const social = profile?.socialLinks || {};

  const hasValue = (value) => {
    if (value === null || value === undefined) return false;

    const str = String(value).trim().toLowerCase();

    return (
      str !== "" &&
      str !== "null" &&
      str !== "undefined"
    );
  };

  const hasContact =
    hasValue(profile?.email) ||
    hasValue(profile?.phone) ||
    hasValue(profile?.location) ||
    hasValue(social.github) ||
    hasValue(social.linkedin) ||
    hasValue(social.website) ||
    hasValue(social.twitter) ||
    hasValue(social.instagram) ||
    hasValue(social.facebook) ||
    hasValue(social.youtube) ||
    hasValue(social.leetcode) ||
    hasValue(social.hackerrank) ||
    hasValue(social.codeforces);

  if (!hasContact) return null;

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>

        <p className="contact-text">
          Interested in working together? Feel free to connect with me through
          any of the platforms below.
        </p>

        <div className="contact-links">

          {hasValue(profile?.email) && (
            <a
              href={`mailto:${profile.email}`}
              className="contact-card"
            >
              <span>📧</span>
              <h3>Email</h3>
            </a>
          )}

          {hasValue(profile?.phone) && (
            <a
              href={`tel:${profile.phone}`}
              className="contact-card"
            >
              <span>📱</span>
              <h3>Phone</h3>
            </a>
          )}

          {hasValue(profile?.location) && (
            <div className="contact-card">
              <span>📍</span>
              <h3>Location</h3>
            </div>
          )}

          {hasValue(social.github) && (
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

          {hasValue(social.linkedin) && (
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

          {hasValue(social.website) && (
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

          {hasValue(social.twitter) && (
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

          {hasValue(social.instagram) && (
            <a
              href={social.instagram}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>📷</span>
              <h3>Instagram</h3>
            </a>
          )}

          {hasValue(social.facebook) && (
            <a
              href={social.facebook}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>📘</span>
              <h3>Facebook</h3>
            </a>
          )}

          {hasValue(social.youtube) && (
            <a
              href={social.youtube}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>▶️</span>
              <h3>YouTube</h3>
            </a>
          )}

          {hasValue(social.leetcode) && (
            <a
              href={social.leetcode}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>🟢</span>
              <h3>LeetCode</h3>
            </a>
          )}

          {hasValue(social.hackerrank) && (
            <a
              href={social.hackerrank}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>🟠</span>
              <h3>HackerRank</h3>
            </a>
          )}

          {hasValue(social.codeforces) && (
            <a
              href={social.codeforces}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span>🔵</span>
              <h3>Codeforces</h3>
            </a>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;