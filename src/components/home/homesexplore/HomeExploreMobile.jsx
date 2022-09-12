import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  /**SwiperCore */ Autoplay,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HomeExploreMobile = () => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div>
        <Swiper
          modules={[Navigation, EffectFade, Pagination, Scrollbar, A11y]}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          effect="fade"
          loop
          speed={500}
          pagination={{ clickable: true }}
          Scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slider has changed")}
        ></Swiper>
      </div>
    </>
  );
};

export default HomeExploreMobile;
