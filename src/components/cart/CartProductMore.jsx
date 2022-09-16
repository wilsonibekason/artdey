import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles, { Layout } from "../../styles/AppdeyCustomStyles";
import { ProductArtMoreData } from "../../utils/CarouselData";

const CartProductMoreCard = ({
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
  const navigate = useNavigate();
  return (
    <>
      <div
        onMouseEnter={() => setHover(id)}
        onMouseLeave={() => setHover(null)}
        onClick={() => navigate(`/art/${id}`, { replace: true })}
      >
        <div className={`${flexCol} space-y-3 cursor-pointer `}>
          {/* image section */}
          <div className={`h-[150px] md:h-[300px] relative`}>
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
              }  object-cover w-full h-[150px] md:h-[300px] absolute z-[3] backdrop-opacity-90 `}
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
              {/* <div className="pr-3">
                  <p className={`${paragraph3} text-xss uppercase text-center`}>
                    {author}
                  </p>
                </div> */}
              <div className={`${flexCentered}`}>
                <h3 className={`${paragraph3} text-lg`}>{`$${price} USD`}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CartProductMore = () => {
  const [hover, setHover] = useState(null);
  const { flexCol, flexStart, paragraph2, flexCentered } = styles;
  const { SimilargridMoreLayoutSection } = Layout;
  return (
    <>
      <div className="mt-10 md:mt-40">
        <div className={`${flexCol} space-y-6`}>
          <div className={`${flexStart} my-4`}>
            <h4 className={`${paragraph2} text-xl md:text-xxl tracking-widest`}>
              You may also like
            </h4>
          </div>
          <div className={`${SimilargridMoreLayoutSection}`}>
            {ProductArtMoreData.map((item, index) => (
              <CartProductMoreCard
                {...item}
                key={index}
                hover={hover}
                setHover={setHover}
              />
            ))}
          </div>
          <div className={`${flexCentered} `}>
            <button
              className={`py-3 px-8 font-electra text-lg text-white font-light bg-gradientBaseAccent rounded-full hover:scale-105`}
            >
              view all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProductMore;
