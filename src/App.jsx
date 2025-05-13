// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
    return (
        <Router>
            {/* Навигационное меню */}
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/login">Войти</Link></li>
                    <li><Link to="/register">Регистрация</Link></li>
                    <li><Link to="/profile">Профиль</Link></li>
                    <li><Link to="/add-ad">Добавить объявление</Link></li>
                </ul>
            </nav>

            {/* Маршруты */}
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Защищённые маршруты */}
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <ProfilePage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/add-ad"
                    element={
                        <PrivateRoute>
                            <h2>Страница добавления объявления</h2>
                        </PrivateRoute>
                    }
                />

                {/* Главная страница */}
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
};

export default App;