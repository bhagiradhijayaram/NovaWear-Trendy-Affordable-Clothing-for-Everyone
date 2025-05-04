import "./Brands.css";

const Brands = () => {
  const brands = [
    { id: 1, alt: "puma" },
    { id: 2, alt: "Levi's" },
    { id: 3, alt: "nike" },
    { id: 4, alt: "alley solly" },
    { id: 5, alt: "chanel" },
    { id: 6, alt: "adidas" },
  ];

  return (
    <section className="brands-section">
      <h2 className="brands-heading">Trusted by Top Brands</h2>
      <div className="brands-container">
        {brands.map((brand) => (
          <img
            key={brand.id}
            src={`./assets/brands/brand${brand.id}.png`}
            alt={brand.alt}
            className="brand-logo"
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
};

export default Brands;
