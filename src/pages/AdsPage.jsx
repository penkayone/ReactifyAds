// src/pages/AdsPage.jsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import AdCard from '../components/AdCard';

const AdsPage = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await apiClient.get('/ads');
                setAds(res.data);
            } catch (err) {
                console.error('Не удалось загрузить объявления:', err);
            }
        };

        fetchAds();
    }, []);

    return (
        <div className="page">
            <h2>Все объявления</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {ads.map(ad => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
        </div>
    );
};

export default AdsPage;