import { Helmet } from "react-helmet-async";
import BannerSlider from "../components/BannerSlider";
import HomeCard from "../components/HomeCard";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Homey | Home</title>
      </Helmet>
      <BannerSlider></BannerSlider>
      <HomeCard></HomeCard>
    </div>
  );
};

export default Home;
