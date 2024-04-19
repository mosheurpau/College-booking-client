import { Link } from "react-router-dom";
import CollegeCard from "../../../Shared/CollegeCard/CollegeCard";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import useColleges from "../../hooks/useColleges";
import Loading from "../../../Shared/Loading/Loading";

const PopularColleges = () => {
  const [colleges, loading] = useColleges();
  const topColleges = colleges.filter(
    (college) => college.category === "popular"
  );

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <section className="my-20">
      <Sectiontitle heading="Popular colleges"></Sectiontitle>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
        {topColleges.map((topCollege) => (
          <CollegeCard
            key={topCollege._id}
            topCollege={topCollege}
          ></CollegeCard>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link to="/colleges">
          <button className="btn btn-sm btn-outline uppercase border-0 border-b-2 mt-4">
            See all colleges
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PopularColleges;
