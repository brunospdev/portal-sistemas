import axios from "axios";

const api = axios.create({
  baseURL: "http://172.23.41.3:4001",
  timeout: 1000,
});

export function login(username, password) {
  return api.post("/login", { username, password });
}
