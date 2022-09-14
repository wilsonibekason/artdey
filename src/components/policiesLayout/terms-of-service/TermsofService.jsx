import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const TermsofService = () => {
  const { flexCol, paragraphCustom } = styles;
  return (
    <>
      <div>
        <div className={`${flexCol}`}>
          <div>
            <h1
              className={`${paragraphCustom} capitalize text-6xl text-gradientBaseAccent `}
            >
              terms and service
            </h1>
          </div>
          {/* terms and services contents */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default TermsofService;
