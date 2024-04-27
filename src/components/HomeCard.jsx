import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeCard = ({ home }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const { image1, estate_title, price, status, area, location, id } = home;
  return (
    <div className="my-5 bg-green-100 p-5 rounded-xl" data-aos="slide-up">
      <img src={image1} data-aos="zoom-in" />
      <h1 className="font-bold text-xl my-2">{estate_title}</h1>

      <div className="flex justify-between">
        <p className="font-medium">Price: {price}</p>
        <p>Area: {area}</p>
      </div>
      <div className="flex justify-between">
        <p>Status: {status}</p>
        <p>{location}</p>
      </div>
      <Link to={`/${id}`}>
        <button className="btn w-full bg-black text-white hover:bg-black">View Details</button>
      </Link>
    </div>
  );
};

export default HomeCard;
