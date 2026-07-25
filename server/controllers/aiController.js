import ai from "../config/ai.js";
//about 
export const generateAbout = async (req, res) => {
  try {
    const { skills, experience, education } = req.body;

    // Validation
    if (!skills || !experience || !education) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const prompt = `
You are a professional portfolio writer.

Return ONLY valid JSON.

{
  "headline": "",
  "about": ""
}

User Details

Skills: ${skills.join(", ")}

Experience: ${experience}

Education: ${education}

Rules:
- Headline should be under 10 words.
- About should be under 150 words.
- Don't use markdown.
- Don't use \`\`\`json.
- Return only JSON.
`;

    const completion = await ai.chat.completions.create({
      model: "openai/gpt-4.1-mini",

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
        max_tokens: 500,

      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;

    const aiResponse = JSON.parse(text);

    return res.status(200).json({
      success: true,
      data: aiResponse,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AI Project Description Generator
export const generateProjectDescription = async (req, res) => {
  try {
    const { title, technologies } = req.body;

    // Validation
    if (!title || !technologies || technologies.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Title and technologies are required",
      });
    }

    const prompt = `
You are a professional software engineer and resume writer.

Return ONLY valid JSON.

{
  "description": "",
  "features": [],
  "challenges": [],
  "learning": []
}

Project Details

Title: ${title}

Technologies: ${technologies.join(", ")}

Rules:
- Description should be under 120 words.
- Features should contain 4-6 points.
- Challenges should contain 2-3 points.
- Learning should contain 2-3 points.
- Don't use markdown.
- Don't use \`\`\`json.
- Return only JSON.
`;

    const completion = await ai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 700,
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;

    const aiResponse = JSON.parse(text);

    return res.status(200).json({
      success: true,
      data: aiResponse,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AI Resume Generator
export const generateResume = async (req, res) => {
  try {
    const {
      fullName,
      headline,
      about,
      skills,
      education,
      experience,
      projects,
    } = req.body;

    if (
      !fullName ||
      !headline ||
      !about ||
      !skills ||
      !education ||
      !experience
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields are required.",
      });
    }

    const prompt = `
You are a professional resume writer.

Return ONLY valid JSON.

{
  "summary": "",
  "skills": [],
  "experience": "",
  "projects": [],
  "education": ""
}

Candidate Details

Name: ${fullName}

Headline: ${headline}

About:
${about}

Skills:
${skills.join(", ")}

Experience:
${experience}

Education:
${education}

Projects:
${projects
  ?.map(
    (project) =>
      `${project.title} - ${project.description} (${project.technologies.join(
        ", "
      )})`
  )
  .join("\n")}

Rules:
- Professional ATS-friendly language.
- Summary under 120 words.
- Skills should be optimized.
- Improve project descriptions.
- Don't use markdown.
- Return only JSON.
`;

    const completion = await ai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const text = completion.choices[0].message.content;

    const aiResponse = JSON.parse(text);

    return res.status(200).json({
      success: true,
      data: aiResponse,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// AI Chat Assistant
export const aiChat = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    const systemPrompt = `
You are PortfolioAI Assistant, an intelligent AI career and software development assistant.

Your primary goal is to help users build better careers, portfolios, resumes, projects and software.

You are an expert in:

• Full Stack Development
• MERN Stack
• React
• Node.js
• Express
• MongoDB
• JavaScript
• TypeScript
• HTML
• CSS
• Tailwind CSS
• Material UI
• AWS Cloud
• Docker
• Git & GitHub
• REST APIs
• Database Design

You also help with:

• Resume writing
• ATS optimization
• Portfolio creation
• LinkedIn posts
• GitHub README
• Cover letters
• Professional emails
• Technical documentation
• Project ideas
• Project architecture
• Interview preparation
• Career guidance
• Debugging code
• Code explanation
• Code review
• Learning roadmaps

Instructions:

1. Understand the user's intent automatically.
2. Never ask the user to choose a category.
3. Answer naturally like ChatGPT.
4. Keep formatting clean.
5. Use markdown only when it improves readability.
6. Use bullet points where appropriate.
7. When writing code, explain it clearly.
8. When writing resumes or LinkedIn posts, make them professional and ATS-friendly.
9. If the prompt is ambiguous, ask one short clarifying question instead of guessing.
10. Be concise unless the user asks for a detailed explanation.

Always provide practical, high-quality answers.
`;
    const completion = await ai.chat.completions.create({
      model: "openai/gpt-4.1-mini",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 1500,
    });

    return res.status(200).json({
      success: true,
      reply: completion.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};