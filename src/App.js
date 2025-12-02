// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context'; // Your custom Context Provider

// --- Component Imports ---
import Header from './Components/Header';
import ProtectedRoute from './Components/Protected';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Profile from './Components/Profile';
import Category from './Components/Category';

// --- Page Imports ---
import Home from './Pages/Home';

// Ensure react-router-dom is installed: npm install react-router-dom

function App() {
  return (
    // 1. Router wraps everything to enable navigation
    <Router>
      {/* 2. AppProvider wraps all components that need state (cart, user, products) */}
      <AppProvider>
        
        {/* Header (Nav Bar) is outside Routes so it shows on every page */}
        <Header /> 
        
        {/* 3. Routes defines all possible paths */}
        <Routes>
          
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dynamic Category Route */}
          {/* The URL parameter is accessed via useParams() in Category.jsx */}
          <Route path="/category/:name" element={<Category />} />
          
          {/* --- Protected Routes --- */}
          {/* ProtectedRoute acts as a wrapper (Route Guard) */}
          <Route element={<ProtectedRoute />}>
            {/* These routes are only accessible if the user is logged in */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          
          {/* Fallback Route for 404 - Always placed last */}
          <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
        
      </AppProvider>
    </Router>
  );
}

export default App;
