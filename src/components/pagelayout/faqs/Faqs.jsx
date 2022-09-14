import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";
import { faqsData } from "../../../utils/CarouselData";

const Faqs = () => {
  const { flexCol, flexCentered, paragraphCustom } = styles;
  return (
    <>
      <div className={`mx-40`}>
        <div className={`${flexCol} space-y-10`}>
          <div>
            <h1
              className={`${paragraphCustom} text-gradientBaseAccent text-6xl`}
            >
              FAQs
            </h1>
          </div>
          {/* main details  */}
          <div className={`${flexCol} space-y-6`}>
            {faqsData.map((item, index) => (
              <>
                <h4
                  className={`${paragraphCustom} text-xl text-gradientBaseAccent capitalize tracking-wider`}
                  key={index}
                >
                  {item.heading}
                </h4>
                <p
                  className={`${paragraphCustom} text-md text-gradientBaseAccent tracking-widest`}
                  key={index}
                >
                  {item.desc}.{" "}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
