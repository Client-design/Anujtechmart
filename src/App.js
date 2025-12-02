// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useAppContext } from './Context'; // FIX: Import useAppContext

// --- Component Imports ---
import Header from './Components/Header';
import ProtectedRoute from './Components/Protected';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
import Profile from './Components/Profile';
import Category from './Components/Category';

// --- Page Imports ---
// FIX: Corrected path for Home component
import Home from './Components/Pages/Home'; 

// Component to handle loading state
function AppContent() {
    const { loading } = useAppContext();
    
    // FIX: Show loading screen to prevent flickering
    if (loading) {
        return (
            <div className="loading-screen" style={{ textAlign: 'center', padding: '50px', fontSize: '1.2em' }}>
                <p>Loading Anuj Tech Mart...</p>
            </div>
        );
    }
    
    return (
        <>
            <Header /> 
            <Routes>
                
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/category/:name" element={<Category />} />
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
                
                {/* Fallback Route for 404 */}
                <Route path="*" element={<h1 style={{textAlign: 'center'}}>404: Page Not Found</h1>} />
            </Routes>
        </>
    );
}


function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent /> {/* Render the main content wrapper */}
      </AppProvider>
    </Router>
  );
}

export default App;
