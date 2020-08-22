import axios from "axios";
import { Promise } from "es6-promise";

const http = axios.create({
  baseURL: "https://api.easyfundx.com/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

http.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  }
);

export default http;
