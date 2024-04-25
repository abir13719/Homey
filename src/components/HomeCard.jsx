const HomeCard = ({ home }) => {
  const { image1, estate_title, price, status, area, location } = home;
  return (
    <div className="my-5 bg-slate-100 p-5 rounded-xl">
      <img src={image1} />
      <h1 className="font-bold text-xl my-2">{estate_title}</h1>

      <div className="flex justify-between">
        <p className="font-medium">Price: {price}</p>
        <p>Area: {area}</p>
      </div>
      <div className="flex justify-between">
        <p>Status: {status}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default HomeCard;
