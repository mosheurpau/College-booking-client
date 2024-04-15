import CollegeCard from "../../../Shared/CollegeCard/CollegeCard";
import Sectiontitle from "../../../components/Sectiontitle/Sectiontitle";
import useColleges from "../../hooks/useColleges";

const PopularColleges = () => {
  const [colleges] = useColleges();
  const topColleges = colleges.filter(
    (college) => college.category === "popular"
  );
  return (
    <section className="my-20">
      <Sectiontitle heading="Popular colleges"></Sectiontitle>
      <div className="grid grid-cols-3 gap-4 mt-14">
        {topColleges.map((topCollege) => (
          <CollegeCard
            key={topCollege._id}
            topCollege={topCollege}
          ></CollegeCard>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-sm btn-outline uppercase border-0 border-b-2 mt-4    ">
          See all colleges
        </button>
      </div>
    </section>
  );
};

export default PopularColleges;
