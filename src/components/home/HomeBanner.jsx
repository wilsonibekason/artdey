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
        <div className={`my-2`}>
          <div className={`${flexCol}`}>
            <div className={`flex flex-col md:flex-row-reverse `}>
              <div
                className={`max-w-full min-w-[80%] md:min-w-[35%] max-h-[400px] h-32 md:h-auto  relative`}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_1246.jpg?v=1605274685&width=750"
                  alt=""
                  className="w-full h-full object-cover max-w-full "
                  width={500}
                  height={450}
                />
              </div>

              <div
                className={`max-w-full min-w-[80%] md:min-w-[65%] max-h-[400px] h-32 md:h-auto bg-gradientBaseAccent relative`}
              >
                <div className={` absolute m-auto inset-0  h-[80%] w-[80%]`}>
                  <h3
                    className={`${paragraphCustom} text-xl  md:text-4xl text-white`}
                  >
                    Connecting African artists to global collectors.
                  </h3>
                </div>
              </div>
            </div>
            {/*  */}
            <div className={`flex flex-col-reverse md:flex-row-reverse `}>
              <div
                className={`max-w-full min-w-[80%] md:min-w-[35%] max-h-[1280px] h-32 md:h-auto bg-gradientBaseAccent relative`}
              >
                <div className={`mt-auto mb-0 md:mb-20 h-full`}>
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

              <div
                className={`max-w-full min-w-[80%] md:min-w-[65%] max-h-[1280px] h-32 md:h-auto`}
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_3034_e201efd7-5139-49fd-8be0-156725be5c2b.jpg?v=1632488623&width=750"
                  alt=""
                  className="w-full h-full object-cover max-w-full "
                  width={500}
                  height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
