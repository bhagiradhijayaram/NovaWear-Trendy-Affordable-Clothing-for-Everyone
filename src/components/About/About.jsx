import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          {/* Text Content */}
          <div className="about-text">
            <h2 className="about-subtitle">Our Story</h2>
            <h1 className="about-title">Redefining Fashion Since 2020</h1>
            <p className="about-description">
              Founded in 2020, our journey began with a passion for everyday
              fashion that’s both comfortable and trendsetting. What started as
              a small idea has grown into a vibrant clothing brand loved by
              thousands.
            </p>
            <button className="about-cta">Discover Our Journey</button>
          </div>

          {/* Image Grid */}
          <div className="about-images">
            <div className="image-main">
              <img
                src="./assets/aboutus-img1.jpg"
                alt="Design team working on new collection"
                className="about-img"
              />
            </div>
            <div className="image-secondary">
              <img
                src="./assets/aboutus-img2.jpg"
                alt="Model wearing our signature outfit"
                className="about-img"
              />
            </div>
            <div className="image-tertiary">
              <img
                src="./assets/aboutus-img3.jpg"
                alt="Sustainable materials we use"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
