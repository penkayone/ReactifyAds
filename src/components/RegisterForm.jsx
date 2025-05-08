// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { apiClient } from '../api/apiClient'; // Импортируем из файла выше

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/auth/register', {
                username,
                email,
                password
            });

            setMessage('Регистрация успешна!');
            localStorage.setItem('authToken', response.data.token);
            window.location.href = '/profile';
        } catch (error) {
            console.error('Ошибка регистрации:', error);
            setMessage('Не удалось зарегистрироваться. Попробуйте снова.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form full-width">
            <h2 className="form-title">Регистрация</h2>

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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <button type="submit" className="form-button">Зарегистрироваться</button>

            {message && <p style={{ color: 'red' }}>{message}</p>}
        </form>
    );
};

export default RegisterForm;