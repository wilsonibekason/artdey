import React, { useState } from "react";
import styles, { Layout } from "../../../styles/AppdeyCustomStyles";
import { ExploreData, HomeFeaturedData } from "../../../utils/CarouselData";
import HomeFeaturedCard from "./HomeFeaturedCard";
import HomeFeatureCardMobile from "./homefeaturemobile/HomeFeatureCardMobile";

const HomeFeatured = () => {
  const [hover, setHover] = useState(null);
  const { flexCol, paragraph2, flexCentered, flexRow } = styles;
  const { gridLayoutSection } = Layout;
  return (
    <>
      <div className=" phone:mt-10 tablet:mt-10 laptop:mt-10 desktop:mt-40  Xdesktop:mt-40">
        <div className={`${flexCol} space-y-4 md:space-y-5 lg:space-y-12`}>
          <div className={`${flexCentered} my-4`}>
            <h4 className={`${paragraph2} text-2xl`}>
              Expertly curated, affordably priced
            </h4>
          </div>
          <div className={`hidden md:hidden lg:block`}>
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
          </div>

          <div
            className={` ${flexRow} flex-nowrap gap-x-10 w-full overflow-x-auto scrollbar-none block lg:hidden`}
          >
            {HomeFeaturedData.map((item, index) => (
              <HomeFeatureCardMobile
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
