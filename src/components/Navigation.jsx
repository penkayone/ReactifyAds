// src/components/Navigation.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ✅ Добавили useNavigate
import { getToken } from '../services/auth';

const Navigation = () => {
    const navigate = useNavigate();

    const isAuthenticated = !!getToken();
    const handleAddAdClick = (e) => {
        e.preventDefault();

        if (!isAuthenticated) {
            navigate('/login');
        } else {
            navigate('/create-ad');
        }
    };

    return (
        <nav style={{ padding: '1rem', backgroundColor: '#f5f5f5', marginBottom: '2rem' }}>
            <Link to="/" style={{ marginRight: '1rem' }}>Главная</Link>

            <a href="/create-ad" onClick={handleAddAdClick} style={{ marginRight: '1rem' }}>
                ➕ Добавить объявление
            </a>

            {!isAuthenticated ? (
                <>
                    <Link to="/login" style={{ marginRight: '1rem' }}>Войти</Link>
                    <Link to="/register">Регистрация</Link>
                </>
            ) : (
                <Link to="/dashboard" style={{ marginLeft: '1rem' }}>Личный кабинет</Link>
            )}
        </nav>
    );
};

export default Navigation;