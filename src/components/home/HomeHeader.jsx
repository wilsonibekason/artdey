import React from "react";
import styles from "../../styles/AppdeyCustomStyles";

const HomeHeader = () => {
  const { itemsCenter } = styles;
  return (
    <>
      <div className={`px-2 md:px-8 lg:px-56 xl:px-56 py-16 w-full`}>
        <div>
          <h4
            className={`font-electra font-thin text-xl md:text-2xl lg:text-xxl  text-center text-gray-800 leading-normal`}
          >
            A curated selection of exceptional art from artists across Africa
          </h4>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
