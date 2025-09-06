import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const {
    cartItems,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();

  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    clearCart();
  };

  if (cartItems.length === 0 && !showModal) {
    return (
      <div className="cart-empty">
        <div className="cart-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>Your Cart ({totalItems} {totalItems === 1 ? 'item' : 'items'})</h1>
        <button className="btn-clear" onClick={clearCart}>Clear Cart</button>
      </div>

      <div className="cart-grid">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <span style={{ fontSize: "2rem" }}>{item.image}</span>
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p>{item.type}</p>
                <p>₹{item.price}</p>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>🗑️</button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-line"><span>Subtotal:</span><span>₹{totalPrice}</span></div>
          <div className="summary-line"><span>Delivery:</span><span>₹40</span></div>
          <div className="summary-total"><strong>Total:</strong><strong>₹{totalPrice + 40}</strong></div>
          <button className="btn-primary" onClick={handleCheckout}>Proceed to Checkout</button>
          <Link to="/" className="continue-link">Continue Shopping</Link>
        </div>
      </div>

    {showModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>✅ Order Placed Successfully!</h2>
      <p>🚚 Your items will be delivered in 10 minutes.</p>
      <div className="modal-items">
        {cartItems.map(item => (
          <p key={item.id}>• {item.name} ({item.quantity} x ₹{item.price})</p>
        ))}
      </div>
      <p><strong>Total:</strong> ₹{totalPrice + 40}</p>
      <div className="modal-buttons">
        <button className="btn-primary" onClick={handleModalClose}>OK</button>
        <button className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default Cart;
