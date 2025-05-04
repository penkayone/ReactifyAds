// src/components/ServicesSection.jsx
import React, { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const ServicesSection = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const res = await apiClient.get('/services');
                setServices(res.data);
            } catch (err) {
                console.error('Не удалось загрузить услуги:', err);
            }
        };
        fetchServices();
    }, []);

    return (
        <div className="services-section" style={{ marginTop: '40px' }}>
            <h3>Наши услуги</h3>
            <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap'
            }}>
                {services.map(service => (
                    <div key={service.id} style={{
                        border: '1px solid #eee',
                        padding: '15px',
                        borderRadius: '8px',
                        width: '200px'
                    }}>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesSection;