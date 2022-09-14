import React from "react";
import styles from "../../styles/AppdeyCustomStyles";

const GuarranteedCheckout = () => {
  const { flexCentered, flexCol, paragraphCustom, flexRow } = styles;
  return (
    <>
      <div className={`${flexCentered} my-8`}>
        <div className={`${flexCol} items-center space-y-4`}>
          <h4 className={`${paragraphCustom} text-xl text-gray-800 `}>
            Guaranteed safe checkout
          </h4>
          <div className={`${flexRow} space-x-4`}>
            {Array(5)
              .fill()
              .map((index) => (
                <div
                  key={index}
                  className={`shadow rounded w-20 h-16 bg-gradientBaseBg2 border border-gray-700 `}
                ></div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuarranteedCheckout;
