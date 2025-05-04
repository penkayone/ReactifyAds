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
        <div style={{ padding: '20px' }}>
            <h2>Создать объявление</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Заголовок"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <br />
                <textarea
                    placeholder="Описание"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <br />
                <input
                    type="number"
                    placeholder="Цена"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                    style={{ marginBottom: '10px', width: '100%', padding: '8px' }}
                />
                <br />
                <button type="submit" style={{ padding: '10px 20px' }}>
                    Разместить объявление
                </button>
            </form>
        </div>
    );
};

export default CreateAdPage;