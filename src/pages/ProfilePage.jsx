// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await apiClient.get('/user/me');
                setUser(res.data);
            } catch (err) {
                setError('Не удалось получить данные пользователя');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, []);

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }

    return (
        <div className="page">
            <div className="form form-width">
                <h2>Профиль</h2>
                <p><strong>ID:</strong> {user.id}</p>
                <p><strong>Имя:</strong> {user.username}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Дата регистрации:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>

                <button onClick={() => {
                    localStorage.removeItem('authToken');
                    window.location.href = '/login';
                }} className="form-button">
                    Выйти
                </button>
            </div>
        </div>
    );
};

export default ProfilePage;