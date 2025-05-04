// src/api/apiClient.js
import axios from 'axios';
import { getToken } from '../services/auth';

export const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // замени на реальный URL позже
});

// Добавляем токен ко всем запросам, если пользователь авторизован
apiClient.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});