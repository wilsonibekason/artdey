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
import { CarouselData } from "../../utils/CarouselData";
const HomeCarousel = () => {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <div className>
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
        >
          {CarouselData.map((item, index) => {
            return (
              <SwiperSlide>
                <div
                  className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[30vh] md:min-h-[calc(100vh-12vh)] "
                  key={index}
                >
                  <div
                    className="absolute top-0 w-full h-full bg-center bg-no-repeat bg-cover "
                    style={{
                      backgroundImage: `url('${item.image}')`,
                    }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default HomeCarousel;
