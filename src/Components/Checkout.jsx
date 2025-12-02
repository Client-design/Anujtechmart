// src/Components/Checkout.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // FIX: Added missing Link import
import { useAppContext } from '../Context';

// IMPORTANT: Replace this placeholder with your actual payment button link
const PAYMENT_LINK = "https://your-payment-gateway-link.com/paynow"; 

const Checkout = () => {
  // Access cart data, total, and modification functions
  const { cart, cartTotal, removeFromCart } = useAppContext();

  return (
    <div className="checkout-container">
      <h2>🛒 Review Your Order</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Start shopping here!</Link></p>
      ) : (
        <>
          {/* --- Cart Item List --- */}
          <div className="cart-items">
            <h3>Items ({cart.length})</h3>
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <p>
                  <span className="item-name">**{item.name}**</span> 
                  <span className="item-qty"> x {item.quantity}</span>
                </p>
                <p className="item-price">₹{item.price * item.quantity}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <hr style={{ margin: '20px 0', borderTop: '1px dashed #ccc' }}/>

          {/* --- Summary and Total --- */}
          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-line">
                <span>Subtotal:</span>
                <span>₹{cartTotal}</span>
            </div>
            <div className="summary-line">
                <span>Shipping:</span>
                <span>₹40</span> 
            </div>
            <h3 className="total-line">
                <span>Grand Total:</span>
                <span className="total-amount">₹{cartTotal + 40}</span>
            </h3>
          </div>
          
          <hr style={{ margin: '20px 0' }}/>

          {/* --- Payment Section --- */}
          <div className="payment-section">
            <p>You must complete payment to place your order.</p>
            
            {/* Direct link to your external payment button */}
            <a href={PAYMENT_LINK} target="_blank" rel="noopener noreferrer">
              <button className="payment-button">
                **Proceed to Secure Payment** (₹{cartTotal + 40})
              </button>
            </a>
            
            <p className="order-note">
              *Note: This is an external payment link simulation. The order status will be updated manually.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
