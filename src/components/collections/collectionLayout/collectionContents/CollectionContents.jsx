import React, { useState } from "react";
import { CollectionContentCards } from "../..";
import styles, { Layout } from "../../../../styles/AppdeyCustomStyles";
import {
  Art2CashCollection,
  ProductArtMoreData,
} from "../../../../utils/CarouselData";

const CollectionContents = () => {
  const [hover, setHover] = useState(null);
  const { flexCol, flexStart, paragraph2, flexCentered } = styles;
  const { gridMoreLayoutSection } = Layout;
  return (
    <>
      <div className="mt-40">
        <div className={`${flexCol} space-y-6`}>
          <div className={`${flexStart} my-4`}>
            <h4 className={`${paragraph2} text-xxl tracking-widest`}>
              Collections
            </h4>
          </div>
          <div className={`${gridMoreLayoutSection}`}>
            {[...Art2CashCollection]
              .sort((a, b) => a.tag.localeCompare(b.tag))
              .map((item, index) => (
                <CollectionContentCards
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

export default CollectionContents;
