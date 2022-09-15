import React, { useState } from "react";
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
import { Layout } from "../../../styles/AppdeyCustomStyles";
import { ExploreData } from "../../../utils/CarouselData";
import HomeExploreCard from "../HomeExploreCard";
const HomeExploreMobile = () => {
  const [hover, setHover] = useState(null);
  const { gridLayoutSection } = Layout;
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
        >
          <div className={`${gridLayoutSection}`}>
            {ExploreData.map((item, index) => (
              <HomeExploreCard
                {...item}
                key={index}
                hover={hover}
                setHover={setHover}
              />
            ))}
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default HomeExploreMobile;
