import axios from "axios";

export const axiosDefaultConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    Authorization: import.meta.env.VITE_API_KEY as string,
  }
});