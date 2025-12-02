// src/Pages/Home.jsx
import React from 'react';
import { useAppContext } from '../Context';
import ProductCard from '../Components/ProductCard';

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
      
      {/* Optional: You can add more sections here (e.g., 'Latest Arrivals', 'Offers') */}
      
    </div>
  );
};

export default Home;
