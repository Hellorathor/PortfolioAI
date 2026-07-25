import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";
import "../../assets/css/components/profile/AboutForm.css";
function AboutForm({ profile, refreshProfile }) {
  const [about, setAbout] = useState(profile.about || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("about", about);

      await updateProfile(formData);

      await refreshProfile();

      toast.success("About updated successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update About.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-card about-form" onSubmit={handleSubmit}>
      <h2 className="form-title">About</h2>

      <textarea
        className="form-textarea"
        rows={8}
        placeholder="Write a professional summary about yourself..."
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      />

      <button
        className="primary-btn"
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save About"}
      </button>
    </form>
  );
}

export default AboutForm;