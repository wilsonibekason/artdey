import React from "react";
import { useIcon } from "../../services/OnIconContext";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";
import { collectionData } from "../../utils/CarouselData";
import HomeCollectionCard from "./HomeCollectionCard";

const HomeInspiredCollections = () => {
  const { CollectionsLayout } = Layout;
  const {
    flexCol,
    flexCentered,
    paragraphCentralised,
    paragraphCustom,
    flexRow,
  } = styles;
  const { BsArrowRight } = useIcon();
  return (
    <>
      <div className=" my-10 md:my-20 mx-4 md:mx-12 lg:mx-28  pt-8 md:pt-20">
        <div className={`${flexCol} space-y-6`}>
          <div className={`${flexCol} space-y-4 ${flexCentered}`}>
            <div>
              <h4 className={`${paragraphCustom} uppercase text-gray-300`}>
                Shop By Artist
              </h4>
            </div>
            <div className={`max-w-[90%] md:max-w-[90%]  lg:max-w-[60%]`}>
              <p className={`${paragraphCentralised} text-white`}>
                {" "}
                Inspired collections that complement your space and style
              </p>
            </div>
          </div>
          <div className={`${CollectionsLayout} my-4`}>
            {/*  */}
            {collectionData.map((item, index) => (
              <HomeCollectionCard {...item} key={index} />
            ))}

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInspiredCollections;
