// src/api/apiClient.js
import axios from 'axios';
import { getToken } from '../services/auth';

export const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api',
});

// Добавляем токен ко всем запросам, если пользователь авторизован
apiClient.interceptors.request.use((config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});