// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import '../css/authorization.css';
import { apiClient } from '../api/apiClient';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await apiClient.post('/auth/register', {
                username,
                email,
                password
            });

            setMessage('Регистрация успешна!');
            localStorage.setItem('authToken', response.data.token);
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);
        } catch (error) {
            console.error('Ошибка регистрации:', error.response?.data || error.message);
            if (error.response?.status === 409) {
                setMessage('Пользователь с таким именем или email уже существует');
            } else {
                setMessage('Не удалось зарегистрироваться. Попробуйте снова.');
            }
        } finally {
            setLoading(false);
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
                disabled={loading}
                className="form-field"
            />

            <br />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                className="form-field"
            />

            <br />

            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                className="form-field"
            />

            <br />

            <button type="submit" className="form-button" disabled={loading}>
                {loading ? (
                    <span className="spinner">Загрузка...</span>
                ) : (
                    'Зарегистрироваться'
                )}
            </button>

            {message && <p className="form-message">{message}</p>}
        </form>
    );
};

export default RegisterForm;