import { FaInstagram } from "react-icons/fa";
import { CiYoutube, CiTwitter, CiFacebook } from "react-icons/ci";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div>
        <h2>NovaWear</h2>
        <p>Elevate Your Style, Effortlessly</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div>
        <p className="footer-content-headings">ABOUT</p>
        <ul className="footer-links">
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press</li>
          <li>NovaWear Stories</li>
        </ul>
      </div>
      <div>
        <p className="footer-content-headings">CONSUMER POLICY</p>
        <ul className="footer-links">
          <li>Cancellation & Returns</li>
          <li>Terms Of Use</li>
          <li>Security</li>
          <li>Privacy</li>
          <li>Sltemap</li>
          <li>Grievance Redressal</li>
          <li>EPR Compliance</li>
        </ul>
      </div>
      <div>
        <p className="footer-content-headings">HELP</p>
        <ul className="footer-links">
          <li>Payments</li>
          <li>Shipping</li>
          <li>Cancellation & Returns</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <p className="footer-content-headings">REGISTERED OFFICE ADDRESS:</p>
        <ul className="footer-links">
          <li>NovaWear Internet Private Limited,</li>
          <li>44-12-200A, Vijayawada,</li>
          <li>Andhra Padesh, India</li>
          <li>530005.</li>
        </ul>
        <div className="footer-social-media-icons">
          <CiFacebook size={25} />
          <CiTwitter size={25} />
          <CiYoutube size={25} />
          <FaInstagram size={22} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
