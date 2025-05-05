// src/pages/HomePage.jsx
import React from 'react';
import SearchForm from '../components/SearchForm';
import Categories from '../components/Categories';
import AdGallery from '../components/AdGallery';
import ServicesSection from '../components/ServicesSection';
import LoginForm from '../components/LoginForm'; // ✅ Импортируем форму входа
import RegisterForm from '../components/RegisterForm'; // ✅ Импортируем форму регистрации

const HomePage = () => {
    return (
        <div className="page">
            <div className="form form-width">

                {/* Форма поиска */}
                <SearchForm />

                {/* Категории */}
                <Categories />

                {/* Формы входа и регистрации */}
                <LoginForm />
                <RegisterForm />

                {/* Рекомендации */}
                <AdGallery title="Популярные объявления" endpoint="/recommendations" />

                {/* Сервисы платформы */}
                <ServicesSection />

            </div>
        </div>
    );
};

export default HomePage;