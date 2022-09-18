import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import { order, ordered, restocked } from "./CakeSlice";
const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  const dispatchOrder = () => dispatch(ordered());
  const dispatchRestake = () => dispatch(restocked(5));
  const dispatchRestakeAndRestake = () => dispatch(restocked(5));
  return (
    <>
      <div>
        <h2>number of cakes</h2>
        <button onClick={dispatchOrder}>order cakes</button>
        <button onClick={dispatchRestake}>restock cakes</button>
      </div>
    </>
  );
};

export default CakeView;
