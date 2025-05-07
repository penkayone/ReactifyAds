// src/pages/AdsPage.jsx
import React, { useState, useEffect } from 'react'; // Добавь useEffect
import apiClient from '../api/apiClient'; // Импорт по умолчанию

const AdsPage = () => {
    const [ads, setAds] = useState([]);

    const fetchAds = async () => {
        try {
            const response = await apiClient.get('/ads'); // Замени '/ads' на нужный эндпоинт
            setAds(response.data);
        } catch (error) {
            console.error('Ошибка получения объявлений:', error);
        }
    };

    useEffect(() => {
        fetchAds();
    }, []);

    return (
        <div>
            <h1>Объявления</h1>
            <ul>
                {ads.map(ad => (
                    <li key={ad.id}>{ad.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdsPage;