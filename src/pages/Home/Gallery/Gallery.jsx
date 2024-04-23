import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";

import slide1 from "../../../assets/college-img/slide1.jpg";
import slide2 from "../../../assets/college-img/slide2.jpg";
import slide3 from "../../../assets/college-img/slide3.jpg";
import slide4 from "../../../assets/college-img/slide4.jpg";
import slide5 from "../../../assets/college-img/slide5.jpg";

const Gallery = () => {
  // Array of image paths and titles
  const images = [
    { src: slide1, title: "Blue Horizon College" },
    { src: slide2, title: "Crescent Valley University" },
    { src: slide3, title: "Harmony Institute of Technology" },
    { src: slide4, title: "Summit College" },
    { src: slide5, title: "Evergreen University" },
  ];

  return (
    <section className="mt-24">
      <Sectiontitle heading={"Graduates group pictures"}></Sectiontitle>
      <Swiper
        slidesPerView={1.4}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="my-8">
              <img src={image.src} alt="" />
              <h2
                style={{ textShadow: "0 0 3px #0000FF, 0 0 5px #0000FF" }}
                className="bg-black opacity-70 text-white text-sm md:text-3xl text-center font-bold py-2 px-4"
              >
                {image.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Gallery;
