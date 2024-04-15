import CollegeCard from "../../Shared/CollegeCard/CollegeCard";
import coverImg from "../../assets/college-img/college-bg.jpg";
import useColleges from "../hooks/useColleges";

const Colleges = () => {
  const [colleges] = useColleges();

  return (
    <section>
      <div
        className="hero min-h-80 pt-24 pb-8 px-8 md:pt-36 md:pb-20 md:px-20"
        style={{
          backgroundImage: `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60  "></div>

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md py-4">
            <h1 className="text-2xl font-bold border-y-2 py-4 px-4 text-white">
              Comprehensive List of Colleges
            </h1>
            <p className="mt-5 mx-4 text-white">
              Explore a Diverse Range of Higher Education Institutions.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        {colleges.map((topCollege) => (
          <CollegeCard
            key={topCollege._id}
            topCollege={topCollege}
          ></CollegeCard>
        ))}
      </div>
    </section>
  );
};

export default Colleges;
