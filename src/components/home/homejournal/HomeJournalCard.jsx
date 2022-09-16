import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const HomeJournalCard = ({ image, title, description }) => {
  const { flexCol, transitions, paragraphCustom, flexCentered } = styles;

  return (
    <div className="group cursor-pointer ">
      <div className={`${flexCol} space-y-4 group-hover:`}>
        <div>
          <div
            className={` w-[300px] h-[150px]  md:w-[300px] md:h-[150px] lg:w-[550px] lg:h-[300px]`}
          >
            <img
              src={image}
              alt=""
              width={700}
              height={300}
              className={` ${transitions} h-full max-w-full w-full object-cover group-hover:scale-105 m-auto`}
            />
          </div>
        </div>
        <div className="max-w-full flex justify-center items-center lg:group-hover:underline">
          <h4 className={`${paragraphCustom} text-center text-black text-2xl `}>
            {title}
          </h4>
        </div>
        <div>
          <p
            className={`${paragraphCustom} text-center text-gray-500 text-lg
        line-clamp-5 md:line-clamp-5 lg:line-clamp-3 w-[80%] md:w-[80%] lg:w-full tracking-wider
        `}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeJournalCard;
