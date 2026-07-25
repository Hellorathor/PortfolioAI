import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";
import "../../assets/css/components/profile/experienceForm.css";
function ExperienceForm({ profile, refreshProfile }) {
  const [experiences, setExperiences] = useState(
    profile.experience?.length
      ? profile.experience
      : [
          {
            company: "",
            role: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
          },
        ]
  );

  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...experiences];
    updated[index][field] = value;
    setExperiences(updated);
  };

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (index) => {
    const updated = experiences.filter((_, i) => i !== index);
    setExperiences(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "experience",
        JSON.stringify(experiences)
      );

      await updateProfile(formData);

      await refreshProfile();

      toast.success("Experience updated successfully.");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update experience.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="profile-card experience-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Experience</h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="experience-item"
        >
          <div className="experience-grid">

            <input
              className="form-input"
              type="text"
              placeholder="Company"
              value={exp.company}
              onChange={(e) =>
                handleChange(index, "company", e.target.value)
              }
            />

            <input
              className="form-input"
              type="text"
              placeholder="Role"
              value={exp.role}
              onChange={(e) =>
                handleChange(index, "role", e.target.value)
              }
            />

            <input
              className="form-input"
              type="text"
              placeholder="Location"
              value={exp.location}
              onChange={(e) =>
                handleChange(index, "location", e.target.value)
              }
            />

            <div>
              <label className="form-label">Start Date</label>

              <input
                className="form-input"
                type="date"
                value={exp.startDate?.substring(0, 10)}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className="form-label">End Date</label>

              <input
                className="form-input"
                type="date"
                value={exp.endDate?.substring(0, 10)}
                onChange={(e) =>
                  handleChange(index, "endDate", e.target.value)
                }
              />
            </div>

          </div>

          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={exp.current}
              onChange={(e) =>
                handleChange(index, "current", e.target.checked)
              }
            />

            Currently Working Here
          </label>

          <textarea
            className="form-textarea"
            rows="5"
            placeholder="Describe your responsibilities and achievements..."
            value={exp.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          />

          {experiences.length > 1 && (
            <button
              type="button"
              className="danger-btn"
              onClick={() => removeExperience(index)}
            >
              Remove Experience
            </button>
          )}
        </div>
      ))}

      <div className="experience-actions">

        <button
          type="button"
          className="secondary-btn"
          onClick={addExperience}
        >
          + Add Experience
        </button>

        <button
          className="primary-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Experience"}
        </button>

      </div>
    </form>
  );
}

export default ExperienceForm;