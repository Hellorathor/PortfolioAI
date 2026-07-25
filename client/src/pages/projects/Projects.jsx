import { useEffect, useState } from "react";
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from "../../services/projectService";
import ProjectForm from "../../components/projects/ProjectForm";
import "../../assets/css/pages/projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  // Load Projects
  const fetchProjects = async () => {
    try {
      const res = await getProjects();

      setProjects(res.projects || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  // Add / Update Project
  const handleSave = async (projectData) => {
    try {
      if (editingProject) {
        await updateProject(editingProject._id, projectData);
      } else {
        await addProject(projectData);
      }

      setShowForm(false);
      setEditingProject(null);

      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("Failed to save project");
    }
  };

  // Edit Project
  const handleEdit = (project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  // Delete Project
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this project?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProject(id);

      fetchProjects();
    } catch (error) {
      console.error(error);
      alert("Failed to delete project");
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }
   console.log(projects);

  return (
    <div className="projects-page">

      <div className="projects-header">

        <div>
          <h1>My Projects</h1>
          <p>Manage all your portfolio projects.</p>
        </div>

        <button
          className="add-project-btn"
          onClick={() => {
            setEditingProject(null);
            setShowForm(true);
          }}
        >
          + Add Project
        </button>

      </div>

      <div className="projects-grid">

        {projects.length === 0 ? (
          <h3>No Projects Found</h3>
        ) : (
          projects.map((project) => (

            <div
              className="project-card"
              key={project._id}
            >

             <img
        src={project.image?.url}
         alt={project.title}
       className="project-image"
/>

              <div className="project-content">

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <div className="tech-list">

                  {project.technologies?.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}

                </div>

                <div className="project-actions">

                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(project)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(project._id)
                    }
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))
        )}

      </div>

      {showForm && (
        <ProjectForm
          editingProject={editingProject}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
        />
      )}

    </div>
  );
}

export default Projects;