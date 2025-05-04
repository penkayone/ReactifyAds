// src/components/AdGallery.jsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const AdGallery = ({ title, endpoint }) => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await apiClient.get(endpoint);
                setAds(res.data);
            } catch (err) {
                console.error(`Ошибка загрузки ${title}:`, err);
            }
        };

        fetchAds();
    }, [endpoint, title]);

    return (
        <div className="ad-gallery" style={{ marginTop: '30px' }}>
            <h3>{title}</h3>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px'
            }}>
                {ads.map(ad => (
                    <div key={ad.id} style={{
                        border: '1px solid #ddd',
                        padding: '15px',
                        borderRadius: '8px',
                        width: '200px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                        transition: 'transform 0.2s',
                    }}>
                        <img
                            src={ad.imageUrl || 'https://via.placeholder.com/200x120'}
                            alt={ad.title}
                            style={{ width: '100%', height: '120px', objectFit: 'cover', marginBottom: '10px' }}
                        />
                        <h4 style={{ fontSize: '16px', margin: '0 0 10px 0' }}>{ad.title}</h4>
                        <p style={{ fontWeight: 'bold' }}>{ad.price} ₽</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdGallery;