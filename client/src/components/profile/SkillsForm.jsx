import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";
import "../../assets/css/components/profile/skillsForm.css";
function SkillsForm({ profile, refreshProfile }) {
  const [skills, setSkills] = useState(
    profile.skills?.join(", ") || ""
  );

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
     formData.append(
     "skills",
     skills
   );

      await updateProfile(formData);

      await refreshProfile();

      toast.success("Skills updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update skills.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-card skills-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Skills</h2>

      <label className="form-label">
        Professional Skills
      </label>

      <textarea
        className="form-textarea"
        rows={5}
        placeholder="React, Node.js, MongoDB, Express, AWS"
        value={skills}
        onChange={(e) => setSkills(e.target.value)}
      />

      <small className="form-helper">
        Separate each skill with a comma (,).
      </small>

      <button
        className="primary-btn"
        type="submit"
        disabled={loading}
      >
        {loading ? "Saving..." : "Save Skills"}
      </button>
    </form>
  );
}

export default SkillsForm;