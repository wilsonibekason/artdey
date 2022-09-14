import React from "react";
import { useIcon } from "../../services/OnIconContext";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";

const ContactAbout = () => {
  const {
    flexCol,
    flexCentered,
    ButtonStyle,
    paragraphCustom,
    transitions,
    inputStyles,
    labelStyleCustom,
    inputStylesCustom,
    labelStyleCustom2,
    flexRow,
  } = styles;
  const {
    contactGridChild,
    contactGridChild2,
    contactGridChild3,
    contactGridLayout,
  } = Layout;
  const { BsArrowRight } = useIcon();
  return (
    <>
      <div className={`mx-40`}>
        <div className={`${flexCol} space-y-12`}>
          {/* contact information */}
          <div>
            <div className={`${flexCol} space-y-5`}>
              <h2
                className={`${paragraphCustom} text-5xl text-gradientBaseAccent text-center `}
              >
                We would love to work with you
              </h2>
              <p
                className={`${paragraphCustom} text-md tracking-widest leading-8 text-gradientBaseAccent text-center `}
              >
                If you are a new or seasoned collector, decorator, artist,
                potential partner, or simply curious about anything we do,
                please get in touch.
              </p>
            </div>
          </div>
          <div></div>
          <div className={`${flexCol} space-y-6`}>
            <div className={`${flexRow} space-x-4 `}>
              <div>
                <div>
                  <div className={`relative  group  max-w-full `}>
                    <input
                      type="name"
                      placeholder="name"
                      autoComplete="name"
                      required
                      className={`${inputStylesCustom} w-96`}
                    />
                    <label htmlFor="name" className={`${labelStyleCustom2}`}>
                      Name
                    </label>
                  </div>
                </div>
              </div>{" "}
              {/* second row input */}
              <div>
                <div>
                  <div className={`relative  group  max-w-full `}>
                    <input
                      type="email"
                      placeholder="email"
                      autoComplete="email"
                      required
                      className={`${inputStylesCustom} w-[400px]`}
                    />
                    <label htmlFor="email" className={`${labelStyleCustom2}`}>
                      Email*
                    </label>
                  </div>
                </div>
              </div>{" "}
            </div>
            <div>
              <div>
                <div className={`relative  group  max-w-full `}>
                  <input
                    type="text"
                    placeholder="phone number"
                    autoComplete="text"
                    required
                    className={`${inputStylesCustom} w-full`}
                  />
                  <label htmlFor="text" className={`${labelStyleCustom2}`}>
                    Phone Number
                  </label>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <div>
                <div className={`relative  group  max-w-full `}>
                  <textarea
                    name=""
                    id=""
                    cols="20"
                    rows="10"
                    required
                    className={`${inputStylesCustom} w-full`}
                  ></textarea>
                  <label
                    htmlFor="text"
                    className={`${labelStyleCustom2} text-xl text-gradientBaseAccent my-2`}
                  >
                    Message
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              className={`${ButtonStyle} py-2.5 px-8 bg-gradientBaseAccent text-gradientBaseBg ${transitions} hover:text-gradientBaseAccent hover:bg-gradientBaseBg2`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactAbout;
