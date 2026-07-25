import "./Projects.css";

function Projects({ projects }) {
  return (
    <section className="creative-projects" id="projects">
      <div className="projects-container">

        <div className="projects-heading">
          <span className="section-tag">My Work</span>

          <h2>Featured Projects</h2>

          <p>
            Here are some of the projects I've built to solve
            real-world problems and improve my development skills.
          </p>
        </div>

        {projects?.length > 0 ? (

          <div className="projects-grid">

            {projects.map((project) => (

              <div className="project-card" key={project._id}>

                <div className="project-image">

                  <img
                    src={
                      project.image?.url ||
                      "https://placehold.co/600x400?text=Project"
                    }
                    alt={project.title}
                  />

                </div>

                <div className="project-content">

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>

                  {project.technologies?.length > 0 && (

                    <div className="tech-stack">

                      {project.technologies.map((tech, index) => (

                        <span key={index}>
                          {tech}
                        </span>

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
                        Live Demo
                      </a>

                    )}

                    {project.githubLink && (

                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-projects">

            <h3>No Projects Added</h3>

            <p>
              Your projects will appear here once you add them.
            </p>

          </div>

        )}

      </div>
    </section>
  );
}

export default Projects;