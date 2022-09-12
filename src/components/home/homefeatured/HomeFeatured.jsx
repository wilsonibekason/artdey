import React, { useState } from "react";
import styles, { Layout } from "../../../styles/AppdeyCustomStyles";
import { ExploreData, HomeFeaturedData } from "../../../utils/CarouselData";
import HomeFeaturedCard from "./HomeFeaturedCard";

const HomeFeatured = () => {
  const [hover, setHover] = useState(null);
  const { flexCol, paragraph2, flexCentered } = styles;
  const { gridLayoutSection } = Layout;
  return (
    <>
      <div>
        <div className={`${flexCol} space-y-12`}>
          <div className={`${flexCentered} my-12`}>
            <h4 className={`${paragraph2} text-2xl`}>
              Explore our new arrivals
            </h4>
          </div>
          <div className={`${gridLayoutSection}`}>
            {HomeFeaturedData.map((item, index) => (
              <HomeFeaturedCard
                {...item}
                key={index}
                hover={hover}
                setHover={setHover}
              />
            ))}
          </div>
          <div className={`${flexCentered} `}>
            <button
              className={`py-3 px-8 font-electra text-lg text-white font-light bg-gradientBaseAccent rounded-full hover:scale-105`}
            >
              view all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFeatured;
