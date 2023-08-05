import axios from "axios";

export const axiosDefaultConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: import.meta.env.VITE_API_KEY,
  }
});