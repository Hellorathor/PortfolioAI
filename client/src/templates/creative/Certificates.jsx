import "./Certificates.css";

function Certificates({ certificates }) {
  return (
    <section className="creative-certificates" id="certificates">
      <div className="certificates-container">

        <div className="certificates-heading">
          <span className="section-tag">
            Certifications
          </span>

          <h2>Achievements & Certifications</h2>

          <p>
            Certifications and achievements that demonstrate my
            continuous learning and professional development.
          </p>
        </div>

        {certificates?.length > 0 ? (

          <div className="certificate-grid">

            {certificates.map((certificate, index) => (

              <div
                className="certificate-card"
                key={certificate._id || index}
              >

                <div className="certificate-icon">
                  🏆
                </div>

                <h3>
                  {certificate.title}
                </h3>

                <h4>
                  {certificate.organization}
                </h4>

                {certificate.issueDate && (
                  <span className="certificate-date">
                    📅 {certificate.issueDate}
                  </span>
                )}

                {certificate.description && (
                  <p>
                    {certificate.description}
                  </p>
                )}

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="certificate-btn"
                  >
                    View Certificate
                  </a>
                )}

              </div>

            ))}

          </div>

        ) : (

          <div className="no-certificates">

            <h3>No Certificates Added</h3>

            <p>
              Your certifications will appear here once added.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Certificates;