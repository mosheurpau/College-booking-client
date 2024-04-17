import useColleges from "../hooks/useColleges";
import admissionImg from "../../assets/college-img/admission-bg.jpg";
import { useNavigate } from "react-router-dom";

const Admission = () => {
  const [colleges] = useColleges();
  const navigate = useNavigate();
  const navigateToAdmissionFrom = (_id) => {
    navigate(`/admission/${_id}`);
  };
  return (
    <section>
      <div
        className="hero min-h-80 pt-24 pb-8 px-8 md:pt-36 md:pb-20 md:px-20"
        style={{
          backgroundImage: `url(${admissionImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60  "></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-4 md:py-14">
            <h1 className="text-2xl md:text-4xl font-bold border-y-2 py-4 px-4 text-white">
              List of Colleges for Admission
            </h1>
            <p className="mt-5 mx-4 text-white font-bold">
              Choose your desired college and fill out the admission form.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-14">
        {colleges.map((college, index) => (
          <div key={index} className=" border-2 rounded-lg shadow-md p-4">
            <button
              onClick={() => navigateToAdmissionFrom(college._id)}
              className="btn btn-sm btn-outline uppercase border-0 border-b-2"
            >
              <h3 className="text-lg font-semibold mb-2">
                {college?.college_name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                By {college?.admission_date}
              </p>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admission;
