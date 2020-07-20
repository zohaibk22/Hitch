import api from "./apiConfig";
import Axios from "axios";

export const getProfile = async (id) => {
  try {
    //debugger
    const response = await api.get(`/profile/${id}`);
    // debugger
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// export const getProfile = async (id) => {
//   console.log(api)
//   debugger
//   var strr = [];
//   console.log(api('/profile/' + id))
//   debugger
//   api('/profile/' + id).then(function (response) {
//     strr.push(response.data);
//     console.log(strr);
//     debugger
//   }).catch(function (error) {
//     console.log(error);
//   });
//   return strr;
// }

export const createProfile = async (profile) => {
  try {
    const response = await api.post("/profiles", profile);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProfile = async (id, profile) => {
  try {
    const response = api.put(`/profile/${id}`, profile);
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
