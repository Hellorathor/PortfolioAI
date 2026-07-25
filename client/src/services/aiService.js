import api from "./api";

// Generate About Content
export const generateAbout = async (data) => {
  const response = await api.post("/ai/about", data);
  return response.data;
};

// Generate Project Description
export const generateProjectDescription = async (data) => {
  const response = await api.post("/ai/project-description", data);
  return response.data;
};

// Generate Resume
export const generateResume = async (data) => {
  const response = await api.post("/ai/resume", data);
  return response.data;
};
export const aiChat = async (data) => {
  const response = await api.post("/ai/chat", data);
  return response.data;
};