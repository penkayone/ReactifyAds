import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../api/apiClient';
import { setToken } from '../services/auth';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/login', { email, password });
            const { token } = response.data;

            setToken(token);
            navigate('/dashboard');
        } catch (err) {
            setError('Login Error. Check login and password.');
        }
    };

    return (
        <div className="form form-width">
            <h2 className="form-title">Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit} className="full-width">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="form-field"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-field"
                />

                <button type="submit" className="form-button">
                    Log in
                </button>
            </form>
        </div>
    );
};

export default LoginForm;