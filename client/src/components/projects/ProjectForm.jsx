import { useEffect, useState } from "react";
import "./ProjectForm.css";
function ProjectForm({
  onSave,
  onCancel,
  editingProject,
}) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    githubLink: "",
    liveLink: "",
    featured: false,
    image: null,
  });

  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || "",
        description: editingProject.description || "",
        technologies:
          editingProject.technologies?.join(", ") || "",
        githubLink: editingProject.githubLink || "",
        liveLink: editingProject.liveLink || "",
        featured: editingProject.featured || false,
        image: null,
      });
    } else {
      setFormData({
        title: "",
        description: "",
        technologies: "",
        githubLink: "",
        liveLink: "",
        featured: false,
        image: null,
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        image: files[0],
      }));
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    });
  };

  return (
    <div className="project-modal">
      <form
        className="project-form"
        onSubmit={handleSubmit}
      >
        <h2>
          {editingProject
            ? "Edit Project"
            : "Add New Project"}
        </h2>

        <div className="form-group">
          <label>Project Title</label>

          <input
            type="text"
            name="title"
            placeholder="Enter project title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            rows="5"
            placeholder="Describe your project..."
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Technologies</label>

          <input
            type="text"
            name="technologies"
            placeholder="React, Node.js, MongoDB"
            value={formData.technologies}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>GitHub Link</label>

          <input
            type="url"
            name="githubLink"
            placeholder="https://github.com/..."
            value={formData.githubLink}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Live Demo Link</label>

          <input
            type="url"
            name="liveLink"
            placeholder="https://yourproject.com"
            value={formData.liveLink}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Project Image</label>

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />

          {formData.image instanceof File && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="project-preview"
            />
          )}

          {!formData.image &&
            editingProject?.image?.url && (
              <img
                src={editingProject.image.url}
                alt="Project"
                className="project-preview"
              />
            )}
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />

            Featured Project
          </label>
        </div>

        <div className="project-form-buttons">
          <button
            type="submit"
            className="save-btn"
          >
            {editingProject ? "Update Project" : "Save Project"}
          </button>

          <button
            type="button"
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;