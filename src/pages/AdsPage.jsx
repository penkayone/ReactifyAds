// src/pages/AdsPage.jsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const AdsPage = () => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const response = await apiClient.get('/ads');
                setAds(response.data);
            } catch (err) {
                console.error('Ошибка получения объявлений:', err);
                setError('Не удалось загрузить объявления');
            } finally {
                setLoading(false);
            }
        };

        fetchAds();
    }, []);

    if (loading) return <p>Загрузка объявлений...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;

    return (
        <div className="page">
            <h2>Объявления</h2>
            <div className="ads-list">
                {ads.length === 0 && <p>Нет объявлений</p>}
                {ads.map(ad => (
                    <div key={ad.id} className="ad-card">
                        <h3>{ad.title}</h3>
                        <p>{ad.description}</p>
                        <p><strong>Цена:</strong> {ad.price} ₽</p>
                        <p><small>Автор: {ad.owner.username}</small></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdsPage;