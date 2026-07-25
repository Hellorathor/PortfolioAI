import "./Experience.css";

const Experience = ({ experience }) => {
  return (
    <section className="dev-experience" id="experience">

      <div className="terminal-window">

        <div className="terminal-header">

          <div className="terminal-dots">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

          <span>terminal</span>

        </div>

        <div className="terminal-body">

          <p className="terminal-command">
            <span>$</span> experience --list
          </p>

          {experience?.length > 0 ? (

            experience.map((job, index) => (

              <div className="terminal-entry" key={index}>

                <p>
                  <span className="success">✔</span>{" "}
                  {job.role}
                </p>

                <p className="company">
                  {job.company}
                  {job.location && ` • ${job.location}`}
                </p>

                <p className="duration">
                  {job.startDate} -{" "}
                  {job.currentlyWorking
                    ? "Present"
                    : job.endDate}
                </p>

                {job.description && (
                  <p className="description">
                    {job.description}
                  </p>
                )}

              </div>

            ))

          ) : (

            <p className="no-data">
              No professional experience found.
            </p>

          )}

          <p className="terminal-command">
            <span>$</span> echo "Ready for the next opportunity 🚀"
          </p>

        </div>

      </div>

    </section>
  );
};

export default Experience;