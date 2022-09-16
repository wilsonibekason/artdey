import React from "react";
import { Link } from "react-router-dom";
import { useIcon } from "../../services/OnIconContext";
import styles from "../../styles/AppdeyCustomStyles";

const AppRegister = () => {
  const {
    flexCol,
    flexCentered,
    inputStyles2,
    ButtonStyle,
    labelStyleCustom,
    paragraphCustom,
    transitions,
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
                create account
              </h4>
            </div>
            {/* second div */}
            <div className={`${flexCol} space-y-6`}>
              <div>
                <div>
                  <div className={`relative  group  max-w-full `}>
                    <span
                      className={`absolute right-2 top-4 focus-within:text-gray-700`}
                    >
                      <BsArrowRight size={20} className="text-gray-500" />
                    </span>
                    <input
                      type="text"
                      placeholder="firstname"
                      autoComplete="firstname"
                      required
                      className={`${inputStyles2}  w-full md:w-[26rem]`}
                    />
                    <label
                      htmlFor="firstname"
                      className={`${labelStyleCustom}`}
                    >
                      First name
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className={`relative  group  max-w-full `}>
                    <span
                      className={`absolute right-2 top-4 focus-within:text-gray-700`}
                    >
                      <BsArrowRight size={20} className="text-gray-500" />
                    </span>
                    <input
                      type="text"
                      placeholder="lastname"
                      autoComplete="lastname"
                      required
                      className={`${inputStyles2}  w-full md:w-[26rem]`}
                    />
                    <label htmlFor="lastname" className={`${labelStyleCustom}`}>
                      Last name
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <div className={`relative  group  max-w-full `}>
                    <span
                      className={`absolute right-2 top-4 focus-within:text-gray-700`}
                    >
                      <BsArrowRight size={20} className="text-gray-500" />
                    </span>
                    <input
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      required
                      className={`${inputStyles2}  w-full md:w-[26rem]`}
                    />
                    <label htmlFor="email" className={`${labelStyleCustom}`}>
                      Email
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <div>
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
                      className={`${inputStyles2}  w-full md:w-[26rem]`}
                    />
                    <label htmlFor="password" className={`${labelStyleCustom}`}>
                      Password
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* button component  */}
            <div className={`${flexCentered}`}>
              <div className={`${flexCol} items-center space-y-2`}>
                <div>
                  <button
                    className={`${ButtonStyle} py-3 px-10 bg-gradientBaseAccent text-white hover:bg-gradientBaseBg2 hover:text-gradientBaseAccent ${transitions}`}
                  >
                    Sign up
                  </button>
                </div>
                {/* TODO:  remove unauthorised form content */}
                <div>
                  <Link to={"/login"}>
                    <p className={`${paragraphCustom}  text-gray-700  `}>
                      already a user
                      <span
                        className={`underline ${transitions} hover:text-gradientBaseAccent capitalize`}
                      >
                        {"  "} login in{" "}
                      </span>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            {/* end of button component  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppRegister;
