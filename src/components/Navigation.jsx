// src/components/Navigation.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
    const isAuthenticated = !!localStorage.getItem('authToken');

    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', marginBottom: '2rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Главная</Link>

            {/* Ссылка "Добавить объявление" всегда отображается */}
            <AddAdLink />

            {!isAuthenticated ? (
                <>
                    <Link to="/login" style={{ marginRight: '1rem' }}>Войти</Link>
                    <Link to="/register">Регистрация</Link>
                </>
            ) : (
                <>
                    <Link to="/dashboard" style={{ marginLeft: '1rem' }}>Личный кабинет</Link>
                </>
            )}
        </nav>
    );
};

// Отдельный компонент для ссылки "Добавить объявление"
const AddAdLink = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();

        if (!localStorage.getItem('authToken')) {
            // Перенаправляем на логин, если не авторизован
            navigate('/login');
        } else {
            // Иначе переходим на страницу создания
            navigate('/create-ad');
        }
    };

    return (
        <a href="/create-ad" onClick={handleClick} style={{ marginRight: '1rem' }}>
            ➕ Добавить объявление
        </a>
    );
};

export default Navigation;