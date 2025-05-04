import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import Services from "../Services/Services";

import "./aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus-section">
      <About />
      <Services />
      <Carousel />
    </div>
  );
};

export default Aboutus;
