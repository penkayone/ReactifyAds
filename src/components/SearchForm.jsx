// src/components/SearchForm.jsx
import React, { useState } from 'react';
import { apiClient } from '../api/apiClient';

const SearchForm = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            const res = await apiClient.get(`/ads?search=${query}`);
            setResults(res.data);
        } catch (err) {
            console.error('Ошибка поиска:', err);
        }
    };

    return (
        <form onSubmit={handleSearch} style={{ margin: '20px 0' }}>
            <input
                type="text"
                placeholder="Что вы ищете?"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                required
                style={{ width: '80%', padding: '10px', fontSize: '16px' }}
            />
            <button type="submit" style={{ marginLeft: '10px', padding: '10px 20px' }}>
                Поиск
            </button>

            {/* Показываем результаты поиска */}
            {results.length > 0 && (
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginTop: '20px' }}>
                    {results.map(ad => (
                        <li key={ad.id}>
                            <strong>{ad.title}</strong> — {ad.price} ₽
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default SearchForm;