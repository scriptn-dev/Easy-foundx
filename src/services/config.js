import axios from "axios";
import { Promise } from "es6-promise";
import router from "@/router";
import store from "@/store";

const http = axios.create({
  baseURL: "https://api.easyfundx.com/",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default http;
