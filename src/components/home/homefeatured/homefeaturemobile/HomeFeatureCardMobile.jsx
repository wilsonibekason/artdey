import React from "react";
import styles from "../../../../styles/AppdeyCustomStyles";

const HomeFeatureCardMobile = ({
  id,
  hiddenImage,
  activeImage,
  tag,
  price,
  author,
  hover,
  setHover,
}) => {
  const { flexCol, flexCentered, paragraph2, paragraph3 } = styles;
  return (
    <>
      <div
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
        className="max-w-[50%] sm:min-w-[30%] max-h-[20%] md:max-h-[50%] flex-shrink-0"
      >
        <div className={`${flexCol} space-y-1 `}>
          <div className={`h-[150px] md:h-[350px] `}>
            <img
              src={activeImage}
              alt=""
              className={`object-cover max-w-full w-full h-full `}
              width={700}
              height={552}
            />
          </div>
          {/*  */}
          <div className={`mt-2 md:mt-0`}>
            <div className={`${flexCol} space-y-1 md:space-y-2`}>
              <div className={`${flexCentered}`}>
                <h4 className={`${paragraph2} text-xss   md:text-md `}>
                  {tag}
                </h4>
              </div>
              <div className="pr-3">
                <p
                  className={`${paragraph3} text-sm md:text-md tracking-widest uppercase text-center`}
                >
                  {author}
                </p>
              </div>
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

export default HomeFeatureCardMobile;
