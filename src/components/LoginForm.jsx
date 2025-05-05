// src/components/LoginForm.jsx
import React, { useState } from 'react'; // ✅ Добавлен useState
import { useNavigate } from 'react-router-dom'; // ✅ Нужен для навигации
import '../css/authorization.css';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // ✅ Теперь используется при успешном входе

    const handleSubmit = (e) => {
        e.preventDefault();

        // Здесь будет логика отправки данных на бэкенд
        console.log({ email, password });

        // Пример перехода после входа (временно)
        // localStorage.setItem('authToken', 'some-token');
        navigate('/dashboard'); // После тестирования раскомментируй
    };

    return (
        <div className="form form-width">
            <h2 className="form-title">Вход</h2>

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
                    placeholder="Пароль"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="form-field"
                />

                <button type="submit" className="form-button">
                    Войти
                </button>
            </form>
        </div>
    );
};

export default LoginForm;