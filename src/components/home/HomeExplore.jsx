import React, { useState } from "react";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";
import { ExploreData } from "../../utils/CarouselData";
import HomeExploreCard from "./HomeExploreCard";
import HomeExploreCardMobile from "./homesexplore/HomeExploreCardMobile";
import HomeExploreMobile from "./homesexplore/HomeExploreMobile";

const HomeExplore = () => {
  const {
    flexCol,
    flexCentered,
    paragraph2,
    flexRow,
    paragraph3,
    transitions,
    transitions2,
  } = styles;
  const [hover, setHover] = useState(null);
  const { gridLayoutSection } = Layout;
  return (
    <>
      <div>
        <div
          className={`${flexCol} phone:space-y-4 tablet:space-y-3 laptop:space-y-4 desktop:space-y-12 Xdesktop:space-y-12`}
        >
          <div
            className={`${flexCentered} phone:my-4 tablet:my-5 laptop:my-6 desktop:my-12 Xdesktop:my-12 `}
          >
            <h4 className={`${paragraph2} text-2xl`}>
              Explore our new arrivals
            </h4>
          </div>
          <div
            className={`${gridLayoutSection} hidden md:hidden lg:block xl:block`}
          >
            {ExploreData.map((item, index) => (
              <HomeExploreCard
                {...item}
                key={index}
                hover={hover}
                setHover={setHover}
              />
            ))}
          </div>
          <div
            className={` ${flexRow} flex-nowrap gap-x-10 w-full overflow-x-auto scrollbar-none block lg:hidden`}
          >
            {ExploreData.map((item, index) => (
              <HomeExploreCardMobile
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

export default HomeExplore;
