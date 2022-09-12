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
          <div className={`${BannerGridChild2} bg-gradientBaseAccent`}>
            <div className={`${flexCentered} mt-40`}>
              <div className={`${flexCol} ${flexStart} max-w-[80%] space-y-3`}>
                <p className={`${paragraphCustom} text-2xl text-gray-300`}>
                  Africa has always been a part of global art history, with
                  artworks discovered on the continent more than 100,000 years
                  ago. I believe in making her contemporary art accessible for
                  everyone.
                </p>
                <h4
                  className={`${paragraphCustom} text-gray-400 text-md uppercase`}
                >
                  CHIOMA ONYENWE - CO-FOUNDER & CURATOR
                </h4>

                <button
                  className={`${ButtonStyle} bg-gray-200  py-2.5 px-5 text-gray-900 tracking-widest hover:bg-white ${transitions}`}
                >
                  Read more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBannerMore;
