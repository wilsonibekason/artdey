import React, { useState } from "react";
import styles, { Layout } from "../../../styles/AppdeyCustomStyles";
import {
  HomeFeaturedData,
  ProductArtMoreData,
} from "../../../utils/CarouselData";
import SimilarArtistCard from "./SimilarArtistCard";

const SimilarArtistLyout = () => {
  const [hover, setHover] = useState(null);
  const { flexCol, flexCentered, paragraph2, flexStart } = styles;
  const { SimilargridMoreLayoutSection } = Layout;
  return (
    <>
      <div className="mt-10 md:mt-40">
        <div className={`${flexCol} space-y-6`}>
          <div className={`${flexStart} my-4`}>
            <h4
              className={`${paragraph2} text-xl md:text-xxl tracking-widest capitalize`}
            >
              You may also like
            </h4>
          </div>
          <div className={`${SimilargridMoreLayoutSection}`}>
            {ProductArtMoreData.map((item, index) => (
              <SimilarArtistCard
                {...item}
                key={index}
                hover={hover}
                setHover={setHover}
              />
            ))}
          </div>
          <div className={`${flexCentered} hidden md:hidden lg:block`}>
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

export default SimilarArtistLyout;
