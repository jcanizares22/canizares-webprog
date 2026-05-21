import axios from 'axios';
import { HOST } from '../../constants';

const API = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use((config) => {
  const stored = localStorage.getItem('authState');
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      const token = parsed?.token;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Failed to parse authState', error);
    }
  }
  return config;
});


export default API;
