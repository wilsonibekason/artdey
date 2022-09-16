import React from "react";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";

const Artist = () => {
  const {
    BannerGridChild,
    BannerGridChild2,
    BannerGridLayout,
    BannerGridChild3,
    BannerGridChild4,
  } = Layout;
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
          <div className={`${BannerGridChild3}`}>
            <div className={`  h-[300px] md:h-[700px] lg:h-[500px]`}>
              <img
                src="https://cdn.shopify.com/s/files/1/0425/2542/5825/collections/IMG_7912.jpg?v=1661244261&width=535"
                alt=""
                className="w-full h-full object-cover max-w-full "
                width={500}
                height={450}
              />
            </div>
          </div>
          {/* card contents */}
          <div
            className={`${BannerGridChild4} bg-gradientBaseAccent relative h-[800px] md:h-auto`}
          >
            <div className={`inset-0 m-auto absolute w-[80%] h-[80%]`}>
              <div className={`${flexCol} ${flexStart} max-w-[80%] space-y-3 `}>
                <h5
                  className={`${paragraphCustom} text-gray-600 text-sm capitalize`}
                >
                  artist
                </h5>
                <h4
                  className={`${paragraphCustom} text-gray-400 text-md uppercase`}
                >
                  Ebeneza
                </h4>
                <p
                  className={`${paragraphCustom} text-lg text-gray-300 tracking-wide leading-8`}
                >
                  Ebenezer Ali known as Eben or Ckle a Ghanaian artist born on
                  10th December 1992 in Accra (Ghana). He graduated as a Visual
                  Artist with a special interest in the theoretical aspect of
                  art . He then continued by learning fine art and designing
                  through apprenticeship for 3 years. Eben has a passion for
                  painting, through which he discovered a different style from
                  which he was used to, abstract art. In 2018 He started selling
                  some of these paintings to galleries such as Accra Art Centre,
                  African Market gallery and the Loom gallery all in Accra
                  Ghana.
                </p>
              </div>
            </div>
          </div>
          {/* banner bottom */}
        </div>
      </div>
    </>
  );
};

export default Artist;
