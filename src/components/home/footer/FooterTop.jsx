import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { artdey_logo, art2cashBg } from "../../../assets";
import { useIcon } from "../../../services/OnIconContext";
import styles, { responsiveStyle } from "../../../styles/AppdeyCustomStyles";
import { FooterTopData } from "../../../utils/CarouselData";

const FooterTop = () => {
  const {
    flexCol,
    paragraphCustom,
    transitions,
    inputStyles,
    labelStyleCustom,
    inputStyles2,
    labelStyleCustom2,
    flexCentered,
  } = styles;
  const { flexCenteredStart } = responsiveStyle;
  const { BsArrowRight } = useIcon();
  const navigate = useNavigate();
  return (
    <>
      <div className={`${flexCol} space-y-8`}>
        <div>
          <div
            className={`flex flex-col md:flex-row md:justify-between lg:justify-between md:items-center`}
          >
            <div>
              <div className="">
                <ul className={`${flexCol} space-y-4`}>
                  {FooterTopData.map((item, index) =>
                    item.members.map((item, i) => (
                      <li key={i} className={`flex justify-start items-start`}>
                        <span
                          className={`${paragraphCustom} text-gray-800 cursor-pointer tracking-wider ${transitions} hover:underline`}
                        >
                          <Link to={item.link}> {item.name}</Link>
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <Link to={`/`} className={`${flexCentered}`}>
              <img src={art2cashBg} alt="" className="w-40 cursor-pointer" />
            </Link>
            <div className={``}>
              <ul className={`${flexCol} space-y-3`}>
                <span
                  className={`${paragraphCustom} text-gray-800 text-sm lg:text-lg`}
                >
                  Contact Us
                </span>
                <li
                  className={`${paragraphCustom} text-gray-800 text-sm lg:text-lg`}
                >
                  hello@art2cash.com
                </li>
                <li
                  className={`${paragraphCustom} text-gray-800 text-sm  lg:text-lg`}
                >
                  +234 704 921 5419
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={`${flexCol} space-y-6`}>
          <h3
            className={`${paragraphCustom} text-gray-900 text-sm md:text-lg lg:text-xl text-center md:text-end lg:text-start`}
          >
            Subscribe to our emails
          </h3>
          {/* email submittmission */}
          <div className={`${flexCenteredStart}`}>
            <div
              className={`relative  group phone:max-w-[75%] tablet:max-w-[70%] desktop:max-w-[35%] Xdesktop:max-w-[35%] `}
            >
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
                className={`${inputStyles2} w-full md:w-[26rem]`}
              />
              <label htmlFor="email" className={`${labelStyleCustom2}`}>
                Email
              </label>
            </div>
          </div>
          {/* end of email submission */}
        </div>
      </div>
    </>
  );
};

export default FooterTop;
