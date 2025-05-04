import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiClient } from '../api/apiClient';
import { setToken } from '../services/auth';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await apiClient.post('/register', { name, email, password });
            const { token } = response.data;

            setToken(token);
            navigate('/dashboard');
        } catch (err) {
            setError('Registration error');
        }
    };

    return (
        <div className="form form-width">
            <h2 className="form-title">Register</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <form onSubmit={handleSubmit} className="full-width">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="form-field"
                />

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
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;