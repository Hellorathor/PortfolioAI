import { useState } from "react";
import toast from "react-hot-toast";
import { updateProfile } from "../../services/profileService";

import "../../assets/css/components/profile/educationForm.css";

function EducationForm({ profile, refreshProfile }) {
  const [education, setEducation] = useState(
    profile.education?.length
      ? profile.education
      : [
          {
            institution: "",
            degree: "",
            fieldOfStudy: "",
            startDate: "",
            endDate: "",
            grade: "",
            description: "",
          },
        ]
  );

  const [loading, setLoading] = useState(false);

  const handleChange = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        institution: "",
        degree: "",
        fieldOfStudy: "",
        startDate: "",
        endDate: "",
        grade: "",
        description: "",
      },
    ]);
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append(
        "education",
        JSON.stringify(education)
      );

      await updateProfile(formData);

      await refreshProfile();

      toast.success("Education updated successfully.");
    } catch (error) {
      console.error(error);
      toast.error("Failed to update education.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="profile-card education-form"
      onSubmit={handleSubmit}
    >
      <h2 className="form-title">Education</h2>

      {education.map((edu, index) => (
        <div
          key={index}
          className="education-item"
        >
          <div className="education-grid">

            <input
              className="form-input"
              type="text"
              placeholder="Institution"
              value={edu.institution}
              onChange={(e) =>
                handleChange(index, "institution", e.target.value)
              }
            />

            <input
              className="form-input"
              type="text"
              placeholder="Degree"
              value={edu.degree}
              onChange={(e) =>
                handleChange(index, "degree", e.target.value)
              }
            />

            <input
              className="form-input"
              type="text"
              placeholder="Field of Study"
              value={edu.fieldOfStudy}
              onChange={(e) =>
                handleChange(index, "fieldOfStudy", e.target.value)
              }
            />

            <input
              className="form-input"
              type="text"
              placeholder="Grade / CGPA"
              value={edu.grade}
              onChange={(e) =>
                handleChange(index, "grade", e.target.value)
              }
            />

            <div>
              <label className="form-label">
                Start Date
              </label>

              <input
                className="form-input"
                type="date"
                value={edu.startDate?.substring(0, 10)}
                onChange={(e) =>
                  handleChange(index, "startDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className="form-label">
                End Date
              </label>

              <input
                className="form-input"
                type="date"
                value={edu.endDate?.substring(0, 10)}
                onChange={(e) =>
                  handleChange(index, "endDate", e.target.value)
                }
              />
            </div>

          </div>

          <textarea
            className="form-textarea"
            rows={5}
            placeholder="Describe your education, achievements, projects, etc."
            value={edu.description}
            onChange={(e) =>
              handleChange(index, "description", e.target.value)
            }
          />

          {education.length > 1 && (
            <button
              type="button"
              className="danger-btn"
              onClick={() => removeEducation(index)}
            >
              Remove Education
            </button>
          )}
        </div>
      ))}

      <div className="education-actions">

        <button
          type="button"
          className="secondary-btn"
          onClick={addEducation}
        >
          + Add Education
        </button>

        <button
          className="primary-btn"
          type="submit"
          disabled={loading}
        >
          {loading ? "Saving..." : "Save Education"}
        </button>

      </div>
    </form>
  );
}

export default EducationForm;