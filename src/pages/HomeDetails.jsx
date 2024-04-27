import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Helmet } from "react-helmet-async";

const HomeDetails = () => {
  const allHomeInfo = useLoaderData();
  const { id } = useParams();
  const clickedHome = allHomeInfo.find((home) => home.id === id);
  const {
    image1,
    image2,
    estate_title,
    area,
    location,
    segment_name,
    status,
    price,
    facilities,
    description,
  } = clickedHome;
  return (
    <div className="container mx-auto my-3 lg:my-5 grid gap-3 grid-cols-12">
      <Helmet>
        <title>Homey | {estate_title}</title>
      </Helmet>
      <div className="col-span-12 lg:col-span-8">
        <img className="w-full" src={image1} />
      </div>
      <div className="col-span-12 lg:col-span-4 bg-green-100 p-2 grid">
        <h1 className="text-2xl font-bold mb-2 text-center border-b p-1 border-green-200 animate__animated animate__backInLeft">
          {estate_title}
        </h1>
        <p className="text-2xl lg:text-5xl font-medium my-3 lg:my-5 italic animate__animated animate__backInRight">
          {area}
        </p>
        <p className="text-2xl lg:text-4xl font-medium my-3 lg:my-5 italic animate__animated animate__backInLeft flex items-center justify-end">
          <FaLocationDot />
          {location}
        </p>
        <p className="text-2xl lg:text-5xl font-medium my-3 lg:my-5 italic animate__animated animate__backInRight">
          {segment_name} Home
        </p>
        <p className="text-2xl lg:text-4xl font-medium my-3 lg:my-5 italic animate__animated animate__backInLeft flex items-center justify-end">
          Only for {status}
        </p>
        <p className="text-6xl text-center animate__animated animate__backInUp">{price}</p>
      </div>
      <div className="col-span-12 lg:col-span-4 bg-green-100 p-2 grid">
        <div className="flex flex-col gap-3 flex-wrap animate__animated animate__backInLeft">
          <span className="font-bold text-2xl lg:text-4xl text-center">Facilities</span>
          {facilities.map((item, i) => (
            <li
              className="list-none px-3 text-white text-lg lg:text-xl flex gap-2 py-4 items-center rounded-xl text-nowrap bg-stone-900"
              key={i}
            >
              <IoIosCheckmarkCircle />
              {item}
            </li>
          ))}
        </div>
        <p className="text-2xl lg:text-3xl font-bold text-center underline animate__animated animate__backInRight">
          Details
        </p>
        <p className="font-medium text-justify animate__animated animate__backInRight">
          {description}
        </p>
      </div>
      <div className="col-span-12 lg:col-span-8">
        <img className="w-full" src={image2} />
      </div>
    </div>
  );
};

export default HomeDetails;
