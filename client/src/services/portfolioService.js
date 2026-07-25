import api from "./api";

// Generate Portfolio
export const generatePortfolio = async () => {
  const response = await api.post("/portfolio/generate");
  return response.data;
};

// Publish Portfolio
export const publishPortfolio = async () => {
  const response = await api.put("/portfolio/publish");
  return response.data;
};

// Update Portfolio Template
export const updateTemplate = async (template) => {
  const response = await api.patch("/portfolio/template", {
    template,
  });

  return response.data;
};

// Get Logged-in User Portfolio
export const getMyPortfolio = async () => {
  const response = await api.get("/portfolio/me");
  return response.data;
};

// Get Public Portfolio
export const getPublicPortfolio = async (slug) => {
  const response = await api.get(`/portfolio/${slug}`);
  return response.data;
};