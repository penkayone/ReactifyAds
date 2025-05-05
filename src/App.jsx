// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import CreateAdPage from './pages/CreateAdPage';
import AdsPage from './pages/AdsPage'; // ✅ Новый импорт
import Navigation from './components/Navigation';

// Приватный маршрут
const PrivateRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken');
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Navigation />

            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterPage />} />

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

                {/* Страница со списком объявлений */}
                <Route path="/ads" element={<AdsPage />} />  {/* Можно сделать публичной */}

                {/* Главная страница */}
                <Route path="/" element={<AdsPage />} />  {/* Теперь главная — это список объявлений */}
            </Routes>
        </Router>
    );
};

export default App;