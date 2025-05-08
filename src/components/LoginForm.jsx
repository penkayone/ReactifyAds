// src/components/LoginForm.jsx
import React, { useState } from 'react';
import { apiClient } from '../api/apiClient';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/auth/login', {
                username,
                password
            });

            localStorage.setItem('authToken', response.data.token);
            setMessage('Вход выполнен!');
            window.location.href = '/';
        } catch (error) {
            console.error('Ошибка входа:', error);
            setMessage('Неверный логин или пароль');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form full-width">
            <h2 className="form-title">Вход</h2>

            <input
                type="text"
                placeholder="Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="form-field"
            />
            <br />

            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="form-field"
            />
            <br />

            <button type="submit" className="form-button">Войти</button>

            {message && <p style={{ color: 'red' }}>{message}</p>}
        </form>
    );
};

export default LoginForm;