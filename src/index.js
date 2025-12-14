// src/main.jsx (or src/index.js if using Create React App)
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './index.css'; // Global or base styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
