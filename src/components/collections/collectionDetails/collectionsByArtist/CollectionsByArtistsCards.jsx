import React from "react";
import styles from "../../../../styles/AppdeyCustomStyles";

const CollectionsByArtistsCards = ({
  id,
  hiddenImage,
  activeImage,
  tag,
  price,
  author,
  hover,
  setHover,
}) => {
  const { flexCol, flexCentered, paragraph3, paragraph2 } = styles;

  return (
    <>
      <div
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
      >
        <div className={`${flexCol} space-y-3`}>
          {/* image section */}
          <div className={` h-[150px] md:h-[450px] relative`}>
            {/* {!hover === id ? ( */}
            <img
              src={activeImage}
              alt=""
              className={`object-cover max-w-full w-full h-full ${
                hover === id && "block absolute z-[1] "
              } `}
              width={800}
              height={552}
            />
            {/* ) : ( */}
            <img
              src={hiddenImage}
              alt=""
              className={` ${
                hover === id &&
                "transition ease-in duration-700 delay-900" &&
                "backdrop-blur-md "
              }  ${
                hover !== id && "hidden"
              }  object-cover w-full h-[150px]  md:h-[450px] absolute z-[3] backdrop-opacity-90 `}
              width={800}
              height={552}
            />
            {/* )} */}
          </div>
          {/* content section */}
          <div className={``}>
            <div className={`${flexCol} space-y-px md:space-y-2`}>
              <div className={`${flexCentered}`}>
                <h4
                  className={`${paragraph2}  text-sm md:text-md  ${
                    hover === id && "underline"
                  }`}
                >
                  {tag}
                </h4>
              </div>
              {/* <div className="pr-3">
                <p className={`${paragraph3} text-xss uppercase text-center`}>
                  {author}
                </p>
              </div> */}
              <div className={`${flexCentered}`}>
                <h3
                  className={`${paragraph3} text-md md:text-lg`}
                >{`$${price} USD`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionsByArtistsCards;
