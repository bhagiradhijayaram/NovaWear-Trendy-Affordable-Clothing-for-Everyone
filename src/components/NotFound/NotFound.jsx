import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <section className="notfound-page-section">
      <div className="notfound-image-container">
        <img
          src="https://res.cloudinary.com/dasvdkncm/image/upload/v1746282771/5203299-removebg-preview_rot5eq.png"
          alt="Page Not Found"
          className="notfound-image"
        />
        <h1 className="notfound-title">404 - Page Not Found</h1>
        <p className="notfound-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="notfound-home-link">
          Go back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
