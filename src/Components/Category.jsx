// src/Components/Category.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../Context';
import ProductCard from './ProductCard'; // Import the reusable product display component

const Category = () => {
  // Get the category name parameter from the current URL
  const { name } = useParams(); 
  
  // Access the static product list from the global context
  const { products } = useAppContext();

  // Filter the products based on the URL parameter 'name'
  const filteredProducts = products.filter(
    (product) => product.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="category-page-container">
      {/* Display the category name, capitalized */}
      <h1>📦 {name.toUpperCase()} Products</h1>
      
      {filteredProducts.length === 0 ? (
        <p>No products found in the **{name}** category.</p>
      ) : (
        // Display the filtered products in the grid defined in CSS
        <div className="product-list-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
