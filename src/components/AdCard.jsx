// src/components/AdCard.jsx
import React from 'react';

const AdCard = ({ ad }) => {
    return (
        <div className="ad-card form form-width">
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
            <p><strong>{ad.price} ₽</strong></p>
            {/* Можно добавить кнопку "Подробнее" или "Удалить", если захочешь */}
        </div>
    );
};

export default AdCard;