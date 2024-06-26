import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { useNavigate } from "react-router-dom";
const CollegeCard = ({ topCollege }) => {
  const navigate = useNavigate();
  const navigateToCollegeDetail = (_id) => {
    navigate(`/college/${_id}`);
  };
  const {
    _id,
    college_img,
    college_name,
    college_rating,
    admission_date,
    research_count,
  } = topCollege;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto hover:shadow-2xl hover:-translate-y-4 hover:duration-500">
      <img
        className="hover:scale-110 hover:duration-1000"
        src={college_img}
        alt="college img"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{college_name}</div>

        <div className="flex items-center">
          <p className="me-2"> Rating: </p>
          <Rating style={{ maxWidth: 120 }} value={college_rating} readOnly />
        </div>

        <p className="my-2"> Admission Date: {admission_date}</p>

        <p> Number of Research: {research_count}</p>
        <div className="text-center mt-4">
          <button
            onClick={() => navigateToCollegeDetail(_id)}
            className="btn btn-sm btn-outline uppercase border-0 border-b-2"
          >
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
