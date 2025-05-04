// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import SearchForm from '../components/SearchForm';
import Categories from '../components/Categories';
import AdGallery from '../components/AdGallery'; // ✅ Теперь импортируем
import ServicesSection from '../components/ServicesSection';

const HomePage = () => {
    return (
        <div className="page">
            <div className="form form-width">

                {/* Форма поиска */}
                <SearchForm />

                {/* Категории */}
                <Categories />

                {/* Рекомендации */}
                <AdGallery title="Популярные объявления" endpoint="/recommendations" />

                {/* Сервисы платформы */}
                <ServicesSection />

            </div>
        </div>
    );
};

export default HomePage;