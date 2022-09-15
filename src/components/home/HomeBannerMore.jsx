import React from "react";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";

const HomeBannerMore = () => {
  const { BannerGridChild, BannerGridChild2, BannerGridLayout } = Layout;
  const {
    flexCol,
    flexCentered,
    flexStart,
    paragraphCustom,
    ButtonStyle,
    transitions,
  } = styles;
  return (
    <>
      <div className={`my-10`}>
        <div className={`${BannerGridLayout} `}>
          <div className={`${BannerGridChild}`}>
            <div className={`h-[500px]`}>
              <img
                src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/matosan_2.jpg?v=1657886385&width=750"
                alt=""
                className="w-full h-full object-cover max-w-full "
                width={500}
                height={450}
              />
            </div>
          </div>
          {/* card contents */}
          <div className={`${BannerGridChild2} bg-gradientBaseAccent relative`}>
            <div className={`inset-0 m-auto absolute w-[80%] h-[80%]`}>
              <div className={`${flexCol} ${flexStart} max-w-[90%] space-y-3`}>
                <p
                  className={`${paragraphCustom} text-xl  md:text-2xl tracking-wider  text-gray-300 `}
                >
                  Africa has always been a part of global art history, with
                  artworks discovered on the continent more than 100,000 years
                  ago. I believe in making her contemporary art accessible for
                  everyone.
                </p>
                <h4
                  className={`${paragraphCustom} text-gray-400 text-sm md:text-sm lg:text-md uppercase  w-full`}
                >
                  CHIOMA ONYENWE - CO-FOUNDER & CURATOR
                </h4>

                <div>
                  <button
                    className={`${ButtonStyle} bg-gray-200  md:text-md py-2.5 px-5 text-gray-900 tracking-widest hover:bg-white ${transitions}`}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBannerMore;
