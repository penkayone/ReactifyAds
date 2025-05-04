// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import CreateAdPage from './pages/CreateAdPage';
import HomePage from './pages/HomePage'; // ✅ Добавлен
import Navigation from './components/Navigation';

// Приватный маршрут
const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken');
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            {/* Меню отображается всегда */}
            <Navigation />

            {/* Маршруты */}
            <Routes>
                {/* Публичные маршруты */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Приватные маршруты */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />

                {/* Страница создания объявления */}
                <Route
                    path="/create-ad"
                    element={
                        <PrivateRoute>
                            <CreateAdPage />
                        </PrivateRoute>
                    }
                />

                {/* Главная страница объявлений */}
                <Route
                    path="/"
                    element={
                        <PrivateRoute>
                            <HomePage />  {/* ✅ Теперь здесь HomePage, а не Dashboard */}
                        </PrivateRoute>
                    }
                />

                {/* Редирект на /dashboard */}
                <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
        </Router>
    );
};

export default App;