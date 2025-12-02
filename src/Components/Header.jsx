// src/Components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../Context';
// import { auth } from '../firebase'; // Not needed here

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
          {/* Logo ATM.png from the public folder */}
          <img 
            src="/images/atm.png" // FIX: Corrected path to .png
            alt="Anuj Tech Mart Logo" // Rebranded alt text
            className="logo-img" 
          /> 
          <h1>Anuj Tech Mart</h1> {/* Rebranded Title */}
        </Link>
      </div>

      {/* --- 2. Category Navigation --- */}
      <nav className="category-nav">
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
