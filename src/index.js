// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import the essential CSS for global and component styling
import App from './App'; // Import your main application component

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById('root');

// Create the root renderer for React 18+
const root = ReactDOM.createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
