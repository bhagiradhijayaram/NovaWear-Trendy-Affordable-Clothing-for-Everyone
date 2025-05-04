import FlashSales from "../FlashSales/FlashSales";
import About from "../About/About";
import AllProducts from "../AllProducts/AllProducts";
import Brands from "../Brands/Brands";
import CasualBanner from "../CasualBanner/CasualBanner";

import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Elevate Your Style, Effortlessly</h1>
          <p>Discover premium apparel curated for every occasion.</p>
          <div className="hero-buttons">
            <a href="#" className="btn-primary links">
              Shop New Arrivals →
            </a>
            <a href="#" className="btn-secondary links">
              Explore Collections
            </a>
          </div>
          <p className="trust-badge">✓ 10,000+ Happy Customers</p>
        </div>
      </section>
      <About />
      <FlashSales />
      <CasualBanner />
      <AllProducts />
      <Brands />
    </>
  );
};

export default Home;
