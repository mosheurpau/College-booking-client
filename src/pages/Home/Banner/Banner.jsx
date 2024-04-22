import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/college-img/1.jpg";
import img2 from "../../../assets/college-img/2.jpg";
import img3 from "../../../assets/college-img/3.jpg";
import img4 from "../../../assets/college-img/4.jpg";

const Banner = () => {
  return (
    <section className="z-0">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showStatus={false}
        thumbWidth={80}
        thumbHeight={50}
      >
        <div>
          <img src={img1} alt="Banner 1" />
        </div>
        <div>
          <img src={img3} alt="Banner 2" />
        </div>
        <div>
          <img src={img2} alt="Banner 3" />
        </div>
        <div>
          <img src={img4} alt="Banner 4" />
        </div>
      </Carousel>
    </section>
  );
};

export default Banner;
