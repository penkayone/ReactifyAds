// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
    return (
        <Router>
            {/* Меню */}
            <nav style={{
                padding: '10px',
                backgroundColor: '#222',
                display: 'flex',
                justifyContent: 'center',
                gap: '20px'
            }}>
                <Link to="/">Главная</Link>
                <Link to="/add-ad">Добавить объявление</Link>
                <Link to="/login">Войти</Link>
                <Link to="/register">Регистрация</Link>
            </nav>

            {/* Страницы */}
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/" element={<LoginPage />} />
                <Route path="/add-ad" element={<h2>Страница добавления объявления</h2>} />
            </Routes>
        </Router>
    );
};

export default App;