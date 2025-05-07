// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import apiClient from '../api/apiClient';

const ProfilePage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await apiClient.get('/user/me');
                setUser(response.data);
            } catch (error) {
                console.error('Ошибка получения данных пользователя:', error);
            }
        };

        fetchUser();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <h2>Профиль пользователя</h2>
                    <p>ID: {user.id}</p>
                    <p>Имя пользователя: {user.username}</p>
                </div>
            ) : (
                <p>Загрузка...</p>
            )}
        </div>
    );
};

export default ProfilePage;