import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
const CollegeCard = ({ topCollege }) => {
  const {
    college_img,
    college_name,
    college_rating,
    admission_date,
    research_count,
  } = topCollege;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img src={college_img} alt="college img" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{college_name}</div>

        <div className="flex items-center">
          <p className="me-2"> Rating: </p>
          <Rating style={{ maxWidth: 120 }} value={college_rating} readOnly />
        </div>

        <p className="my-2"> Admission Date: {admission_date}</p>

        <p> Number of Research: {research_count}</p>
        <div className="text-center mt-4">
          <button className="btn btn-sm btn-outline uppercase border-0 border-b-2">
            view details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
