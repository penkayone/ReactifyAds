// src/components/LoginForm.jsx
import React, { useState } from 'react';
import '../css/authorization.css';
import { apiClient } from '../api/apiClient';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        try {
            const response = await apiClient.post('/auth/login', {
                username,
                password
            });

            localStorage.setItem('authToken', response.data.token);
            setMessage('Вход выполнен! Перенаправление...');
            setTimeout(() => {
                window.location.href = '/profile';
            }, 1000);
        } catch (error) {
            console.error('Ошибка входа:', error.response?.data || error.message);
            if (error.response && error.response.status === 401) {
                setMessage('Неверное имя пользователя или пароль');
            } else {
                setMessage('Не удалось войти. Попробуйте снова.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="form full-width">
                <h2 className="form-title">Вход</h2>

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
                        'Войти'
                    )}
                </button>

                {message && <p className="form-message">{message}</p>}
            </form>
        </div>
    );
};

export default LoginForm;