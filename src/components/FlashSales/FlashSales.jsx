import { useEffect, useState } from "react";
import "./FlashSales.css";

const FlashSales = () => {
  const [sales, setSales] = useState([]);
  const [time, setTime] = useState("");
  const [countdown, setCountdown] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/data/flashSales.json");
      const data = await response.json();
      setSales(data.products);
      setTime(data.endsIn); // e.g. "2025-05-05T23:59:59Z"
    } catch (error) {
      console.error("Failed to fetch flash sales data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!time) return;

    const targetDate = new Date(time);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown("Deal ended");
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return (
    <section className="flash-sales-section">
      <section className="section-heading">
        <h2>Limited Time Flash Deals!</h2>
      </section>

      <ul className="sales-container">
        {sales.map((product) => (
          <li key={product.id} className="sales-card">
            <div className="image-wrapper">
              <img
                src={product.image}
                alt={product.name}
                className="sales-image"
              />
              <span className="discount-badge">
                {product.discountPercent}% OFF
              </span>
            </div>
            <h4 className="product-name">{product.name}</h4>
            <p className="price">
              ₹{product.price}
              <span className="original-price">₹{product.originalPrice}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="time-container">
        {countdown && <p className="timer">Ends in: {countdown}</p>}
      </div>
    </section>
  );
};

export default FlashSales;
