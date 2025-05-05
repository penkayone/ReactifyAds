// src/components/AdForm.jsx
import React, { useState } from 'react';
import { apiClient } from '../api/apiClient';
import { useNavigate } from 'react-router-dom';

const AdForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await apiClient.post('/ads', {
                title,
                description,
                price,
            });

            // После успешного создания перейти на главную
            navigate('/');
        } catch (error) {
            console.error('Ошибка при добавлении объявления:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="full-width">
            <input
                type="text"
                placeholder="Заголовок"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="form-field"
            />

            <textarea
                placeholder="Описание"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-field"
            />

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
    );
};

export default AdForm;