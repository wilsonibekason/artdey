import React from "react";
import { useIcon } from "../../services/OnIconContext";
import styles, { uniqueStyleComponents } from "../../styles/AppdeyCustomStyles";
import CartEmpty from "./CartEmpty";

const CartContainedMain = () => {
  const {
    flexCol,
    flexCentered,
    flexRowJustify,
    paragraphCustom,
    ButtonStyle,
    flexRow,
    transitions,
    flexStart,
    borderStructure,
    itemsEnd,
  } = styles;
  const { MdDelete } = useIcon();
  const { paragraphUnderlined } = uniqueStyleComponents;
  return (
    <>
      <div>
        <div className={`${flexCol} space-y-20`}>
          {/* cart utilities content */}
          <div className={`${flexCol} space-y-10`}>
            {/* cart top */}
            <div className={`${flexRowJustify}`}>
              <div>
                <h2
                  className={`${paragraphCustom} text-4xl text-gradientBaseAccent text-ellipsis tracking-wider capitalize`}
                >
                  your cart
                </h2>
              </div>
              <div>
                <p className={`${paragraphUnderlined} ${transitions}`}>
                  Continue shopping
                </p>
              </div>
            </div>
            {/* cart center */}
            <div className={`${flexRowJustify}`}>
              <div className={`order-first`}>
                <h4
                  className={`${paragraphCustom} text-xss uppercase text-gradientBaseAccent tracking-wide`}
                >
                  product
                </h4>
              </div>
              {/* <div className={`-order-[20] justify-end`}>
               
              </div> */}
              <div className={`order-last max-w-[40%] w-full`}>
                <div className={`${flexRowJustify}`}>
                  <h4
                    className={`${paragraphCustom} text-xss uppercase text-gradientBaseAccent tracking-widest`}
                  >
                    quantity
                  </h4>
                  <h4
                    className={`${paragraphCustom} text-xss uppercase text-gradientBaseAccent tracking-wide`}
                  >
                    total
                  </h4>
                </div>
              </div>
            </div>
            <div className={`border-b border-gray-300 `} />
            {/* cart bottom */}
            <div>
              <div className={`${flexRowJustify}`}>
                <div className={`order-first ${flexRow} space-x-10`}>
                  <div>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0425/2542/5825/products/IMG_8296.heic?v=1661246831&width=300"
                      alt=""
                      className={`w-28 h-40 object-cover`}
                    />
                  </div>
                  <div className={`${flexCol} space-y-4`}>
                    <h4
                      className={`${paragraphCustom} text-gradientBaseAccent text-lg tracking-widest capitalize`}
                    >
                      focused
                    </h4>
                    <p
                      className={`${paragraphCustom} text-gradientBaseAccent text-md text-ellipsis tracking-widest`}
                    >{`$550`}</p>
                  </div>
                </div>
                <div className={`order-last max-w-[40%] w-full `}>
                  <div className={`${flexRowJustify}`}>
                    {/* incremental section */}
                    <div className={`${flexRow} items-center space-x-5`}>
                      {/*  */}
                      <div className={`${flexStart}`}>
                        <div
                          className={`${flexRow} items-center ${borderStructure} py-2.5 px-5 space-x-10 items-center rounded shadow`}
                        >
                          <span
                            className={`font-normal text-2xl text-gray-500`}
                          >
                            -
                          </span>
                          <span className={`font-normal text-md text-gray-700`}>
                            1
                          </span>
                          <span
                            className={`font-normal text-2xl text-gray-500`}
                          >
                            +
                          </span>
                        </div>
                      </div>
                      {/*  */}
                      <MdDelete
                        size={25}
                        className={`text-gradientBaseAccent `}
                      />
                    </div>
                    <div>
                      <h3
                        className={`${paragraphCustom} text-gradientBaseAccent text-lg tracking-wider`}
                      >{`$550`}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className={`border-b border-gray-300`} />
          {/* cart checkout contents */}
          <div className={`${flexCol} space-y-5`}>
            {/* <div>

            </div> */}
            <div className={`${flexRow}  justify-end space-x-5`}>
              <h4
                className={`${paragraphCustom} text-gray-800 text-lg text-ellipsis tracking-wider`}
              >
                Subtotal
              </h4>
              <p
                className={`${paragraphCustom} tracking-widest text-gradientBaseAccent text-xl `}
              >{`$550 USD`}</p>
            </div>
            <div className={`${itemsEnd}`}>
              <p
                className={`${paragraphCustom} tracking-widest text-gradientBaseAccent text-sm `}
              >
                Taxes and shipping calculated at checkout
              </p>
            </div>
            <div className={`${itemsEnd}  `}>
              <button
                className={`${ButtonStyle} text-gradientBaseBg px-40 py-3 bg-gradientBaseAccent cursor-pointer `}
              >
                Checkout
              </button>
            </div>
            {/*  */}
            <div className={`${flexRow} ${itemsEnd} space-x-4`}>
              <button
                className={`${ButtonStyle} text-white font-black bg-gradientBaseAccent py-2.5 px-8 cursor-pointer`}
              >
                Shop pay
              </button>
              <button
                className={`${ButtonStyle} text-white font-bold bg-gradientBaseAccent py-2.5 px-8 cursor-pointer`}
              >
                GPay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CartMain = () => {
  return (
    <>
      <CartContainedMain />
      {/* <CartEmpty /> */}
    </>
  );
};

export default CartMain;
