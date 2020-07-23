import axios from "axios";

let apiUrl;

let apiUrls = {
  production: "https://hitch-account-info.herokuapp.com/api",
  development: "http://localhost:3000/api",
};
//http://localhost:3000/api/profile/5f13521ac780a05e7dae77f0

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}
const api = axios.create({
  baseURL: apiUrl,
});

// put back baseUrl: apiUrl after if else works

export default api;
