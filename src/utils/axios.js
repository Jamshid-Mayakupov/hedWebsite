// src/utils/axios.js
import axios from "axios";
import Cookies from "js-cookie";

// const baseURL = "http://84.54.116.154:8089";
const baseURL = "http://192.168.1.96:8089";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 👇 Добавляем токен ко всем запросам
api.interceptors.request.use((config) => {
  const token = Cookies.get("jwtToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
