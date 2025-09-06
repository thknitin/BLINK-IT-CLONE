import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Blinkit</h1>

      <div className="about-section">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-box">
            <div className="step-number">1</div>
            <h3 className="step-title">Browse Products</h3>
            <p>Explore our wide range of groceries and essentials</p>
          </div>
          <div className="step-box">
            <div className="step-number">2</div>
            <h3 className="step-title">Add to Cart</h3>
            <p>Select items you need and add them to your cart</p>
          </div>
          <div className="step-box">
            <div className="step-number">3</div>
            <h3 className="step-title">Quick Delivery</h3>
            <p>Get your order delivered to your doorstep in minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
