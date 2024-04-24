import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const BannerSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img className="w-full h-screen" src="/src/assets/homes/home1.1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen" src="/src/assets/homes/home2.1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen" src="/src/assets/homes/home3.1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen" src="/src/assets/homes/home4.1.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BannerSlider;
