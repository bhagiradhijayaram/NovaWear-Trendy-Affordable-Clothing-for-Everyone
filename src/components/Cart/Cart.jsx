import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { deleteItem } from "../../store";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cartData);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const onHandleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const handleCheckout = () => {
    if (total > 0) {
      navigate("/payment");
    } else {
      alert("please add to items");
    }
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section">
      <section className="section-heading">
        <h2>Your Shopping Cart</h2>
      </section>
      <div
        className="cart-container"
        style={{ height: cartItems.length > 1 ? "" : "260px" }}
      >
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <p>{item.title}</p>
                  <p>₹ {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button onClick={() => onHandleDelete(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="cart-empty">Your cart is empty 🛒</div>
        )}
      </div>
      {/* Cart Summary */}
      <div className="checkout-section">
        <div className="checkout-container">
          <p>
            <span className="total-amount">Total Amount:</span>{" "}
            <span className="amount">
              <b>{total.toFixed(2)}/-</b>
            </span>
          </p>
          <p className="items-count">{cartItems.length} items in Cart</p>
          <button className="checkout-btn" onClick={handleCheckout}>
            Check Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
