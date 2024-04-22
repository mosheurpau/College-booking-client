import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import Loading from "../../../Shared/Loading/Loading";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://college-booking-server-jt9f.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reverse());
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-14">
      <Sectiontitle heading={"College Reviews"} />
      <Swiper navigation modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center mx-24 my-16 text-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <img className="my-6 rounded w-32 h-32" src={review.img} alt="" />
              <p className="mb-4">{review.comment}</p>
              <h2 className="text-lg font-bold">{review.collegeName}</h2>
              <h3 className="text-xl font-bold text-orange-400">
                {review.userName}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Reviews;
