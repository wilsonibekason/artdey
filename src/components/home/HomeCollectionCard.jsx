import React from "react";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";

const HomeCollectionCard = ({ image, name }) => {
  const { flexCol, flexCentered, paragraphCustom, flexRow, transitions } =
    styles;
  const { BsArrowRight } = useIcon();
  return (
    <div className="group mb-3 cursor-pointer ">
      <div className={`${flexCol} space-y-4`}>
        <div>
          <div className={`h-[300px] md:h-[550px]`}>
            <img
              src={image}
              alt=""
              width={700}
              height={300}
              className={` ${transitions} h-full max-w-full w-full object-cover group-hover:scale-105`}
            />
          </div>
        </div>
        <div>
          <div className={`${flexCentered}`}>
            <div className={`${flexRow} items-center space-x-2`}>
              <h5
                className={`${paragraphCustom} text-white text-lg md:text-xl`}
              >
                {name}
              </h5>
              <BsArrowRight className="text-white text-lg group-hover:text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCollectionCard;
