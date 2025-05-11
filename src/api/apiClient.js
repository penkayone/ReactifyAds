// src/api/apiClient.js
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'http://ranject.cc:8080/api', // Используем HTTP
    withCredentials: true,
});

// Добавляем токен ко всем запросам, если пользователь авторизован
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});