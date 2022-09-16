import React from "react";
import { useNavigate } from "react-router-dom";
import { useIcon } from "../../../../services/OnIconContext";
import styles from "../../../../styles/AppdeyCustomStyles";

const CollectionContentsCards = ({
  id,
  hiddenImage,
  activeImage,
  tag,
  price,
  author,
  hover,
  setHover,
}) => {
  const { flexCol, flexCentered, paragraphCustom, flexRow, transitions } =
    styles;
  const { BsArrowRight } = useIcon();
  const navigate = useNavigate();
  return (
    <>
      <div
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
        onClick={() => navigate(`/collection/${id} `, { replace: true })}
      >
        <div className={`${flexCol} space-y-3`}>
          {/* image section */}
          <div className={`h-[300px]`}>
            <img
              src={activeImage}
              alt=""
              className={`object-cover max-w-full w-full h-full ${
                hover === id && "block  z-[1] scale-95"
              }  ${transitions} `}
              width={800}
              height={552}
            />
          </div>
          {/* content section */}
          <div className={``}>
            <div className={`${flexCol} space-y-2`}>
              <div className={`${flexCentered}`}>
                <div className={`${flexRow} items-center space-x-2`}>
                  <h4
                    className={`${paragraphCustom} cursor-pointer text-gradientBaseAccent  text-lg ${transitions}  ${
                      hover === id && "underline"
                    }`}
                  >
                    {tag}
                  </h4>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollectionContentsCards;
