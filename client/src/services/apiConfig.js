import axios from "axios";

let apiUrl;

let apiUrls = {
  production: "https://hitch-account-info.herokuapp.com/api",
  development: "http://localhost:3000/api",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.production;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseUrl: apiUrl,
});

export default api;