import api from "./api";

// Get All Projects
export const getProjects = async () => {
  const { data } = await api.get("/projects");
  return data;
};

// Add Project
export const addProject = async (projectData) => {
  const formData = new FormData();

  formData.append("title", projectData.title);
  formData.append("description", projectData.description);
  formData.append("githubLink", projectData.githubLink);
  formData.append("liveLink", projectData.liveLink);
  formData.append("featured", projectData.featured);

  formData.append(
    "technologies",
    Array.isArray(projectData.technologies)
      ? projectData.technologies.join(",")
      : projectData.technologies
  );

  if (projectData.image) {
    formData.append("image", projectData.image);
  }

  const { data } = await api.post("/projects", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// Update Project
export const updateProject = async (id, projectData) => {
  const formData = new FormData();

  formData.append("title", projectData.title);
  formData.append("description", projectData.description);
  formData.append("githubLink", projectData.githubLink);
  formData.append("liveLink", projectData.liveLink);
  formData.append("featured", projectData.featured);

  formData.append(
    "technologies",
    Array.isArray(projectData.technologies)
      ? projectData.technologies.join(",")
      : projectData.technologies
  );

  if (projectData.image instanceof File) {
    formData.append("image", projectData.image);
  }

  const { data } = await api.put(`/projects/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
};

// Delete Project
export const deleteProject = async (id) => {
  const { data } = await api.delete(`/projects/${id}`);
  return data;
};