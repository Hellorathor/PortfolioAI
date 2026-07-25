import "./Certificates.css";

const Certificates = ({ certificates }) => {
  return (
    <section className="glass-certificates" id="certificates">
      <div className="glass-certificates-container">

        <div className="glass-section-title">
          <span>CERTIFICATES</span>
          <h2>Licenses & Certifications</h2>
          <p>
            Certifications that demonstrate my continuous learning and
            professional development.
          </p>
        </div>

        {certificates?.length > 0 ? (
          <div className="glass-certificates-grid">

            {certificates.map((certificate, index) => (
              <div
                className="glass-certificate-card"
                key={index}
              >

                <div className="glass-certificate-icon">
                  🏆
                </div>

                <h3>{certificate.title}</h3>

                <h4>{certificate.organization}</h4>

                {certificate.issueDate && (
                  <p className="glass-certificate-date">
                    📅 {new Date(certificate.issueDate).toLocaleDateString()}
                  </p>
                )}

                {certificate.description && (
                  <p className="glass-certificate-description">
                    {certificate.description}
                  </p>
                )}

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-certificate-btn"
                  >
                    View Credential
                  </a>
                )}

              </div>
            ))}

          </div>
        ) : (
          <p className="glass-empty">
            No certificates added yet.
          </p>
        )}

      </div>
    </section>
  );
};

export default Certificates;