import "./Certificates.css";

const Certificates = ({ certificates }) => {
  return (
    <section className="dev-certificates" id="certificates">

      <div className="cert-window">

        <div className="cert-header">

          <div className="cert-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>certificates.md</span>

        </div>

        <div className="cert-body">

          <h2>🏆 Developer Achievements</h2>

          {certificates?.length > 0 ? (

            <div className="cert-grid">

              {certificates.map((certificate, index) => (

                <div
                  className="cert-card"
                  key={index}
                >

                  <div className="cert-icon">
                    ✔
                  </div>

                  <h3>{certificate.title}</h3>

                  <h4>{certificate.organization}</h4>

                  {certificate.issueDate && (
                    <p className="cert-date">
                      📅 {new Date(certificate.issueDate).toLocaleDateString()}
                    </p>
                  )}

                  {certificate.description && (
                    <p className="cert-description">
                      {certificate.description}
                    </p>
                  )}

                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Credential →
                    </a>
                  )}

                </div>

              ))}

            </div>

          ) : (

            <p className="cert-empty">
              No certificates available.
            </p>

          )}

        </div>

      </div>

    </section>
  );
};

export default Certificates;