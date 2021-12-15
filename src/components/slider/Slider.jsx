import React, {
  // useState
} from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// import styles from "./slider.module.scss";

import "swiper/swiper.scss";
// import SwiperCore, { Scrollbar } from "swiper";
// SwiperCore.use([Scrollbar]);
function Slider(props) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
}

export default Slider;
