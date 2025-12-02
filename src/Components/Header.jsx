// src/Components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context';
// auth import is not strictly needed here since Context handles user state, but keeping minimal changes
// import { auth } from '../firebase'; 

const Header = () => {
  // Use the custom hook to access global state
  const { user, cart, categories } = useAppContext();
  
  // Calculate total items in the cart for the badge
  const totalCartItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Use email prefix as minimal username for the profile icon
  const userName = user?.email.split('@')[0] || 'Sign In'; 

  return (
    <header className="header">
      {/* --- 1. Logo and Site Title --- */}
      <div className="logo-section">
        <Link to="/" className="logo-link">
          {/* Logo ATM.png from the public/images folder */}
          <img 
            src="/images/atm.png" // FIX: Corrected path to .png
            alt="ATM Mini-Mart Logo" 
            className="logo-img" 
          /> 
          <h1>Mini-Mart</h1>
        </Link>
      </div>

      {/* --- 2. Category Navigation --- */}
      <nav className="category-nav">
        {/* Link to all products on the home page */}
        <Link to="/" className="nav-link">Home</Link>
        
        {/* Dynamically generate links for the categories defined in Context.js */}
        {categories.map(cat => (
          <Link key={cat} to={`/category/${cat}`} className="nav-link">
            {cat}
          </Link>
        ))}
      </nav>

      {/* --- 3. User Actions (Profile/Login & Cart) --- */}
      <div className="user-actions">
        
        {/* Profile Icon / Login Link */}
        <Link to={user ? "/profile" : "/login"} className="profile-link">
          <span role="img" aria-label="profile">👤</span>
          <span className="user-name-text">{userName}</span>
        </Link>

        {/* Cart Icon and Item Count */}
        <Link to="/checkout" className="cart-link">
          <span role="img" aria-label="cart">🛒</span>
          Cart (<span className="cart-count">{totalCartItems}</span>)
        </Link>
        
      </div>
    </header>
  );
};

export default Header;
