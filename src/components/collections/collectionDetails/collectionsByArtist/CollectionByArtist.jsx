import React, { useState } from "react";
import styles, { Layout } from "../../../../styles/AppdeyCustomStyles";
import { ProductArtMoreData } from "../../../../utils/CarouselData";
import CollectionsByArtistsCards from "./CollectionsByArtistsCards";

const CollectionByArtist = () => {
  const [hover, setHover] = useState(null);
  const { flexCol, flexCentered, paragraph2, flexStart } = styles;
  const { gridLayoutSection } = Layout;
  return (
    <>
      <div className="">
        <div className={`${flexCol} space-y-6`}>
          {/* <div className={`${flexStart} my-4`}>
            <h4 className={`${paragraph2} text-xxl tracking-widest`}>
              You might also like
            </h4>
          </div> */}
          <div className={`${gridLayoutSection}`}>
            {ProductArtMoreData.map((item, index) => (
              <CollectionsByArtistsCards
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

export default CollectionByArtist;
