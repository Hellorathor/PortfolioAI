function WelcomeScreen({ onPromptClick }) {
  const prompts = [
    {
      title: "Build My Portfolio",
      icon: "🌐",
      prompt:
        "Help me create a professional developer portfolio with sections like About, Skills, Projects, Education, Experience, and Contact.",
    },
    {
      title: "Improve My Resume",
      icon: "📄",
      prompt:
        "Improve my resume to make it ATS-friendly for Full Stack Developer roles.",
    },
    {
      title: "Write LinkedIn Post",
      icon: "💼",
      prompt:
        "Write a professional LinkedIn post about completing my latest software development project.",
    },
    {
      title: "Review My Project",
      icon: "🚀",
      prompt:
        "Review my project and suggest improvements in features, UI, scalability, and code quality.",
    },
    {
      title: "Debug My Code",
      icon: "🐞",
      prompt:
        "Help me debug my code and explain what is causing the problem.",
    },
    {
      title: "Explain Any Topic",
      icon: "💻",
      prompt:
        "Explain this programming concept in simple English with examples.",
    },
    {
      title: "Interview Preparation",
      icon: "🎯",
      prompt:
        "Start a Full Stack Developer mock interview and ask me one question at a time.",
    },
    {
      title: "Learning Roadmap",
      icon: "🛣️",
      prompt:
        "Create a step-by-step roadmap to become a Full Stack Developer.",
    },
  ];

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className="welcome-logo">🤖</div>

        <h1>PortfolioAI Assistant</h1>

        <p>
          Ask anything about programming, portfolios, resumes, projects,
          interviews, careers, or software development.
        </p>
      </div>

      <div className="prompt-grid">
        {prompts.map((item) => (
          <button
            key={item.title}
            className="prompt-card"
            onClick={() => onPromptClick(item.prompt)}
          >
            <span>{item.icon}</span>

            <h3>{item.title}</h3>
          </button>
        ))}
      </div>
    </div>
  );
}

export default WelcomeScreen;