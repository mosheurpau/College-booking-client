import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import PopularColleges from "../PopularColleges/PopularColleges";
import ResearchSection from "../ResearchSection/ResearchSection";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularColleges></PopularColleges>
      <Gallery></Gallery>
      <ResearchSection></ResearchSection>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
