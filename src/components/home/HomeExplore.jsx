import React, { useState } from "react";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";
import { ExploreData } from "../../utils/CarouselData";
import HomeExploreCard from "./HomeExploreCard";

const HomeExplore = () => {
  const {
    flexCol,
    flexCentered,
    paragraph2,
    paragraph3,
    transitions,
    transitions2,
  } = styles;
  const [hover, setHover] = useState(null);
  const { gridLayoutSection } = Layout;
  return (
    <>
      <div>
        <div className={`${flexCol}`}>
          <div className={`${flexCentered} my-12`}>
            <h4 className={`${paragraph2} text-2xl`}>
              Explore our new arrivals
            </h4>
          </div>
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
        </div>
      </div>
    </>
  );
};

export default HomeExplore;
