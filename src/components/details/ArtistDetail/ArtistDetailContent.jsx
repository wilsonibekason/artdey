import React from "react";
import { useIcon } from "../../../services/OnIconContext";
import styles from "../../../styles/AppdeyCustomStyles";

const ArtDetailinfo = () => {
  const {
    flexStart,
    flexCol,
    paragraphCustom,
    flexRow,
    borderStructure,
    flexCentered,
    ButtonStyle,
    transitions,
  } = styles;

  return (
    <>
      <div className={`${flexCol} space-y-10 py-2`}>
        <div className={`${flexCol} space-y-2`}>
          <h4 className={`${paragraphCustom} text-gray-500 text-sm uppercase`}>
            Ebenezer
          </h4>
          <h2
            className={`${paragraphCustom} text-gray-700 capitalize text-5xl `}
          >
            Focused
          </h2>
        </div>
        <div>
          <h5 className={`${paragraphCustom} text-gray-500 text-xl uppercase`}>
            {`$550`} USD
          </h5>
        </div>
        <div className={`${flexCol} space-y-2`}>
          <h4 className={`${paragraphCustom} text-gray-800 text-md`}>
            Quantity
          </h4>
          <div className={`${flexStart}`}>
            <div
              className={`${flexRow} items-center ${borderStructure} py-2.5 px-5 space-x-10 items-center rounded shadow`}
            >
              <span className={`font-normal text-2xl text-gray-500`}>-</span>
              <span className={`font-normal text-md text-gray-700`}>1</span>
              <span className={`font-normal text-2xl text-gray-500`}>+</span>
            </div>
          </div>
        </div>
        <div className={`${flexCol} space-y-3`}>
          <button
            className={`${ButtonStyle} py-3  border-2 border-solid border-gradientBaseAccent w-full hover:border-gray-800 ${transitions}`}
          >
            Add to cart
          </button>
          <button
            className={`${ButtonStyle} py-3  w-full ${transitions} bg-black text-white hover:underline`}
          >
            Pay with Gpay
          </button>
        </div>
        {/* more payment options */}
        <div>
          <p
            className={`${paragraphCustom} text-gray-600 hover:underline ${transitions} text-center text-lg`}
          >
            More payment options
          </p>
        </div>
      </div>
    </>
  );
};

const ArtDetailMore = () => {
  const { flexStart, flexCol, flexRow, paragraphCustom, listStyles } = styles;
  const { FiDownload } = useIcon();

  return (
    <>
      <div className={`${flexStart}`}>
        <div className={`${flexCol} space-y-5`}>
          <div className={`${flexRow} items-center space-x-2`}>
            <FiDownload />
            <p className={`${paragraphCustom} text-lg text-gradientBaseAccent`}>
              Share{" "}
            </p>
          </div>
          <div>
            <h4 className={`${paragraphCustom} text-xl`}>Details</h4>
          </div>
          <div>
            <ul className={`${listStyles} list-outside`}>
              <li> Original artwork, 2022</li>
              <li>Acrylic on canvas</li>
              <li>30 * 40 inches</li>
              <li>Unframed</li>
            </ul>
          </div>
          <div>
            <h4 className={`${paragraphCustom} text-xl`}>Authenticity</h4>
          </div>
          <div>
            <ul className={`${listStyles} list-outside`}>
              <li> The painting is signed by the artist Ebenezer.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const ArtistDetailContent = () => {
  const { flexStart, flexCol } = styles;

  return (
    <>
      <div className="mx-8">
        <div className={`${""}`}>
          <div className={`${flexCol}`}>
            <div>
              <ArtDetailinfo />
            </div>
            <div>
              <ArtDetailMore />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtistDetailContent;
