import { Helmet } from "react-helmet-async";
import BannerSlider from "../components/BannerSlider";
import { useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard";

const Home = () => {
  const allHomes = useLoaderData();
  return (
    <div className="container mx-auto my-5">
      <Helmet>
        <title>Homey | Home</title>
      </Helmet>
      <BannerSlider allHomes={allHomes}></BannerSlider>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {allHomes.map((home) => (
          <HomeCard key={home.id} home={home}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
