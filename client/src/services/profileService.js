import api from "./api";

// Get Logged-in User Profile
export const getMyProfile = async () => {
  const res = await api.get("/profile/me");
  return res.data;
};

// Create / Update Profile
export const updateProfile = async (formData) => {
  const res = await api.put("/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};