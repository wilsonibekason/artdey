import React from "react";
import { CartEmpty, CartMain } from "../components/cart";

const AppCart = () => {
  return (
    <>
      <div>
        <CartMain />
        <CartEmpty />
      </div>
    </>
  );
};

export default AppCart;
