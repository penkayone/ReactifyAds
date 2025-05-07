// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import apiClient from '../api/apiClient';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/auth/register', {
                username,
                email,
                password
            });

            console.log('Регистрация успешна:', response.data);
        } catch (error) {
            console.error('Ошибка регистрации:', error);
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
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterForm;