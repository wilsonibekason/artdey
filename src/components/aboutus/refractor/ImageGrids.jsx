import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const ImageGrids = () => {
  const { flexCol, paragraphCustom, flexCentered, flexRow } = styles;
  return (
    <div className="my-40">
      <div className={`${flexCol}  `}>
        <div className={`flex flex-col-reverse md:flex-row `}>
          <div
            className={`max-w-full min-w-[80%] md:min-w-[35%] max-h-[1280px] h-32 md:h-auto bg-gradientBaseBg2 relative`}
          >
            <div className={`absolute inset-0 w-[80%] h-[80%] m-auto  `}>
              <div className={`${flexCol}`}>
                <h3
                  className={`${paragraphCustom} text-gray-500 uppercase tracking-widest text-sm `}
                >
                  meet the curator
                </h3>
                <p
                  className={`${paragraphCustom} text-gradientBaseAccent text-2xl tracking-widest  capitalize`}
                >
                  Chioma Onyenwe
                </p>
              </div>
            </div>
          </div>
          <div
            className={`max-w-full min-w-[80%] md:min-w-[65%] max-h-[1280px] h-96 md:h-auto`}
          >
            <div>
              <img
                src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/IMG_5741.jpg?v=1657883507&width=535"
                alt=""
                className="w-full h-full object-cover max-w-full "
              />
            </div>
          </div>
        </div>
        <div className={`flex flex-col md:flex-row `}>
          <div
            className={`max-w-full min-w-[80%] md:min-w-[35%] max-h-[400px] h-96 md:h-auto  relative`}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0425/2542/5825/files/Chioma_profile_pic_2.jpg?v=1657881082&width=535"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className={`max-w-full min-w-[80%] md:min-w-[65%] max-h-[400px] h-96 md:h-auto bg-gradientBaseBg2 relative`}
          >
            <div className={`absolute inset-0 w-[80%] h-[80%] m-auto`}>
              <div className={``}>
                <p
                  className={`${paragraphCustom} text-lg text-gradientBaseAccent tracking-widest leading-8`}
                >
                  Chioma Onyenwe is the founder of Raconteur Productions as well
                  as a Creative Indaba Fellow telling stories in the
                  intersection of culture, history & identity. Her work has been
                  nominated by the Africa Movie Academy as well as One World
                  Media, for her true-crime podcast, 23419. She is the
                  co-founder & curator of artdey, an online platform connecting
                  African artists to global collectors including interior and
                  film set decorators. In her spare time she is an avid deep-sea
                  diver, bumbling violinist, mixologist, mountaineer, and
                  surfer.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrids;
