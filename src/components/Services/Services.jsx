import "./Services.css";

const services = [
  {
    id: 1,
    slide: "Custom Styling",
    title: "Personalized Fashion Advice",
    content:
      "Get expert style tips tailored just for you. Whether it's a casual day out or a special event, we help you look your best with curated outfit recommendations.",
  },
  {
    id: 2,
    slide: "Quality Clothing",
    title: "Premium Fabrics, Perfect Fit",
    content:
      "Our clothes are made from high-quality, breathable fabrics that ensure comfort and durability—crafted to complement your daily lifestyle.",
  },
  {
    id: 3,
    slide: "Easy Returns",
    title: "Hassle-Free Exchanges",
    content:
      "Changed your mind? No worries. Enjoy a simple and quick return or exchange process within 7 days of purchase, no questions asked.",
  },
  {
    id: 4,
    slide: "Worldwide Delivery",
    title: "Ship Anywhere, Anytime",
    content:
      "We deliver to your doorstep—across cities, states, and borders. Track your order and receive your favorite styles right where you are.",
  },
];

const Services = () => {
  return (
    <>
      <section className="section-heading">
        <h2>Our Exclusive Services</h2>
      </section>
      <div className="services-section">
        <ul className="services-container">
          {services.map((about) => (
            <li className="service-card" key={about.id}>
              <h4 className="service-heading">{about.slide}</h4>
              <h6 className="service-title">{about.title}</h6>
              <p className="service-content">{about.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
