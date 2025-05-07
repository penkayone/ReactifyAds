// src/components/LoginForm.jsx
import React, { useState } from 'react';
import apiClient from '../api/apiClient'; // Импорт без фигурных скобок

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/auth/login', {
                username,
                password
            });

            console.log('Вход успешен:', response.data);
        } catch (error) {
            console.error('Ошибка входа:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Войти</button>
        </form>
    );
};

export default LoginForm;