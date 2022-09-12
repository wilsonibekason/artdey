import React from "react";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";

const HomeNewsLetter = () => {
  const { flexCol, flexCentered, paragraphCustom } = styles;
  const { BsArrowRight } = useIcon();
  return (
    <>
      <div className={` my-10`}>
        <div className={`${flexCol} space-y-5`}>
          <div className={`${flexCentered}`}>
            <h4 className={`${paragraphCustom} text-5xl`}>
              Be the first to know
            </h4>
          </div>

          <div className={`max-w-full ${flexCentered}`}>
            <p className={`${paragraphCustom} text-gray-500 text-xl`}>
              Join our email list to learn about exclusive showings and new
              collections.
            </p>
          </div>
          <div className={`${flexCentered}`}>
            <div
              className={`relative  group
          `}
            >
              <span
                className={`absolute right-2 top-4 focus-within:text-gray-700`}
              >
                <BsArrowRight size={20} className="text-gray-500" />
              </span>

              <input
                type="text"
                placeholder="Email"
                className={`
                border border-solid border-gray-300 outline-none bg-white w-[26rem] py-3 px-2 rounded  placeholder:font-light placeholder:font-raleway placeholder:text-gray-700 focus:border-gray-700 focus:border-2 text-gray-800 font-raleway font-normal shadow-lg 
            `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNewsLetter;
