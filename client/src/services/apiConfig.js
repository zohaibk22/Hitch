import axios from "axios";

let apiUrl;

let apiUrls = {
  production: "https://hitch-account-info.herokuapp.com/api",
  development: "/api",
};
//http://localhost:3000/api/profile/5f13521ac780a05e7dae77f0

// if (window.location.hostname === "localhost") {
//   apiUrl = apiUrls.development;
// } else {
//   apiUrl = apiUrls.production;
// }
axios.defaults.baseURL = apiUrls.production;
const api = axios.create({
  //baseUrl: apiUrls.production
});

// put back baseUrl: apiUrl after if else works

export default api;
