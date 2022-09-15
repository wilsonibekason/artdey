import React from "react";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";

const HomeNewsLetter = () => {
  const {
    flexCol,
    flexCentered,
    paragraphCustom,
    inputStyles,
    labelStyleCustom,
  } = styles;
  const { BsArrowRight } = useIcon();
  return (
    <>
      <div className={` my-10`}>
        <div className={`${flexCol} space-y-5`}>
          <div className={`${flexCentered}`}>
            <h4
              className={`${paragraphCustom} text-lg md:text-5xl text-gradientBaseAccent`}
            >
              Be the first to know
            </h4>
          </div>

          <div className={`max-w-full ${flexCentered}`}>
            <p
              className={`${paragraphCustom} text-gray-500 text-sm md:text-lg  lg:text-xl`}
            >
              Join our email list to learn about exclusive showings and new
              collections.
            </p>
          </div>
          <div className={`${flexCentered}`}>
            {/* email submittmission */}
            <div>
              <div className={`relative  group  `}>
                <span
                  className={`absolute right-2 top-4 focus-within:text-gray-700`}
                >
                  <BsArrowRight size={20} className="text-gray-500" />
                </span>
                <input
                  type="text"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className={`${inputStyles}`}
                />
                <label htmlFor="email" className={`${labelStyleCustom}`}>
                  Email
                </label>
              </div>
            </div>
            {/* end of email submission */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeNewsLetter;
