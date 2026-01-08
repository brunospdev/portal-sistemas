import axios from "axios";

const api = axios.create({
  baseURL: "http://172.23.41.3:4001",
  timeout: 5000,
});

// Interceptor para adicionar token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function login(username, password) {
  return api.post("/login", { username, password });
}

// Função para buscar dados do usuário autenticado
export function getUserProfile() {
  return api.get("/user/profile");
}

// Função para atualizar dados do usuário
export function updateUserProfile(data) {
  return api.put("/user/profile", data);
}
