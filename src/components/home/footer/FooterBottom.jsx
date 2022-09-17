import React from "react";
import styles, { Layout } from "../../../styles/AppdeyCustomStyles";
import { SelectOptionData } from "../../../utils/CarouselData";

const FooterBottom = () => {
  const { flexCol, flexCentered, paragraphCustom } = styles;
  const { PaymentLayout } = Layout;
  // hidden md:block lg:block
  return (
    <>
      <div className={`my-0 md:my-12`}>
        <div className={`${flexCol} space-y-4`}>
          <div className={`${flexCentered}`}>
            <div className={`${PaymentLayout} `}>
              {Array(8)
                .fill()
                .map((i) => (
                  <div
                    className="w-10 h-6 shadow-lg rounded-lg bg-gray-800 "
                    key={i}
                  ></div>
                ))}
            </div>
          </div>
          <div className={`${flexCentered}`}>
            <div>
              <p className={` ${paragraphCustom} text-[10px] text-gray-900`}>
                © 2022, art2cash Powered by Shopify
              </p>
            </div>
          </div>
          <div className={`${flexCentered}`}>
            <select
              name="countryList"
              id=""
              value={"select"}
              className=" w-80 rounded-md border-none outline-none focus-within:border focus:border-gray-800"
            >
              {[...SelectOptionData]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item, index) => (
                  <option
                    key={index + 1}
                    value=""
                    className="text-gray-900 bg-white border border-solid border-gray-500 rounded-t-lg"
                  >
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
