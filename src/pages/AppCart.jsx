import React from "react";
import { CartMain, CartProductMore } from "../components/cart";

const AppCart = () => {
  return (
    <>
      <div className="mx-28 my-20">
        <CartMain />
        <CartProductMore />
      </div>
    </>
  );
};

export default AppCart;
