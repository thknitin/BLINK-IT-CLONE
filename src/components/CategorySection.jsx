import React from 'react';
import './CategorySection.css';

const CategorySection = ({ category, onAddToCart }) => {
  return (
    <div className="category-section">
      <div className="category-header">
        <h2 className="category-title">{category.name}</h2>
      </div>

      <div className="product-grid">
        {category.products.map(product => (
          <div key={product._id} className="product-card">
            <div className="product-icon">{product.image}</div>
            <h3 className="product-name">{product.name}</h3>
            <p className="product-type">{product.type}</p>
            <div className="product-footer">
              <span className="product-price">₹{product.price}</span>
              <button
                onClick={() =>
                  onAddToCart({
                    id: product._id, 
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    type: product.type
                  })
                }
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
