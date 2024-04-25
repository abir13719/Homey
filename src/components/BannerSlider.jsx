import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const BannerSlider = ({ allHomes }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
    >
      {allHomes.map((home) => (
        <SwiperSlide key={home.image1}>
          <img className="w-full" src={home.image1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
