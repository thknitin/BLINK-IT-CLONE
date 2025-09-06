import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategorySection from '../components/CategorySection';
import { useCart } from '../context/CartContext'; 

const Home = () => {
  const [categories, setCategories] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {categories.map(category => (
        <CategorySection
          key={category._id}
          category={category}
          onAddToCart={addToCart} 
        />
      ))}
    </div>
  );
};

export default Home;
