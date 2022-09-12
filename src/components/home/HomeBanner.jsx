import React from "react";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";

const HomeBanner = () => {
  const {
    flexCentered,
    paragraph3,
    paragraphCustom,
    itemsCenter,
    flexCol,
    ButtonStyle,
  } = styles;
  const { BannerGridLayout, BannerGridChild, BannerGridChild2 } = Layout;

  return (
    <>
      <div>
        <div className={`h-screen max-h-screen my-20`}>
          <div className={`${BannerGridLayout} max-h-[40vh] h-[40vh]`}>
            <div
              className={`${BannerGridChild2} bg-gradientBaseAccent ${itemsCenter}`}
            >
              <div className={`max-w-[80%]`}>
                <h3 className={`${paragraphCustom} text-4xl text-white`}>
                  Connecting African artists to global collectors.
                </h3>
              </div>
            </div>
            <div className={`${BannerGridChild}`}>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_1246.jpg?v=1605274685&width=750"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`${BannerGridLayout} max-h-[60vh] h-[60vh]`}>
            <div className={`${BannerGridChild2}`}>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_3034_e201efd7-5139-49fd-8be0-156725be5c2b.jpg?v=1632488623&width=750"
                  alt=""
                />
              </div>
            </div>
            <div className={`${BannerGridChild}  bg-gradientBaseAccent flex`}>
              <div className={`mt-auto mb-20`}>
                <div
                  className={`${flexCol} space-y-3 my-auto h-full  items-center justify-center `}
                >
                  <div className={`max-w-[60%] `}>
                    <h4 className={`${paragraphCustom} text-white text-2xl`}>
                      Build or enhance your collections
                    </h4>
                  </div>
                  <div>
                    <button
                      className={`${ButtonStyle} py-3 px-6 text-gray-800 bg-white`}
                    >
                      view more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
