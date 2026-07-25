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
    <section className="creative-contact" id="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <span className="section-tag">Contact</span>

          <h2>Let's Work Together</h2>

          <p>
            Have a project in mind or just want to say hello?
            Feel free to reach out through any of the platforms below.
          </p>
        </div>

        <div className="contact-grid">

          {hasValue(profile?.email) && (
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
            </div>
          )}

          {hasValue(profile?.phone) && (
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
          )}

          {hasValue(profile?.location) && (
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>{profile.location}</p>
            </div>
          )}

          {hasValue(social.github) && (
            <div className="contact-card">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>

              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
              >
                Visit Profile
              </a>
            </div>
          )}

          {hasValue(social.linkedin) && (
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>

              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Visit Profile
              </a>
            </div>
          )}

          {hasValue(social.website) && (
            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Website</h3>

              <a
                href={social.website}
                target="_blank"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          )}

          {hasValue(social.twitter) && (
            <div className="contact-card">
              <div className="contact-icon">🐦</div>
              <h3>Twitter / X</h3>

              <a
                href={social.twitter}
                target="_blank"
                rel="noreferrer"
              >
                Visit Profile
              </a>
            </div>
          )}

          {hasValue(social.instagram) && (
            <div className="contact-card">
              <div className="contact-icon">📷</div>
              <h3>Instagram</h3>

              <a
                href={social.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Visit Profile
              </a>
            </div>
          )}

          {hasValue(social.facebook) && (
            <div className="contact-card">
              <div className="contact-icon">📘</div>
              <h3>Facebook</h3>

              <a
                href={social.facebook}
                target="_blank"
                rel="noreferrer"
              >
                Visit Profile
              </a>
            </div>
          )}

          {hasValue(social.youtube) && (
            <div className="contact-card">
              <div className="contact-icon">▶️</div>
              <h3>YouTube</h3>

              <a
                href={social.youtube}
                target="_blank"
                rel="noreferrer"
              >
                Visit Channel
              </a>
            </div>
          )}

          {hasValue(social.leetcode) && (
            <div className="contact-card">
              <div className="contact-icon">🟢</div>
              <h3>LeetCode</h3>

              <a
                href={social.leetcode}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          )}

          {hasValue(social.hackerrank) && (
            <div className="contact-card">
              <div className="contact-icon">🟠</div>
              <h3>HackerRank</h3>

              <a
                href={social.hackerrank}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          )}

          {hasValue(social.codeforces) && (
            <div className="contact-card">
              <div className="contact-icon">🔵</div>
              <h3>Codeforces</h3>

              <a
                href={social.codeforces}
                target="_blank"
                rel="noreferrer"
              >
                View Profile
              </a>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default Contact;