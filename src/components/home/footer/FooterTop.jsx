import React from "react";
import { Link } from "react-router-dom";
import { artdey_logo } from "../../../assets";
import { useIcon } from "../../../services/OnIconContext";
import styles from "../../../styles/AppdeyCustomStyles";
import { FooterTopData } from "../../../utils/CarouselData";

const FooterTop = () => {
  const {
    flexCol,
    flexRow,
    flexRowJustify,
    paragraphCustom,
    transitions,
    inputStyles,
    labelStyleCustom,
  } = styles;
  const { BsArrowRight } = useIcon();
  return (
    <>
      <div className={`${flexCol} space-y-8`}>
        <div>
          <div className={`${flexRowJustify}`}>
            <div>
              <div>
                <ul className={`${flexCol} space-y-4`}>
                  {FooterTopData.map((item, index) =>
                    item.members.map((item, i) => (
                      <li key={i}>
                        <Link
                          to={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${paragraphCustom} text-gray-800 tracking-wider ${transitions} hover:underline`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <div>
              <img src={artdey_logo} alt="" className="w-56" />
            </div>
            <div className={``}>
              <ul className={`${flexCol} space-y-3`}>
                <span className={`${paragraphCustom} text-gray-800 text-lg`}>
                  Contact Us
                </span>
                <li className={`${paragraphCustom} text-gray-800 text-lg`}>
                  hello@artdey.com
                </li>
                <li className={`${paragraphCustom} text-gray-800 text-lg`}>
                  +234 704 921 5419
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={`${flexCol} space-y-6`}>
          <h3 className={`${paragraphCustom} text-gray-900 text-xl`}>
            Subscribe to our emails
          </h3>
          {/* email submittmission */}
          <div>
            <div className={`relative  group  max-w-[35%] `}>
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
    </>
  );
};

export default FooterTop;
