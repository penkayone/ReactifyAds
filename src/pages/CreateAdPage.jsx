// src/pages/CreateAdPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAdPage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Получаем текущие объявления из localStorage
        const ads = JSON.parse(localStorage.getItem('ads') || '[]');

        // Создаём новое объявление
        const newAd = {
            id: Date.now(),
            title,
            description,
            price: parseFloat(price),
            createdAt: new Date().toISOString()
        };

        // Добавляем и сохраняем обратно
        ads.push(newAd);
        localStorage.setItem('ads', JSON.stringify(ads));

        // Перенаправляем на главную
        navigate('/');
    };

    return (
        <div className="page">
            <div className="form form-width">
                <h2 className="form-title">Создать объявление</h2>

                <form onSubmit={handleSubmit} className="full-width">
                    <input
                        type="text"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="form-field"
                    />

                    <br />

                    <textarea
                        placeholder="Описание"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="form-field"
                        style={{ height: '100px' }} // можно оставить или удалить, если стиль уже в CSS
                    />

                    <br />

                    <input
                        type="number"
                        placeholder="Цена"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        className="form-field"
                    />

                    <button type="submit" className="form-button">
                        Разместить объявление
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateAdPage;