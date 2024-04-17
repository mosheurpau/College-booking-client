import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Sectiontitle from "../../components/Sectiontitle/Sectiontitle";

const CollegeDetails = () => {
  const { collegeId } = useParams();
  const [collegeInfo, setCollegeInfo] = useState([]);
  console.log(collegeId);
  useEffect(() => {
    fetch(`http://localhost:5000/college/${collegeId}`)
      .then((res) => res.json())
      .then((data) => {
        setCollegeInfo(data);
      });
  }, [collegeId]);
  console.log(collegeInfo);
  const {
    college_img,
    college_name,
    college_rating,
    admission_date,
    research_count,
  } = collegeInfo;

  return (
    <section className="mb-4">
      <div className="mt-28">
        <Sectiontitle
          heading={collegeInfo?.college_name + " Details"}
        ></Sectiontitle>
      </div>
      <div className="hero h-fit">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img className="rounded" src={college_img} alt="college img" />
          </div>
          <div className="card shrink-0 w-full max-w-sm">
            <div className="px-6 py-4">
              <div className="font-bold text-3xl mb-2">
                <a className="hover:underline hover:text-primary" href="#">
                  {college_name}
                </a>
              </div>

              <div className="flex items-center">
                <p className="me-2"> Rating: </p>
                <Rating
                  style={{ maxWidth: 120 }}
                  value={college_rating}
                  readOnly
                />
              </div>

              <p className="my-2"> Admission Date: {admission_date}</p>

              <p> Number of Research: {research_count}</p>
              <div className="my-8">
                <h3 className="text-xl font-bold">Recent Events:</h3>
                {collegeInfo?.events?.map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </div>
              <div>
                <h3 className="text-xl font-bold">Sports facilities: </h3>
                {collegeInfo?.sports_facilities?.map((sport, index) => (
                  <li key={index}>{sport}</li>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 text-center">
        <h3 className="text-xl font-bold border-b-2 w-80 pb-2 mx-auto">
          Admission process
        </h3>
        <p className="my-6 px-6">
          Apply online or through Common App Submit high school transcripts &
          test scores Write essays and letters of recommendation{" "}
        </p>
        <Link to="#">
          <button className="btn btn-outline btn-sm mb-8 border-0 border-b-2 ">
            Apply
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CollegeDetails;
