// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootComponent from './RootComponent';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RootComponent />
    </React.StrictMode>
);

reportWebVitals();