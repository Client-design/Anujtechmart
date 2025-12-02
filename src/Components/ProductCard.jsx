// src/Components/ProductCard.jsx
import React from 'react';
import { useAppContext } from '../Context';

// ProductCard receives the 'product' object as a prop from Home.jsx or Category.jsx
const ProductCard = ({ product }) => {
  // Access the function to modify the cart state
  const { addToCart } = useAppContext();

  return (
    <div className="product-card">
      
      {/* Product Image */}
      {/* The image path is retrieved from the product object (e.g., /images/stock-mouse.jpg) */}
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
        // Adding onError to handle cases where the stock image path might be wrong
        onError={(e) => { e.target.src = '/images/placeholder.jpg'; }}
      />
      
      <div className="product-details">
        {/* Product Name */}
        <h3>{product.name}</h3>
        
        {/* Price */}
        <p className="price">₹{product.price}</p>
        
        {/* Rating and Category */}
        <p className="rating">Rating: {product.rating} ⭐</p>
        <p className="category">Category: **{product.category}**</p>
        
        {/* Add to Cart Button */}
        <button 
          onClick={() => addToCart(product)} 
          className="add-to-cart-btn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
