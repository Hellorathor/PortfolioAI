import "./Projects.css";

function Projects({ projects }) {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2>Featured Projects</h2>

        <p className="projects-text">
          Here are some of the projects I've built that demonstrate my skills,
          problem-solving ability, and passion for software development.
        </p>

        <div className="project-grid">
          {projects?.length > 0 ? (
            projects.map((project) => (
              <div key={project._id} className="project-card">

                {/* Project Image */}
                {project.image?.url && (
                  <img
                    src={project.image.url}
                    alt={project.title}
                    className="project-image"
                  />
                )}

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>
                    {project.description || "No description available."}
                  </p>

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (
                    <div className="tech-list">
                      {project.technologies.map((tech, index) => (
                        <span key={index}>{tech}</span>
                      ))}
                    </div>
                  )}

                  <div className="project-links">

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        🚀 Live Demo
                      </a>
                    )}

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        💻 GitHub
                      </a>
                    )}

                  </div>

                </div>
              </div>
            ))
          ) : (
            <div className="no-projects">
              <h3>No Projects Added Yet</h3>
              <p>
                Projects will appear here once they are added to the portfolio.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;