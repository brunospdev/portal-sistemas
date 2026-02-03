import axios from "axios";
import { AUTH_ENABLED } from "../config/auth";

const api = axios.create({
  baseURL: "http://172.23.41.3:4001",
  timeout: 5000,
});

// Interceptor para adicionar token em todas as requisições (somente com auth ligado)
if (AUTH_ENABLED) {
  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}

export function login(username, password) {
  if (!AUTH_ENABLED) {
    return Promise.reject(new Error("AUTH_DISABLED"));
  }
  return api.post("/login", { username, password });
}

export function getUserProfile() {
  if (!AUTH_ENABLED) {
    return Promise.reject(new Error("AUTH_DISABLED"));
  }
  return api.get("/user/profile");
}

export function updateUserProfile(data) {
  if (!AUTH_ENABLED) {
    return Promise.reject(new Error("AUTH_DISABLED"));
  }
  return api.put("/user/profile", data);
}

export { api };
