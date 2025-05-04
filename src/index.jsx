import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './css/index.css';
import './css/authorization.css';
import './css/notification.css';
import './css/loader.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);