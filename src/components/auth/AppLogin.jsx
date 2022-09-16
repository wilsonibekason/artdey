import React from "react";
import { Link } from "react-router-dom";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";

const AppLogin = () => {
  const {
    flexCol,
    flexCentered,
    inputStyles,
    ButtonStyle,
    labelStyleCustom,
    paragraphCustom,
    transitions,
    inputStyles2,
  } = styles;
  const { BsArrowRight } = useIcon();
  return (
    <>
      <div className={`align-middle py-12 flex items-center justify-center`}>
        <div>
          <div className={`${flexCol} space-y-10`}>
            <div className={`${flexCentered}`}>
              <h4
                className={`${paragraphCustom} text-4xl text-gray-800 capitalize`}
              >
                login
              </h4>
            </div>
            <div className={`${flexCol} space-y-6 `}>
              <div>
                <div className="mx-10 md:mx-0">
                  <div className={`relative  group  max-w-full `}>
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
                    <label htmlFor="email" className={`${labelStyleCustom}`}>
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div className={`mx-10 md:mx-0`}>
                  <div className={`relative  group  max-w-full `}>
                    <span
                      className={`absolute right-2 top-4 focus-within:text-gray-700`}
                    >
                      <BsArrowRight size={20} className="text-gray-500" />
                    </span>
                    <input
                      type="password"
                      placeholder="password"
                      autoComplete="password"
                      required
                      className={`${inputStyles2}  w-full md:w-[26rem] `}
                    />
                    <label htmlFor="password" className={`${labelStyleCustom}`}>
                      Password
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <p
                  className={`${paragraphCustom} underline text-gray-500 hover:text-gray-900 ${transitions}`}
                >
                  {" "}
                  Forgot your password
                </p>
              </div>
            </div>
            <div className={`${flexCentered}`}>
              <div className={`${flexCol} items-center space-y-2`}>
                <div>
                  <button
                    className={`${ButtonStyle} py-3 px-10 bg-gradientBaseAccent text-white hover:bg-gradientBaseBg2 hover:text-gradientBaseAccent ${transitions}`}
                  >
                    Sign in
                  </button>
                </div>
                <div>
                  <Link to={"/register"}>
                    <p
                      className={`${paragraphCustom} underline text-gray-700 hover:text-gray-900 ${transitions} `}
                    >
                      create account
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLogin;
