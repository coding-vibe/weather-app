import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    appid: import.meta.env.VITE_API_KEY,
  },
});

export default apiClient;
