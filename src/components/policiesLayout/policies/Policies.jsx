import React from "react";
import styles from "../../../styles/AppdeyCustomStyles";

const Policies = () => {
  const { flexCol, flexCentered, paragraphCustom, transitions } = styles;
  return (
    <>
      <div className={`mx-72`}>
        <div className={`${flexCol} space-y-10`}>
          <div>
            <h1
              className={`${paragraphCustom} capitalize text-4xl text-gradientBaseAccent text-center `}
            >
              Refund Policy
            </h1>
          </div>
          {/* terms and services contents */}

          <div className={`${flexCol} space-y-2`}>
            <h2
              className={`${paragraphCustom} text-xl text-gradientBaseAccent tracking-wider uppercase `}
            >
              Returns & Exchanges
            </h2>
            <div>
              <p
                className={`${paragraphCustom} text-md tracking-widest leading-8 text-gradientBaseAccent `}
              >
                All art sold on the website is non-refundable. We are happy to
                work with you to ensure that you are delighted with the piece
                you've chosen and we take extreme care to make sure that orders
                are correctly packed and the piece is in perfect condition. If
                the item received is damaged, you will be eligible for store
                credit. You can always contact us for any return/exchange
                question at{" "}
                <span
                  className={` ${transitions} border-b border-gray-600 hover:border-gray-900 hover:border-b-2 `}
                >
                  hello@artdey.com.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;
