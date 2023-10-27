// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import required modules
import { FreeMode, Pagination } from "swiper";
import { Component } from "./styles";
import Item from "./item";

export default function Carousel() {
  return (
    <Component>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
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
        <SwiperSlide>
          teste
        </SwiperSlide>
      </Swiper>
    </Component>
  );
}
