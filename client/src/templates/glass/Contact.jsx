import "./Contact.css";

function Contact({ profile }) {
  const social = profile?.socialLinks || {};

  const hasContact =
    profile?.email ||
    profile?.phone ||
    profile?.location ||
    social.github ||
    social.linkedin ||
    social.website ||
    social.twitter ||
    social.instagram ||
    social.facebook ||
    social.youtube ||
    social.leetcode ||
    social.hackerrank ||
    social.codeforces;

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
          {profile?.email && (
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
          )}

          {profile?.phone && (
            <div className="contact-card">
              <div className="contact-icon">📱</div>
              <h3>Phone</h3>
              <a href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
          )}

          {profile?.location && (
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3>Location</h3>
              <p>{profile.location}</p>
            </div>
          )}

          {social.github && (
            <div className="contact-card">
              <div className="contact-icon">💻</div>
              <h3>GitHub</h3>
              <a href={social.github} target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </div>
          )}

          {social.linkedin && (
            <div className="contact-card">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a href={social.linkedin} target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </div>
          )}

          {social.website && (
            <div className="contact-card">
              <div className="contact-icon">🌐</div>
              <h3>Website</h3>
              <a href={social.website} target="_blank" rel="noreferrer">
                Visit Website
              </a>
            </div>
          )}

          {social.twitter && (
            <div className="contact-card">
              <div className="contact-icon">🐦</div>
              <h3>Twitter / X</h3>
              <a href={social.twitter} target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </div>
          )}

          {social.instagram && (
            <div className="contact-card">
              <div className="contact-icon">📷</div>
              <h3>Instagram</h3>
              <a href={social.instagram} target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </div>
          )}

          {social.facebook && (
            <div className="contact-card">
              <div className="contact-icon">📘</div>
              <h3>Facebook</h3>
              <a href={social.facebook} target="_blank" rel="noreferrer">
                Visit Profile
              </a>
            </div>
          )}

          {social.youtube && (
            <div className="contact-card">
              <div className="contact-icon">▶️</div>
              <h3>YouTube</h3>
              <a href={social.youtube} target="_blank" rel="noreferrer">
                Visit Channel
              </a>
            </div>
          )}

          {social.leetcode && (
            <div className="contact-card">
              <div className="contact-icon">🟢</div>
              <h3>LeetCode</h3>
              <a href={social.leetcode} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          )}

          {social.hackerrank && (
            <div className="contact-card">
              <div className="contact-icon">🟠</div>
              <h3>HackerRank</h3>
              <a href={social.hackerrank} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          )}

          {social.codeforces && (
            <div className="contact-card">
              <div className="contact-icon">🔵</div>
              <h3>Codeforces</h3>
              <a href={social.codeforces} target="_blank" rel="noreferrer">
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