import "./Projects.css";

const Projects = ({ projects }) => {
  return (
    <section className="glass-projects" id="projects">
      <div className="glass-projects-container">

        <div className="glass-section-title">
          <span>MY PROJECTS</span>
          <h2>Featured Work</h2>
          <p>
            A collection of projects showcasing my experience in building
            scalable, responsive and real-world web applications.
          </p>
        </div>

        <div className="glass-project-grid">

          {projects?.length > 0 ? (
            projects.map((project) => (
              <div className="glass-project-card" key={project._id}>

                <div className="glass-project-image">

                  <img
                    src={
                      project?.image?.url ||
                      "https://via.placeholder.com/600x350"
                    }
                    alt={project.title}
                  />

                </div>

                <div className="glass-project-content">

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="glass-tech-stack">
                    {project.technologies?.map((tech, index) => (
                      <span key={index}>{tech}</span>
                    ))}
                  </div>

                  <div className="glass-project-buttons">

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
            ))
          ) : (
            <p className="glass-empty-projects">
              No projects available.
            </p>
          )}

        </div>

      </div>
    </section>
  );
};

export default Projects;