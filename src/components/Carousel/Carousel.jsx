import { useEffect, useState } from "react";
import Slider from "react-slick";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow left-arrow" onClick={onClick}>
    <FaRegArrowAltCircleLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow right-arrow" onClick={onClick}>
    <FaRegArrowAltCircleRight />
  </div>
);

const Carousel = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const response = await fetch("data/reviews.json");
    const reviewsData = await response.json();
    setReviews(reviewsData.reviews);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="section-heading">
        <h2>What Our Customers Are Saying</h2>
      </section>
      <div className="carousel-container">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.name} className="review-slide">
              <div className="review-card">
                <img
                  src={review.image_url}
                  alt={review.name}
                  className="review-avatar"
                />
                <h3>{review.name}</h3>
                <p className="review-title">{review.title}</p>
                <p className="review-text">{review.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
