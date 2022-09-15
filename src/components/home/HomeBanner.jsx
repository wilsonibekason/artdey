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
        <div
          className={`h-full md:h-screen md:max-h-screen phone:my-8 tablet:my-12 desktop:my-40 Xdesktop:my-40`}
        >
          <div
            className={`${BannerGridLayout} h-max-h-[40%] md:max-h-[40vh] h-[30%] md:h-[40vh]`}
          >
            <div
              className={`${BannerGridChild2} bg-gradientBaseAccent relative min-h-[150px] h-[40%] md:h-[40vh]`}
            >
              <div className={` absolute m-auto inset-0  h-[80%] w-[80%]`}>
                <h3
                  className={`${paragraphCustom} text-xl  md:text-4xl text-white`}
                >
                  Connecting African artists to global collectors.
                </h3>
              </div>
            </div>
            <div className={`${BannerGridChild}`}>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_1246.jpg?v=1605274685&width=750"
                  alt=""
                  className="max-w-full w-full min-h-[10%]  md:h-[40vh] object-cover"
                />
              </div>
            </div>
          </div>
          <div
            className={`${BannerGridLayout} sm:max-h-[40%] md:max-h-[60vh] h-[40%] md:h-[60vh]`}
          >
            <div className={`${BannerGridChild2}`}>
              <div>
                <img
                  src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_3034_e201efd7-5139-49fd-8be0-156725be5c2b.jpg?v=1632488623&width=750"
                  alt=""
                  className="max-w-full w-full min-h-[25%]  md:h-[60vh] object-cover"
                />
              </div>
            </div>
            <div
              className={`${BannerGridChild} max-h-[60vh]  bg-gradientBaseAccent flex `}
            >
              <div className={`mt-auto mb-20 h-full`}>
                <div
                  className={`${flexCol} space-y-3 my-auto h-full  items-center justify-center `}
                >
                  <div className={`max-w-[70%] lg:max-w-[60%] `}>
                    <h4
                      className={`${paragraphCustom} text-white phone:text-xl tablet:text-xl desktop:text-2xl Xdesktop:text-2xl`}
                    >
                      Build or enhance your collections
                    </h4>
                  </div>
                  <div>
                    <button
                      className={`${ButtonStyle} py-2 px-5 md:py-3 md:px-6  text-gray-800 bg-white`}
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
