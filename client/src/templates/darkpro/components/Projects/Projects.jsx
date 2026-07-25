import "./Projects.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";

const Projects = ({ projects = [] }) => {
  return (
    <section className="dark-section" id="projects">

      <h2 className="section-title">
        Featured Projects
      </h2>

      <p className="section-subtitle">
        A collection of projects showcasing my experience in web
        development, cloud computing and AI.
      </p>

      <div className="projects-grid">

        {projects.length > 0 ? (
          projects.map((project, index) => (

            <div className="project-card dark-card" key={index}>

              <div className="project-image">

                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                ) : (
                  <div className="image-placeholder">
                    <FaCode />
                  </div>
                )}

                {project.featured && (
                  <span className="featured-tag">
                    Featured
                  </span>
                )}

              </div>

              <div className="project-content">

                <h3>{project.title}</h3>

                <p>
                  {project.description}
                </p>

                {project.technologies?.length > 0 && (

                  <div className="project-tech">

                    {project.technologies.map((tech, i) => (
                      <span key={i}>
                        {tech}
                      </span>
                    ))}

                  </div>

                )}

                <div className="project-buttons">

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  )}

                </div>

              </div>

            </div>

          ))
        ) : (

          <div className="projects-empty dark-card">

            <FaCode />

            <h3>No Projects Added</h3>

            <p>
              Your featured projects will appear here.
            </p>

          </div>

        )}

      </div>

    </section>
  );
};

export default Projects;