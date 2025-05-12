// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
        // Если токена нет → перенаправляем на /login
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;