// src/components/RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/authorization.css';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Логика регистрации
        console.log({ name, email, password });

        // Пример перехода после регистрации
        // localStorage.setItem('authToken', 'some-token');
        navigate('/dashboard');
    };

    return (
        <div className="form form-width">
            <h2 className="form-title">Регистрация</h2>

            <form onSubmit={handleSubmit} className="full-width">
                <input
                    type="text"
                    placeholder="Имя"
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
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-field"
                />

                <button type="submit" className="form-button">
                    Зарегистрироваться
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;