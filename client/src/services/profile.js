import api from "./apiConfig";

export const getProfile = async (id) => {
  try {
    const response = await api.get(`/profile/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProfile = async (profile) => {
  try {
    const response = await api.post("/profile", profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (id, profile) => {
  try {
    const response = api.put(`/profile/update/${id}`, profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProfile = async (id) => {
  try {
    const response = await api.delete(`/profile/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};