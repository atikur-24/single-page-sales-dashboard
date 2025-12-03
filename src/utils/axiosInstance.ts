import { AUTH_TOKEN_KEY } from "@/lib/constant";
import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 30000,
});

// request interceptor
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get(AUTH_TOKEN_KEY);
  if (token) {
    config.headers["X-AUTOBIZZ-TOKEN"] = token;
  }
  return config;
});

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("API response error:", error.response.data);
    } else if (error.request) {
      console.error("API no response:", error.request);
    } else {
      console.error("API request error:", error.message);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
