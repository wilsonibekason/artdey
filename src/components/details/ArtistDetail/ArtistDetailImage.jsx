import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const ArtMainImage = () => {
  return (
    <>
      <div className={`max-h-screen h-[1500px] `}>
        <img
          src="https://cdn.shopify.com/s/files/1/0425/2542/5825/products/IMG_8296.heic?v=1661246831&width=1066"
          alt=""
          className={`object-cover max-h-full max-w-full w-full h-full `}
        />
      </div>
    </>
  );
};

const ArtImageMoreCollections = () => {
  const { flexRow, flexCol } = styles;
  return (
    <>
      <div
        className={`${flexRow} flex-nowrap gap-x-10 w-full overflow-x-auto scrollbar-none`}
      >
        <div className="max-h-80 max-w-[50%] flex-shrink-0">
          <img
            src="https://cdn.shopify.com/s/files/1/0425/2542/5825/products/wallapp-23082022-175632.jpg?v=1661270311&width=720"
            alt=""
            className={`object-cover max-h-full max-w-full h-full`}
          />
        </div>
        <div className={`max-h-80 max-w-[50%] flex-shrink-0`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0425/2542/5825/products/wallapp-23082022-175632.jpg?v=1661270311&width=720"
            alt=""
            className={`object-cover max-h-full max-w-full h-full`}
          />
        </div>
        <div className={`max-h-80 max-w-[50%] flex-shrink-0`}>
          <img
            src="https://cdn.shopify.com/s/files/1/0425/2542/5825/products/wallapp-23082022-175632.jpg?v=1661270311&width=720"
            alt=""
            className={`object-cover max-h-full max-w-full h-full`}
          />
        </div>
      </div>
    </>
  );
};
const ArtistDetailImage = () => {
  const { flexCol, flexCentered } = styles;
  return (
    <>
      <div
        className={` max-h-screen max-w-full overflow-y-auto scrollbar-none sticky`}
      >
        <div className={`${flexCol} space-y-10`}>
          <div>
            <ArtMainImage />
          </div>
          <div className={``}>
            <ArtImageMoreCollections />
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistDetailImage;
