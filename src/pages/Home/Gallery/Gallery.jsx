import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/college-img/slide1.jpg";
import slide2 from "../../../assets/college-img/slide2.jpg";
import slide3 from "../../../assets/college-img/slide3.jpg";
import slide4 from "../../../assets/college-img/slide4.jpg";
import slide5 from "../../../assets/college-img/slide5.jpg";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

const Gallery = () => {
  return (
    <section className="mt-24">
      <Sectiontitle heading={"Graduates group pictures"}></Sectiontitle>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h2
            style={{ textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF" }}
            className="bg-black opacity-70 text-white text-sm md:text-3xl text-center font-bold py-2 px-4"
          >
            Blue Horizon College
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h2
            style={{ textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF" }}
            className="bg-black opacity-70 text-white text-sm md:text-3xl text-center font-bold py-2 px-4"
          >
            Crescent Valley University
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h2
            style={{ textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF" }}
            className="bg-black opacity-70 text-white text-sm md:text-3xl text-center font-bold py-2 px-4"
          >
            Harmony Institute of Technology
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h2
            style={{ textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF" }}
            className="bg-black opacity-70 text-white text-sm md:text-3xl text-center font-bold py-2 px-4"
          >
            Summit College
          </h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h2
            style={{ textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF" }}
            className="bg-black opacity-70 text-white text-sm md:text-3xl text-center font-bold py-2 px-4"
          >
            Evergreen University
          </h2>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
