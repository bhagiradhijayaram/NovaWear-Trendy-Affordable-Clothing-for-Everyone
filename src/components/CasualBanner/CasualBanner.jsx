import "./CasualBanner.css";

const CasualBanner = () => {
  return (
    <section className="casual-banner-section">
      <div className="casual-banner-container">
        <div className="image-container">
          <img
            src="https://www.sliderrevolution.com/wp-content/uploads/revslider/fashion3.jpg"
            alt="Trendy Couple"
            className="banner-image"
          />
        </div>
        <div className="content-wrapper">
          <p className="section-label">CasualBanner</p>
          <h2 className="section-title">The Casual Section</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <a href="#" className="link-button">
            Explore Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default CasualBanner;
