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
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">Главная</Link></li>
                    <li><Link to="/add-ad">Добавить объявление</Link></li>
                    <li><Link to="/login">Войти</Link></li>
                    <li><Link to="/register">Регистрация</Link></li>
                </ul>
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