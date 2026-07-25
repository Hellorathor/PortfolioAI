import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";

function CertificateForm({ profile, refreshProfile }) {
  const [certificates, setCertificates] = useState(
    profile.certificates?.length
      ? profile.certificates
      : [
          {
            title: "",
            organization: "",
            issueDate: "",
            expiryDate: "",
            credentialId: "",
            credentialUrl: "",
          },
        ]
  );

  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...certificates];
    updated[index][field] = value;
    setCertificates(updated);
  };

  const addCertificate = () => {
    setCertificates([
      ...certificates,
      {
        title: "",
        organization: "",
        issueDate: "",
        expiryDate: "",
        credentialId: "",
        credentialUrl: "",
      },
    ]);
  };

  const removeCertificate = (index) => {
    setCertificates(certificates.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "certificates",
        JSON.stringify(certificates)
      );

      await updateProfile(formData);

      await refreshProfile();

      toast.success("Certificates updated successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update certificates.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-card" onSubmit={handleSubmit}>
      <h2>Certificates</h2>

      {certificates.map((certificate, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Certificate Name"
            value={certificate.title}
            onChange={(e) =>
              handleChange(index, "title", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Issuing Organization"
            value={certificate.organization}
            onChange={(e) =>
              handleChange(index, "organization", e.target.value)
            }
          />

          <label>Issue Date</label>

          <input
            type="date"
            value={certificate.issueDate?.substring(0, 10)}
            onChange={(e) =>
              handleChange(index, "issueDate", e.target.value)
            }
          />

          <label>Expiry Date</label>

          <input
            type="date"
            value={certificate.expiryDate?.substring(0, 10)}
            onChange={(e) =>
              handleChange(index, "expiryDate", e.target.value)
            }
          />

          <input
            type="text"
            placeholder="Credential ID"
            value={certificate.credentialId}
            onChange={(e) =>
              handleChange(index, "credentialId", e.target.value)
            }
          />

          <input
            type="url"
            placeholder="Credential URL"
            value={certificate.credentialUrl}
            onChange={(e) =>
              handleChange(index, "credentialUrl", e.target.value)
            }
          />

          {certificates.length > 1 && (
            <button
              type="button"
              onClick={() => removeCertificate(index)}
            >
              Remove
            </button>
          )}
        </div>
      ))}

      <button
        type="button"
        onClick={addCertificate}
      >
        + Add Certificate
      </button>

      <br />
      <br />

      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Certificates"}
      </button>
    </form>
  );
}

export default CertificateForm;