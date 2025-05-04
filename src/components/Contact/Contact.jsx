import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <section className="section-heading">
        <h2>Have Questions? Contact Us</h2>
      </section>
      <section className="contact-section">
        <div className="contact-container">
          {/* Google Maps Embed */}
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122410.1045963028!2d80.56248227973448!3d16.510148654964077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7e84ab4a0265!2sVijayawada%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1745569577145!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Vijayawada Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <h4>
              Have questions about our latest collections or your recent order?
              Reach out to us—we’re here to assist with sizing, shipping,
              returns, and more. We’d love to hear from you!
            </h4>
            <div className="contact-inputs-container">
              <input
                type="text"
                placeholder="Your Name"
                className="contact-input-field"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="contact-input-field"
                name="email"
                required
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="contact-input-field"
                name="phone"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                rows="6"
                className="contact-textarea"
                required
              ></textarea>
            </div>
            <div style={{ textAlign: "right" }}>
              <button type="submit" className="contact-submit-button">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
