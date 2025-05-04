import React from "react";
import "./Payment.css";
import { useSelector } from "react-redux";

const Payment = () => {
  const cartItems = useSelector((state) => state.cartData);
  const productTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const shipping = 99;
  const total = productTotal + shipping;

  const onHandlePayment = (e) => {
    e.preventDefault();
    alert("Payment Successful! Thank you for your order.");
  };

  return (
    <div className="container">
      <h2 className="checkout">Checkout</h2>

      <div className="checkout-grid">
        <div className="form-section">
          <h2>Billing Details</h2>
          <form onSubmit={onHandlePayment}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="John Mark" required />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="john@example.com"
              required
            />

            <label htmlFor="address">Shipping Address</label>
            <input
              type="text"
              id="address"
              placeholder="123 Street Name"
              required
            />

            <label htmlFor="city">City</label>
            <input type="text" id="city" placeholder="Vijayawada" required />

            <label htmlFor="zip">ZIP Code</label>
            <input type="text" id="zip" placeholder="400001" required />

            <label htmlFor="card">Card Number</label>
            <input
              type="text"
              id="card"
              placeholder="xxxx xxxx xxxx xxxx"
              required
            />

            <div className="row">
              <div className="col">
                <label htmlFor="expiry">Expiry</label>
                <input type="text" id="expiry" placeholder="MM/YY" required />
              </div>
              <div className="col">
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" placeholder="123" required />
              </div>
            </div>
            <button type="submit" className="pay-button">
              Pay Now
            </button>
          </form>
        </div>

        <div className="summary-section">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>₹{productTotal.toFixed(2)}</span>
          </div>
          <div className="summary-item">
            <span>Shipping</span>
            <span>₹{shipping}</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span>₹{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
