// src/components/Categories.jsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await apiClient.get('/categories');
                setCategories(res.data);
            } catch (err) {
                console.error('Не удалось загрузить категории:', err);
            }
        };

        fetchCategories();
    }, []);

    return (
        <div className="category-section" style={{ marginTop: '30px' }}>
            <h3>Категории</h3>
            <div style={{
                display: 'flex',
                gap: '20px',
                overflowX: 'auto',
                paddingBottom: '10px'
            }}>
                {categories.map(cat => (
                    <div
                        key={cat.id}
                        style={{
                            flexShrink: 0,
                            textAlign: 'center',
                            border: '1px solid #ccc',
                            padding: '10px',
                            borderRadius: '10px',
                            width: '100px'
                        }}
                    >
                        <img
                            src={cat.imageUrl || 'https://via.placeholder.com/80'}
                            alt={cat.name}
                            style={{ width: '80px', height: '80px', objectFit: 'cover', marginBottom: '8px' }}
                        />
                        <p style={{ fontSize: '14px', margin: '0' }}>{cat.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;