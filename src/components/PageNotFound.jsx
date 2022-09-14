import React from "react";
import { Link } from "react-router-dom";
import { pagenotfoundBg } from "../assets";
import { useIcon } from "../services/OnIconContext";
import styles from "../styles/AppdeyCustomStyles";

const PageNotFound = () => {
  const { flexCentered, flexCol, ButtonStyle, paragraphCustom, transitions } =
    styles;
  const {} = useIcon();
  return (
    <>
      <div className={`${flexCentered} my-4 `}>
        <div className={`${flexCol} items-center space-y-8`}>
          <div>
            <img src={pagenotfoundBg} alt="404_img" />
          </div>
          <div>
            <p
              className={`${paragraphCustom} text-2xl text-gray-700 capitalize`}
            >
              {" "}
              Ooops, page not found...{" "}
            </p>
          </div>
          <div>
            <Link to={"/"}>
              <button
                className={`${ButtonStyle} py-3 px-8 bg-gradientBaseAccent text-gray-200  hover:bg-gradientBaseBg hover:text-gradientBaseAccent ${transitions} hover:border hover:border-gradientBaseAccent`}
              >
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
