import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const HomeJournalCard = ({ image, title, description }) => {
  const { flexCol, transitions, paragraphCustom } = styles;

  return (
    <div className="group">
      <div className={`${flexCol} space-y-4 group-hover:`}>
        <div>
          <div className={`w-[550px] h-[300px]`}>
            <img
              src={image}
              alt=""
              width={700}
              height={300}
              className={` ${transitions} h-full max-w-full w-full object-cover group-hover:scale-105`}
            />
          </div>
        </div>
        <div className="max-w-full flex justify-center items-center group-hover:underline">
          <h4 className={`${paragraphCustom} text-center text-black text-2xl `}>
            {title}
          </h4>
        </div>
        <div>
          <p
            className={`${paragraphCustom} text-center text-gray-500 text-lg
        line-clamp-3
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
