import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/AppdeyCustomStyles";

const CartEmpty = () => {
  const navigate = useNavigate();
  const { flexCol, ButtonStyle, paragraphCustom, transitions, flexCentered } =
    styles;
  return (
    <>
      <div className={`${flexCol} space-y-16`}>
        <div className={`${flexCol} space-y-10`}>
          <h2
            className={`${paragraphCustom} text-gradientBaseAccent text-5xl tracking-wider text-center`}
          >
            Your cart is empty
          </h2>
          <div className={`${flexCentered}`}>
            <button
              className={`${ButtonStyle} px-10 py-3 bg-gradientBaseAccent text-md text-white ${transitions} hover:bg-gradientBaseBg2 hover:text-gradientBaseAccent tracking-wider`}
              onClick={() => navigate("/", { replace: true })}
            >
              {" "}
              Continue shopping
            </button>
          </div>
        </div>
        <div className={`${flexCol} space-y-4`}>
          <h4
            className={`${paragraphCustom} text-gradientBaseAccent text-2xl tracking-wider text-center `}
          >
            Have an account
          </h4>
          <p
            className={`${paragraphCustom} text-gradientBaseAccent text-sm tracking-widest text-ellipsis text-center`}
          >
            <Link
              to="/login"
              className={`border-b border-solid border-b-gradientBaseAccent hover:border-b-2 hover:border-gray-800 text-center cursor-pointer `}
            >
              Log in {"  "}
            </Link>
            to check out faster
          </p>
        </div>
      </div>
    </>
  );
};

export default CartEmpty;
