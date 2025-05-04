// ProductData.jsx
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, incrementQuantity, decrementQuantity } from "../../store";

const ProductData = ({ productData }) => {
  const dispatch = useDispatch();
  const { id, title, image, description, price } = productData;

  const quantity = useSelector((state) => {
    const item = state.cartData.find((item) => item.id === id);
    return item ? item.quantity : 0;
  });

  const addItemToCart = () => {
    dispatch(addItem(productData));
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      dispatch(decrementQuantity(id));
    }
  };

  return (
    <li className="product-details">
      <img src={image} alt={title} className="product-img" />
      <div style={{ width: "100%", maxWidth: "250px" }}>
        <h1 className="product-title">{title}</h1>
        <p className="description">{description}</p>

        <div className="product-quantity">
          <button
            className="increment-btn"
            onClick={handleDecrement}
            disabled={quantity <= 1}
          >
            -
          </button>
          <p>{quantity}</p>
          <button className="decrement-btn" onClick={handleIncrement}>
            +
          </button>
        </div>

        <div className="price-cart">
          <p>₹{price}</p>
          <button className="add-to-cart-btn" onClick={addItemToCart}>
            {quantity > 0 ? "Added" : "Add To Cart"}
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductData;
