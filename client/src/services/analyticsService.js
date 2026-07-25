import api from "./api";

// Get Analytics
export const getAnalytics = async (portfolioId) => {
  const response = await api.get(
    `/analytics/${portfolioId}`
  );

  return response.data;
};