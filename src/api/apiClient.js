// src/api/apiClient.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://ranject.cc:8080/api',
    withCredentials: true,
});

// Добавляем токен в каждый запрос
apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient; // Важно! Экспорт по умолчанию