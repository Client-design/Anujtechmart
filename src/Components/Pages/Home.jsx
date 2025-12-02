// src/Components/Pages/Home.jsx
import React from 'react';
import { useAppContext } from '../../Context'; // FIX: Corrected relative path
import ProductCard from '../ProductCard'; // FIX: Corrected relative path

const Home = () => {
  // Access the complete list of products from the global state
  const { products } = useAppContext();
  
  return (
    <div className="home-container">
      <h1>⭐ Featured Products</h1>
      
      {products.length === 0 ? (
        // Display a message if no products are defined in Context.js
        <p>No products available right now. Please check back later!</p>
      ) : (
        // Use the CSS class 'product-list-grid' for layout
        <div className="product-list-grid">
          {products.map(product => (
            // Render the reusable ProductCard for each item
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      
    </div>
  );
};

export default Home;
