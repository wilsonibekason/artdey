import React from "react";
import { CartMain, CartProductMore } from "../components/cart";

const AppCart = () => {
  return (
    <>
      <div className="mx-10 md:mx-12 lg:mx-28 my-20">
        <CartMain />
        <CartProductMore />
      </div>
    </>
  );
};

export default AppCart;
