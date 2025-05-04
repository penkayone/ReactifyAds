// src/pages/Dashboard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="page">
            <div className="form form-width">
                <h2 className="form-title">Добро пожаловать!</h2>
                <p>Вы успешно вошли.</p>

                {/* Ссылка на создание объявления */}
                <Link to="/create-ad" style={{ display: 'block', marginBottom: '1rem' }}>
                    ➕ Разместить новое объявление
                </Link>

                <button
                    className="form-button"
                    onClick={() => {
                        localStorage.removeItem('authToken');
                        window.location.href = '/login';
                    }}
                >
                    Выйти
                </button>
            </div>
        </div>
    );
};

export default Dashboard;