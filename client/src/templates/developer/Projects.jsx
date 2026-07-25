import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section className="dev-projects" id="projects">

      <div className="dev-projects-container">

        <div className="dev-section-heading">
          <span>repositories</span>
          <h2>Featured Projects</h2>
          <p>
            Projects that demonstrate my experience in full-stack
            development, cloud technologies, and modern web applications.
          </p>
        </div>

        {projects?.length > 0 ? (
          <div className="repo-grid">

            {projects.map((project, index) => (
              <div className="repo-card" key={index}>

                <img
                  src={
                    project.image?.url ||
                    "https://placehold.co/600x400?text=Project"
                  }
                  alt={project.title}
                />

                <div className="repo-content">

                  <h3>📦 {project.title}</h3>

                  <p>{project.description}</p>

                  <div className="repo-tech">

                    {project.technologies?.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}

                  </div>

                  <div className="repo-links">

                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>
            ))}

          </div>
        ) : (
          <p className="repo-empty">
            No repositories available.
          </p>
        )}

      </div>

    </section>
  );
};

export default Projects;