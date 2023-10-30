// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Component } from "./styles";


export default function Carousel() {
  return (
    <Component>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        autoplay={{
          delay: 2500
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"

      >
        <SwiperSlide>
          teste
        </SwiperSlide>
        <SwiperSlide>
          teste
        </SwiperSlide>
        <SwiperSlide>
          teste
        </SwiperSlide>
        <SwiperSlide>
          teste
        </SwiperSlide>
      </Swiper>
    </Component>
  );
}
