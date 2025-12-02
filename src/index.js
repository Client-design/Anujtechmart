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
  // <React.StrictMode> is a tool for highlighting potential problems in an application.
  // It checks for deprecated usage and ensures best practices. You can remove it 
  // if you prefer a slightly faster initial render, but it's recommended for development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
