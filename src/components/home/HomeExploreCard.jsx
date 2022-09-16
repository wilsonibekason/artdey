import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/AppdeyCustomStyles";

const HomeExploreCard = ({
  id,
  hiddenImage,
  activeImage,
  tag,
  price,
  author,
  hover,
  setHover,
}) => {
  const navigate = useNavigate();
  const { flexCol, flexCentered, paragraph2, paragraph3 } = styles;
  return (
    <>
      <div
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
        onClick={() => navigate(`/art/${id}`, { replace: true })}
      >
        <div className={`${flexCol} space-y-3`}>
          {/* image section */}
          <div className={`h-[450px] relative`}>
            {/* {!hover === id ? ( */}
            <img
              src={activeImage}
              alt=""
              className={`object-cover max-w-full w-full h-full ${
                hover === id && "block absolute z-[1]"
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
              }  object-cover w-full  h-[450px] absolute z-[3] backdrop-opacity-90`}
              width={800}
              height={552}
            />
            {/* )} */}
          </div>
          {/* content section */}
          <div className={``}>
            <div className={`${flexCol} space-y-2`}>
              <div className={`${flexCentered}`}>
                <h4
                  className={`${paragraph2}  text-md  ${
                    hover === id && "underline"
                  }`}
                >
                  {tag}
                </h4>
              </div>
              <div className="pr-3">
                <p className={`${paragraph3} text-xss uppercase text-center`}>
                  {author}
                </p>
              </div>
              <div className={`${flexCentered}`}>
                <h3 className={`${paragraph3} text-sm`}>{`$${price} USD`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeExploreCard;
