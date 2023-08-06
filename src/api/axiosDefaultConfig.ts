import axios from 'axios';

export const axiosDefaultConfig = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    appid: import.meta.env.VITE_API_KEY,
  },
});
